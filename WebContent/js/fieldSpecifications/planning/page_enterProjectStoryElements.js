define([], function() {
    "use strict";
    return [
        {
            id: "page_enterProjectStoryElements",
            displayName: "Enter project story elements",
            displayType: "page",
            section: "planning",
            modelClass: "ProjectModel"
        },
        {
            id: "project_projectStoryElementsList",
            dataType: "array",
            required: true,
            displayType: "grid",
            displayConfiguration: "panel_addStoryElement",
            displayName: "Story elements",
            displayPrompt: "On this page you can enter the story elements you created on the previous page."
        }
    ];
});