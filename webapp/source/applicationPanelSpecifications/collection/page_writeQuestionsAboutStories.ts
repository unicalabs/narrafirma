import kludgeForUseStrict = require("../../kludgeForUseStrict");
"use strict";

var panel: Panel = {
    id: "page_writeQuestionsAboutStories",
    displayName: "Write questions about stories",
    displayType: "page",
    section: "collection",
    modelClass: "WriteQuestionsAboutStoriesActivity",
    panelFields: [
        {
            id: "project_storyQuestionsLabel",
            valueType: "none",
            displayType: "label",
            displayPrompt: "On this page you will write questions to ask people <strong>about their stories</strong>."
        },
        {
            id: "project_storyQuestionsList",
            valueType: "array",
            required: true,
            displayType: "grid",
            displayConfiguration: "panel_addStoryQuestion",
            displayName: "Questions about stories",
            displayPrompt: "These are the questions you have written so far."
        },
        {
            id: "SPECIAL_storyQuestionRecommendations",
            valueType: "none",
            displayType: "recommendationTable",
            displayConfiguration: "storyQuestions",
            displayPrompt: "Recommendations for story questions"
        }
    ]
};

export = panel;
