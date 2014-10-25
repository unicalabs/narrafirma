"use strict";

define([
    "js/widgetBuilder"
], function(
    widgets
) {

    function addWidgets(contentPane, model) {
        widgets.add_textarea(contentPane, model, "returnRequest_text");
        widgets.add_select(contentPane, model, "returnRequest_type", ["help with their own projects","help with sustaining story exchange","help with examining this project's stories and results","help learning about story work","other"]);
        widgets.add_boolean(contentPane, model, "returnRequest_isMet");
        widgets.add_textarea(contentPane, model, "returnRequest_whatHappened");
        widgets.add_textarea(contentPane, model, "returnRequest_notes");
    }

    return {
        "id": "page_addNewReturnRequest",
        "name": "Enter project request",
        "type": "popup",
        "isHeader": false,
        "addWidgets": addWidgets
    };
});