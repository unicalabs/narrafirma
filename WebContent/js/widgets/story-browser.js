"use strict";

define([
    "dojo/_base/array",
    "dojo/_base/connect",
    "js/domain",
    "dojo/dom-construct",
    "dojo/dom-style",
    "dojo/_base/lang",
    "dojo/query",
    "dijit/registry",
    "dojo/string",
    "js/translate",
    "js/utility",
    "js/widgetBuilder",
    "./grid-table",
    "dojo/_base/window",
    "dijit/layout/ContentPane",
    "dojo/store/Memory",
    "dijit/form/MultiSelect",
    "dijit/form/Select",
    "dojo/Stateful",
    "dojox/layout/TableContainer",
], function(
    array,
    connect,
    domain,
    domConstruct,
    domStyle,
    lang,
    query,
    registry,
    string,
    translate,
    utility,
    widgetBuilder,
    widgetGridTable,
    win,
    ContentPane,
    Memory,
    MultiSelect,
    Select,
    Stateful,
    TableContainer
){
    // story browser support
    
    function setOptionsInMultiSelect(widget, options) {
        // console.log("setOptionsInMultiSelect", widget, options);
        query('option', widget.domNode).forEach(function(node, index, arr) {
            // console.log("node", node);
            domConstruct.destroy(node);
        }); 
        
        for (var i in options){
            var c = win.doc.createElement('option');
            c.innerHTML = options[i].label;
            c.value = options[i].value;
            widget.domNode.appendChild(c);
        }
        // console.log("done");
    }
    
    function newMultiSelect(id, options) {
        var widget = new MultiSelect({
            "id": id + "answers1",
            "size": 12,
            "style": "width: 100%;"
            //"options": options
        });
        
        setOptionsInMultiSelect(widget, options);
        
        // selectWidget.on("change", mainSelectChanged);
        
        return widget;
    }
    
    function questionChanged(questionsById, multiSelect, data, newValue) {
        console.log("event", newValue);
        var question = questionsById[newValue];
        //console.log("question", question);
        var options = optionsFromQuestion(question, data);
        setOptionsInMultiSelect(multiSelect, options);
    }
    
    function optionsFromQuestion(question, data) {
        // TODO: Translate text for options, at least booleans?
        var options = [];
        
        if (!question) return options;
        
        // Compute how many of each answer -- assumes typically less than 200-1000 stories
        var totals = {};
        array.forEach(data, function(item) {
            var oldValue = totals[item[question.id]];
            if (!oldValue) oldValue = 0;
            totals[item[question.id]] = oldValue + 1;
        });
        
        var count;
        var each;
        
        if (question.type === "select") {
            console.log("select", question, question.options);
            array.forEach(question.options.split("\n"), function(each) {
                // console.log("option", id, each);
                count = totals[each];
                if (!count) count = 0;
                options.push({label: each + " (" +  count + ")", value: each});
            });
        } else if (question.type === "slider") {
            console.log("slider", question, question.options);
            for (each = 0; each <= 100; each++) {
                count = totals[each];
                if (!count) count = 0;
                options.push({label: each + " (" +  count + ")", value: each});
            }
        } else if (question.type === "boolean") {
            // TODO; Not sure this will really be right with true/false as booleans instead of strings
            array.forEach([true, false], function(each) {
                // console.log("option", id, each);
                count = totals[each];
                if (!count) count = 0;
                options.push({label: each + " (" +  count + ")", value: each});
            });
        } else if (question.type === "text") {
            for (var eachTotal in totals){
                if (totals.hasOwnProperty(eachTotal)) {
                    count = totals[eachTotal];
                    if (!count) count = 0;
                    options.push({label: eachTotal + " (" +  count + ")", value: eachTotal});                    
                }
            }
        } else {
            console.log("ERROR: question type not supported: ", question.type, question);
            options.push({label: "*ALL*" + " (" +  data.length + ")", value: "*ALL*"});
        }
        return options;
    }
    
    function createFilterPane(id, questionsById, questionOptions, data, containerPane) {
        var contentPane = new ContentPane({
            id: id + "_content",
            style: "width: 95%;"
            // doLayout: false
        });
        
        containerPane.addChild(contentPane);
         
        var question = utility.newSelect(id + "_question", questionOptions, null, contentPane);
        question.set("style", "width: 98%; max-width: 98%");
        
        contentPane.containerNode.appendChild(domConstruct.toDom('<br>'));
        
        var answers = newMultiSelect(id + "_answers", []);
        contentPane.addChild(answers);
        answers.startup();

        question.on("change", lang.partial(questionChanged, questionsById, answers, data)); 
        
        contentPane.startup();

        return {"contentPane": contentPane, "question": question, "answers": answers};
    }
    
    var filterableQuestionTypes = ["select", "slider", "boolean", "text"];
    
    function insertStoryBrowser(pagePane, model, id, pageDefinitions) {
        console.log("insertStoryBrowser start", id);
        
        var popupPageDefinition = {
             "id": "testDogQuestions",
             "questions": domain.testDogQuestions,
             buildPage: function (builder, contentPane, model) {
                 widgetBuilder.addQuestions(domain.testDogQuestions, contentPane, model);
             }
        };

        var data = model.get(id);
        if (!data) {
            data = [];
            model.set(id, data);
        }
        
        // Store will modify underlying array
        var dataStore = new Memory({
            // data: storyList,
            data: data
            // TODO: title may not be unique
            // idProperty: "uniqueID",
        });
        
        var questionOptions = [];
        var questionsById = {};
        array.forEach(popupPageDefinition.questions, function (question) {
            if (array.indexOf(filterableQuestionTypes, question.type) != -1) {
                questionOptions.push({label: translate(question.id + "::shortName", "*FIXME -- Missing shortName translation for: " + question.id), value: question.id});
                questionsById[question.id] = question;
            }
        });
        
        console.log("insertStoryBrowser middle 1", id);
        
        var table = new TableContainer({
            id: id + "_table",
            cols: 2,
            showLabels: false,
            customClass: "storyFilterTable",
            style: "width: 98%;",
            spacing: 10
        });
        
        console.log("insertStoryBrowser middle 2", id);
        
        var filter1 = createFilterPane(id + "_1", questionsById, questionOptions, data, table);
        var filter2 = createFilterPane(id + "_2", questionsById, questionOptions, data, table);

        // pagePane.containerNode.appendChild(domConstruct.toDom('<br>'));
        
        // table needs to be added to container after its children are added to it so that the layout will happen correctly, otherwise startup called too soon internally
        if (!pagePane.addChild) {
            // console.log("trouble -- does not have addChild method!", pagePane);
            pagePane.containerNode.appendChild(table.domNode);
        } else {
            pagePane.addChild(table);
        }
        
        // This is appears to be superflous as startup is called when table added to pagePane (assuming it is connected to DOM hierarchy?)
        table.startup();
        
        var storyList;
        
        var filterButton = utility.newButton(id + "_filter", "button_Filter", pagePane, function () {
            console.log("filter pressed");
            var question1Choice = filter1.question.get("value");
            var answers1Choices = filter1.answers.get("value");
            console.log("question1", question1Choice, "answers1", answers1Choices);
            var question2Choice = filter2.question.get("value");
            var answers2Choices = filter2.answers.get("value");
            console.log("question2", question2Choice, "answers2", answers2Choices);
            storyList.grid.set("query", function (item) {
                var match1 = true;
                if (question1Choice) {
                    var question1Value = "" + item[question1Choice];
                    match1 = answers1Choices.indexOf(question1Value) != -1;
                }
                var match2 = true;
                if (question2Choice) {
                    var question2Value = "" + item[question2Choice];
                    match2 = answers2Choices.indexOf(question2Value) != -1;
                }
                return match1 & match2;
            });
        });
        
        console.log("insertStoryBrowser middle 3", id);
        
        storyList = widgetGridTable.insertGridTableBasic(pagePane, id, dataStore, popupPageDefinition, true);
        
        console.log("insertStoryBrowser finished");
    }
    
    return {
        "insertStoryBrowser": insertStoryBrowser
    };
    
});