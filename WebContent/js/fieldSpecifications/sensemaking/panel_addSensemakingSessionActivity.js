define([], function() {
    "use strict";
    return [
        {
            id: "panel_addSensemakingSessionActivity",
            displayName: "Add sensemaking session activity",
            displayType: "panel",
            section: "sensemaking",
            modelClass: "SensemakingSessionActivityModel"
        },
        {
            id: "sensemakingSessionPlan_activity_name",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Name",
            displayPrompt: "Please give this activity a name."
        },
        {
            id: "sensemakingSessionPlan_activity_type",
            dataType: "string",
            dataOptions: ["ice-breaker","encountering stories (no task)","encountering stories (simple task)","discussing stories","twice-told stories exercise","timeline exercise","landscape exercise","story elements exercise","composite stories exercise","my own exercise","other"],
            required: true,
            displayType: "select",
            displayName: "Type",
            displayPrompt: "What type of activity is this?"
        },
        {
            id: "sensemakingSessionPlan_activity_plan",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Plan",
            displayPrompt: "Describe the plan for this activity."
        },
        {
            id: "sensemakingSessionPlan_activity_optionalParts",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Optional elaborations",
            displayPrompt: "Describe any optional elaborations you might or might not use in this activity."
        },
        {
            id: "sensemakingSessionPlan_activity_duration",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Length",
            displayPrompt: "How long will this activity take?"
        },
        {
            id: "sensemakingSessionPlan_activity_recording",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "New stories",
            displayPrompt: "Will new stories be recorded during this activity, and if so, how?"
        },
        {
            id: "sensemakingSessionPlan_activity_materials",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Materials",
            displayPrompt: "What materials will be provided for this activity?"
        },
        {
            id: "sensemakingSessionPlan_activity_spaces",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Spaces",
            displayPrompt: "What spaces will be used for this activity?"
        },
        {
            id: "sensemakingSessionPlan_activity_facilitation",
            dataType: "string",
            required: true,
            displayType: "textarea",
            displayName: "Facilitation",
            displayPrompt: "What sort of facilitation will be necessary for this activity?"
        },
        {
            id: "templates_sensemakingActivities",
            dataType: "none",
            displayType: "templateList",
            displayConfiguration: "sensemakingActivities",
            displayPrompt: "You can copy an activity from this list."
        }
    ];
});