define([], function() {
    "use strict";
    return [
        {
            id: "page_readSensemakingReport",
            displayName: "Read sensemaking report",
            displayType: "page",
            section: "sensemaking",
            modelClass: "ProjectModel"
        },
        {
            id: "sensemakingReportLabel",
            dataType: "none",
            displayType: "label",
            displayPrompt: "This report shows all of the information entered in the pages grouped under \"Sensemaking.\""
        },
        {
            id: "sensemakingReport",
            dataType: "none",
            displayType: "report",
            displayConfiguration: "sensemaking",
            displayPrompt: "Sensemaking report"
        }
    ];
});