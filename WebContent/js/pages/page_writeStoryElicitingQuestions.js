// Generated from design
"use strict";

define([], function() {

    var questions = [
        {"id":"project_elicitingQuestionsLabel", "type":"label", "isInReport":false, "isGridColumn":false},
        {"id":"project_elicitingQuestionsList", "type":"grid", "isInReport":true, "isGridColumn":false, "options":["page_addElicitingQuestion"]},
        {"id":"elicitingQuestionRecommendations", "type":"recommendationTable", "isInReport":true, "isGridColumn":false, "options":["Eliciting questions"]},
        {"id":"elicitingRecommendationsTable_unfinished", "type":"label", "isInReport":false, "isGridColumn":false},
        {"id":"mockup_recTable_eliciting", "type":"image", "isInReport":true, "isGridColumn":false, "options":["images/mockups/mockupRecTable.png"]}
    ];

    function addWidgets(builder, contentPane, model) {
        builder.addQuestionWidgets(questions, contentPane, model);
    }

    return {
        "id": "page_writeStoryElicitingQuestions",
        "name": "Write story eliciting questions",
        "type": "page",
        "isHeader": false,
        "questions": questions,
        "addWidgets": addWidgets
    };
});