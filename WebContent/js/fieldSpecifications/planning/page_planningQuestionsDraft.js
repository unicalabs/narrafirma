define([], function() {
    "use strict";
    return [
        {
            id: "page_planningQuestionsDraft",
            displayName: "Answer PNI Planning questions",
            displayType: "page",
            section: "planning",
            modelClass: "ProjectModel"
        },
        {
            id: "project_draftQuestionsLabel",
            dataType: "none",
            displayType: "label",
            displayPrompt: "On this page you will answer some questions about your project's goals, relationships, focus, range, scope, and emphasis.\nIf you don't have good answers for these questions right now, don't worry; you will have a chance to work on these answers again later."
        },
        {
            id: "project_pniQuestions_goal_draft",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Project goal",
            displayPrompt: "What is the goal of the project? Why are you doing it?"
        },
        {
            id: "project_pniQuestions_relationships_draft",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Project relationships",
            displayPrompt: "What relationships are important to the project?"
        },
        {
            id: "project_pniQuestions_focus_draft",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Project focus",
            displayPrompt: "What is the focus of the project? What is it about?"
        },
        {
            id: "project_pniQuestions_range_draft",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Project range",
            displayPrompt: "What range(s) of experience will the project cover?"
        },
        {
            id: "project_pniQuestions_scope_draft",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Project scope",
            displayPrompt: "What is the project's scope? (number of people, number of stories, number of questions about stories)"
        },
        {
            id: "project_pniQuestions_emphasis_draft",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Project emphasis",
            displayPrompt: "Which phases of PNI will be important to the project? (indicate most and least important phases)"
        }
    ];
});