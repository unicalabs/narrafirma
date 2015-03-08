define([], function() {
    "use strict";
    return [
        {
            id: "page_projectOutcomesForIntervention",
            displayName: "Answer questions about project outcomes",
            displayType: "page",
            section: "intervention",
            modelClass: "ProjectModel"
        },
        {
            id: "project_outcomesList",
            dataType: "array",
            required: true,
            displayType: "grid",
            displayConfiguration: "panel_projectOutcome",
            displayName: "Project outcomes",
            displayPrompt: "In order to choose interventions that will be useful in your project, it will be helpful to think about some\nof the issues (positive and negative) you discovered in your project. Please answer these questions in reference to\nthe participant groups you set up in the project planning phase. Please enter one record for each participant group."
        }
    ];
});