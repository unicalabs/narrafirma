"use strict";

define([
    "js/widgetBuilder"
], function(
    widgets
) {

    function addWidgets(contentPane, model) {
        widgets.add_label(contentPane, model, "project_readPlanningReportIntroductionLabel");
        widgets.add_report(contentPane, model, "planningReport", ["planning"]);
    }

    return {
        "id": "page_readPlanningReport",
        "name": "Read planning report",
        "type": "page",
        "isHeader": false,
        "addWidgets": addWidgets
    };
});