define([], function() {
    "use strict";
    return [
        {
            id: "page_enterCollectionSessionRecords",
            displayName: "Enter story collection session records",
            displayType: "page",
            section: "collection_process",
            modelClass: "ProjectModel"
        },
        {
            id: "project_collectionRecordsIntroductionLabel",
            dataType: "none",
            displayType: "label",
            displayPrompt: "On this page you can enter records for the group story sessions you held.\nIf you did not hold any group story sessions, you can skip this page."
        },
        {
            id: "project_collectionSessionRecordsList",
            dataType: "array",
            required: true,
            displayType: "grid",
            displayConfiguration: "panel_addCollectionSessionRecord",
            displayName: "Story collection session records",
            displayPrompt: "Enter here what went on in your story collection sessions."
        }
    ];
});