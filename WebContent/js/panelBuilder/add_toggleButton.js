define([
    "dojox/mvc/at",
    "dijit/layout/ContentPane",
    "dojo/_base/lang",
    "dijit/form/ToggleButton",
    "js/translate"
], function(
    at,
    ContentPane,
    lang,
    ToggleButton,
    translate
){
    "use strict";
    
    function add_toggleButton(panelBuilder, contentPane, model, fieldSpecification) {
        var questionContentPane = panelBuilder.createQuestionContentPaneWithPrompt(contentPane, fieldSpecification);
        
        // Toggle button maintains a "checked" flag, so we need to set value ourselves
        var toggleButton = new ToggleButton({
            label: "" + model.get(fieldSpecification.id),
            value: at(model, fieldSpecification.id),
            onChange: function(value) {
                this.set("label", value);
                this.set("value", value);
                panelBuilder.buttonClicked(contentPane, model, fieldSpecification, value);
            }
        });
        
        toggleButton.placeAt(questionContentPane);
        
        return toggleButton;
    }

    return add_toggleButton;
});