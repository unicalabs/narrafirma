define([], function() {
    "use strict";
    return [
        {
            id: "panel_newSensemakingSessionOutcome",
            displayName: "Sensemaking session outcome",
            displayType: "panel",
            section: "sensemaking",
            modelClass: "NewSensemakingSessionOutcomeModel"
        },
        {
            id: "sensemakingSessionRecord_outcome_type",
            dataType: "string",
            dataOptions: ["discovery","opportunity","issue","idea","recommendation","perspective","dilemma","other"],
            required: true,
            displayType: "select",
            displayName: "Type",
            displayPrompt: "What type of session outcome is this?"
        },
        {
            id: "sensemakingSessionRecord_outcome_name",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Name",
            displayPrompt: "Please give this outcome a name."
        },
        {
            id: "sensemakingSessionRecord_outcome_description",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Description",
            displayPrompt: "Describe the outcome."
        }
    ];
});