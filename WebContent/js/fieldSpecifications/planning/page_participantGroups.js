define([], function() {
    "use strict";
    return [
        {
            id: "page_participantGroups",
            displayName: "Describe participant groups",
            displayType: "page",
            section: "planning",
            modelClass: "ProjectModel"
        },
        {
            id: "project_aboutParticipantGroups",
            dataType: "none",
            displayType: "label",
            displayPrompt: "On this page you will think about groups of participants you want to involve in your project.\nExamples might be: doctors and patients; staff and customers; natives, immigrants, and tourists."
        },
        {
            id: "project_participantGroupsList",
            dataType: "array",
            required: true,
            displayType: "grid",
            displayConfiguration: "panel_addParticipantGroup",
            displayName: "Participant groups",
            displayPrompt: "Please add participant groups in the list below (typically up to three groups)."
        }
    ];
});