define([], function() {
    "use strict";
    return [
        {
            id: "panel_addStoryQuestion",
            displayName: "Add story question",
            displayType: "panel",
            section: "collection_design",
            modelClass: "StoryQuestionModel"
        },
        {
            id: "storyQuestion_text",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Question",
            displayPrompt: "Enter a question to ask people about their stories."
        },
        {
            id: "storyQuestion_type",
            dataType: "string",
            dataOptions: ["boolean","label","header","checkbox","checkboxes","text","textarea","select","radiobuttons","slider"],
            required: true,
            displayType: "select",
            displayName: "Type",
            displayPrompt: "What type of question is this?\nThe question types are:\n<ul>\n<li>boolean: yes and no choices</li>\n<li>label: not a question, just text</li>\n<li>header: same as a label, only in bold</li>\n<li>checkbox: one check box (enter label in options)</li>\n<li>checkboxes: a series of checkboxes (enter label in options)</li>\n<li>text: a one-line free text field</li>\n<li>textarea: a multi-line free text field</li>\n<li>select: a drop-down box (enter choices in options)</li>\n<li>radiobuttons: a set of mutually-exclusive radio buttons (enter choices in options)</li>\n<li>slider: a range from 0 to 100 (enter end labels in options)</li>\n</ul>"
        },
        {
            id: "storyQuestion_shortName",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Short name",
            displayPrompt: "Enter a short name we can use to refer to the question. (It must be unique within the project.)"
        },
        {
            id: "storyQuestion_options",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Options",
            displayPrompt: "If your question requires choices, enter them here (one per line)."
        },
        {
            id: "storyQuestion_help",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Help",
            displayPrompt: "If you want to provide popup help to people answering the question, enter it here."
        },
        {
            id: "SPECIAL_templates_storyQuestions",
            dataType: "none",
            displayType: "templateList",
            displayConfiguration: "storyQuestions",
            displayPrompt: "You can copy a question from this list."
        }
    ];
});