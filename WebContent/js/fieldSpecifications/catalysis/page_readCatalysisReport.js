define([], function() {
    "use strict";
    return [
        {
            id: "page_readCatalysisReport",
            displayName: "Read catalysis report",
            displayType: "page",
            section: "catalysis",
            modelClass: "ProjectModel"
        },
        {
            id: "catalysisReport_introductionLabel",
            dataType: "none",
            displayType: "label",
            displayPrompt: "This report shows all of the information entered in the pages grouped under \"Catalysis.\""
        },
        {
            id: "catalysisReport",
            dataType: "none",
            displayType: "report",
            displayConfiguration: "catalysis",
            displayPrompt: "Catalysis report"
        }
    ];
});