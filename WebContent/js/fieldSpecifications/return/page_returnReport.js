define([], function() {
    "use strict";
    return [
        {
            id: "page_returnReport",
            displayName: "Read return report",
            displayType: "page",
            section: "return",
            modelClass: "ProjectModel"
        },
        {
            id: "returnReportLabel",
            dataType: "none",
            displayType: "label",
            displayPrompt: "This report shows all of the information entered in the pages grouped under \"Return.\""
        },
        {
            id: "returnReport",
            dataType: "none",
            displayType: "report",
            displayConfiguration: "return",
            displayPrompt: "Return report"
        }
    ];
});