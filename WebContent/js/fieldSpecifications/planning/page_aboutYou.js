define([], function() {
    "use strict";
    return [
        {
            id: "page_aboutYou",
            displayName: "About you",
            displayType: "page",
            section: "planning",
            modelClass: "ProjectModel"
        },
        {
            id: "aboutYou_youHeader",
            dataType: "none",
            displayType: "header",
            displayPrompt: "About you"
        },
        {
            id: "aboutYou_experience",
            dataType: "string",
            dataOptions: ["none","a little","some","a lot"],
            required: true,
            displayType: "select",
            displayName: "Experience",
            displayPrompt: "How much experience do you have facilitating PNI projects?"
        },
        {
            id: "aboutYou_help",
            dataType: "string",
            dataOptions: ["none","a little","some","a lot"],
            required: true,
            displayType: "select",
            displayName: "Help",
            displayPrompt: "How much help will you have carrying out this project?"
        },
        {
            id: "aboutYou_tech",
            dataType: "string",
            dataOptions: ["none","a little","some","a lot"],
            required: true,
            displayType: "select",
            displayName: "Technology",
            displayPrompt: "How many technological resources will you have for carrying out this project?"
        }
    ];
});