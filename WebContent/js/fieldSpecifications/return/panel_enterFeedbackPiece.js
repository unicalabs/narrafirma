define([], function() {
    "use strict";
    return [
        {
            id: "panel_enterFeedbackPiece",
            displayName: "Enter piece of feedback on project",
            displayType: "panel",
            section: "return",
            modelClass: "EnterFeedbackPieceModel"
        },
        {
            id: "feedback_text",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Feedback",
            displayPrompt: "What did someone say or do?"
        },
        {
            id: "feedback_name",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Name",
            displayPrompt: "Please give this piece of feedback a name."
        },
        {
            id: "feedback_type",
            dataType: "string",
            dataOptions: ["a story","a reference to something that came up in the project","a wish about the future","an opinion","a complaint","an action","other"],
            required: true,
            displayType: "select",
            displayName: "Type",
            displayPrompt: "What type of feedback is this?"
        },
        {
            id: "feedback_who",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Source",
            displayPrompt: "Who said or did this?"
        },
        {
            id: "feedback_prompt",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Prompt",
            displayPrompt: "What did you say or do (if anything) that led to this feedback?"
        },
        {
            id: "feedback_response",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Response",
            displayPrompt: "What did you say or do (if anything) in response?"
        },
        {
            id: "feedback_notes",
            dataType: "string",
            displayType: "textarea",
            displayName: "Notes",
            displayPrompt: "Please enter any other notes you have about this piece of feedback."
        }
    ];
});