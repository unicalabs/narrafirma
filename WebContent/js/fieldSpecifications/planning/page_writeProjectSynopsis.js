define([], function() {
    "use strict";
    return [
        {
            id: "page_writeProjectSynopsis",
            displayName: "Write project synopsis",
            displayType: "page",
            section: "planning",
            modelClass: "ProjectModel"
        },
        {
            id: "project_synopsis",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Project synopsis",
            displayPrompt: "On this page you can write your project synopsis, a one or two sentence summary of what matters most about your project."
        }
    ];
});