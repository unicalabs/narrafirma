// Generated from design
"use strict";

define([], function() {

    var questions = [
        {"id":"project_readCollectionDesignReportIntroductionLabel", "type":"label", "isInReport":false, "isGridColumn":false},
        {"id":"collectionDesignReport", "type":"report", "isInReport":true, "isGridColumn":false, "options":["collectionDesign"]}
    ];

    function addWidgets(builder, contentPane, model) {
        builder.addQuestionWidgets(questions, contentPane, model);
    }

    return {
        "id": "page_readCollectionDesignReport",
        "name": "Read collection design report",
        "type": "page",
        "isHeader": false,
        "questions": questions,
        "addWidgets": addWidgets
    };
});