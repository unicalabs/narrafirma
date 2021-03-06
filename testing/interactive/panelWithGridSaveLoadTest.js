require([
    "dojo/text!js/applicationPanelSpecifications/planning/page_participantGroups.json",
    "dojo/text!js/applicationPanelSpecifications/planning/panel_addParticipantGroup.json",
    "js/panelBuilder/PanelBuilder",
    "js/panelBuilder/PanelSpecificationCollection",
    "js/pointrel20141201Client",
    "dojo/Stateful",
    "dojo/domReady!"
], function(
    page_partipantGroupsPanelSpecificationText,
    panel_addParticipantGroupSpecificationText,
    PanelBuilder,
    PanelSpecificationCollection,
    pointrel20141201Client,
    Stateful
){
    "use strict";
    
    function storeModel(model, documentID, previous, committerID, callbackWhenDone) {
        var contentType = "org.workingwithstories.Test2Model";
        var contentVersion = "0.1.0";
        
        var metadata = {
            id: documentID,
            previous: previous,
            tags: [],
            contentType: contentType,
            contentVersion: contentVersion,
            author: null,
            committer: committerID,
            timestamp: true
        };        
        pointrel20141201Client.storeInNewEnvelope(model, metadata, function(error, serverResponse) {
            if (error) {
                console.log("could not write new model version:\n" + error);
                return callbackWhenDone(error);
            }
            var sha256HashAndLength = serverResponse.sha256AndLength;
            console.log("wrote sha256HashAndLength:", sha256HashAndLength);
            callbackWhenDone(null, sha256HashAndLength);
        });
    }
    
    function loadLatestModelVersion(documentID, callbackWhenDone) {
        console.log("============= loadLatestModelVersion");
        pointrel20141201Client.loadLatestEnvelopeForID(documentID, function(error, envelope) {
            if (error) {
                if (error === "No items found for id") error = "No stored versions could be loaded -- have any versions been saved?";
                return callbackWhenDone(error);
            }
            callbackWhenDone(null, envelope.content, envelope);           
        });
    }
    
    function test() {
        console.log("panelWitGridSaveLoadTest.js");
        
        var page_partipantGroupsPanelSpecification = JSON.parse(page_partipantGroupsPanelSpecificationText);
        
        console.log("page_partipantGroupsPanelSpecification", page_partipantGroupsPanelSpecification);
        
        page_partipantGroupsPanelSpecification.modelClass = "Test2Model";
        
        var panels = new PanelSpecificationCollection();
        
        panels.addPanelSpecification(page_partipantGroupsPanelSpecification);
        
        panels.addPanelSpecificationFromJSONText(panel_addParticipantGroupSpecificationText);
        
        var testModelTemplate = panels.buildModel("Test2Model");
        
        var testModel = new Stateful(testModelTemplate);
        
        console.log("testModel", testModel);
        
        var panelBuilder = new PanelBuilder({panelSpecificationCollection: panels});
        
        var contentPane = panelBuilder.newContentPane();
        contentPane.placeAt("pageDiv").startup();
        
        panelBuilder.buildPanel("page_participantGroups", contentPane, testModel);
        
        var loadLatestButtonSpecification = {
            id: "loadButton",
            displayType: "button",
            displayPrompt: "Load latest",
            displayConfiguration: loadLastestModelVersion,
            displayPreventBreak: true
        };
        
        var loadLatestButton = panelBuilder.buildField(contentPane, testModel, loadLatestButtonSpecification);
        
        var storeButtonSpecification = {
            id: "storeButton",
            displayType: "button",
            displayPrompt: "Store",
            displayConfiguration: storeModelVersion
        };
        
        var storeButton = panelBuilder.buildField(contentPane, testModel, storeButtonSpecification);
        
        // Thinking project ID should be a UUID?
        var projectID = "TestProject1234";
        var documentID = projectID + "-participantGroups";
        var committerID = "tester@example.com";
        
        function loadLastestModelVersion() {
            console.log("trying to load latest");
            loadLatestModelVersion(documentID, function(error, latestModelVersion, envelope) {
                console.log("load result", error, latestModelVersion, envelope);
                if (error) {
                    alert("An error happened when loading: " + error);
                } else {
                    console.log("Loaded OK");
                    for (var key in testModelTemplate) {
                        console.log("key", key);
                        if (testModel.hasOwnProperty(key)) {
                            console.log("Trying to copy", key);
                            testModel.set(key, latestModelVersion[key]);
                        }
                    }
                    alert("Loaded OK\n" + envelope.__sha256HashAndLength);
                }
            });
        }
        
        function storeModelVersion() {
            console.log("trying to store", testModel);
            storeModel(testModel, documentID, null, committerID, function(error, sha256AndLength) {
                console.log("store result", error, sha256AndLength);
                if (error) {
                    alert("An error happened when storing: " + error);
                } else {
                    alert("Stored OK\n" + sha256AndLength);
                }
            });
        }
    }

    test();
});