define([], function() {
    "use strict";
    return [
        {
            id: "page_enterSensemakingSessionRecords",
            displayName: "Enter sensemaking session records",
            displayType: "page",
            section: "sensemaking",
            modelClass: "ProjectModel"
        },
        {
            id: "project_sensemakingSessionRecordsLabel",
            dataType: "none",
            displayType: "label",
            displayPrompt: "On this page you will enter records of what happened at your sensemaking sessions."
        },
        {
            id: "project_sensemakingSessionRecordsList",
            dataType: "array",
            required: true,
            displayType: "grid",
            displayConfiguration: "panel_addSensemakingSessionRecord",
            displayName: "Sensemaking session records",
            displayPrompt: "Enter your sensemaking session records here."
        }
    ];
});