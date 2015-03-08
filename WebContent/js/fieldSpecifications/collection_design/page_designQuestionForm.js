define([], function() {
    "use strict";
    return [
        {
            id: "page_designQuestionForm",
            displayName: "Design question form",
            displayType: "page",
            section: "collection_design",
            modelClass: "ProjectModel"
        },
        {
            id: "questionForm_Label",
            dataType: "none",
            displayType: "label",
            displayPrompt: "On this page you will add any information you want to place on your question form other than the questions on it."
        },
        {
            id: "questionForm_title",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Title",
            displayPrompt: "Please enter a title for the question form."
        },
        {
            id: "questionForm_image",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Image",
            displayPrompt: "You can link to a logo or other image to show at the top of the form."
        },
        {
            id: "questionForm_startText",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Introduction",
            displayPrompt: "Please enter an introduction to be shown at the start of the form, after the title."
        },
        {
            id: "questionForm_endText",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "End of form text",
            displayPrompt: "Please enter any text to be shown at the end of the form."
        }
    ];
});