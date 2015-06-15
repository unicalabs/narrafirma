import topic = require("../../pointrel20150417/topic");

"use strict";

function calculate_function(panelBuilder, contentPane, model, fieldSpecification) {
    console.log("calculate_function called", fieldSpecification);
    return panelBuilder.calculateFunctionResult(contentPane, model, fieldSpecification);
}

function add_functionResult(panelBuilder, contentPane, model, fieldSpecification) {  
    var calculate = calculate_function.bind(null, panelBuilder, contentPane, model, fieldSpecification);
    
    var label = panelBuilder._add_calculatedText(panelBuilder, contentPane, fieldSpecification, calculate);
    
    var functionName = fieldSpecification.displayConfiguration;
    
    if (_.isString(functionName)) {
        // Subscribe for updates on the same topic as the function name
        var subscription = topic.subscribe(functionName, panelBuilder.updateLabelUsingCalculation.bind(panelBuilder, label.updateInfo));
    
        // TODO: Kludge to get this other previous created widget to destroy a subscription when the page is destroyed...
        label.own(subscription);
    }
    
    return label;
}

export = add_functionResult;
