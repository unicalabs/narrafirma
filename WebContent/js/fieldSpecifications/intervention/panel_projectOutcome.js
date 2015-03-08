define([], function() {
    "use strict";
    return [
        {
            id: "panel_projectOutcome",
            displayName: "Project outcomes",
            displayType: "panel",
            section: "intervention",
            modelClass: "ProjectOutcomeModel"
        },
        {
            id: "outcomes_group",
            dataType: "string",
            required: true,
            displayType: "text",
            displayName: "Participant group",
            displayPrompt: "Which participant group is this outcome for?"
        },
        {
            id: "outcomes_hopesHeader",
            dataType: "none",
            displayType: "header",
            displayPrompt: "Hopes"
        },
        {
            id: "outcomes_peopleFeltHeard",
            dataType: "string",
            dataOptions: ["never","occasionally","sometimes","often","mixed"],
            required: true,
            displayType: "select",
            displayName: "Felt heard",
            displayPrompt: "During your project, did the people in this group say they felt heard for the first time?"
        },
        {
            id: "outcomes_peopleFeltInvolved",
            dataType: "string",
            dataOptions: ["never","occasionally","sometimes","often","mixed"],
            required: true,
            displayType: "select",
            displayName: "Felt involved",
            displayPrompt: "Did they say they felt involved for the first time?"
        },
        {
            id: "outcomes_peopleLearnedAboutCommOrg",
            dataType: "string",
            dataOptions: ["never","occasionally","sometimes","often","mixed"],
            required: true,
            displayType: "select",
            displayName: "Learned about community",
            displayPrompt: "Did they say they learned a lot about their community or organization?"
        },
        {
            id: "outcomes_voicesHeader",
            dataType: "none",
            displayType: "header",
            displayPrompt: "Voices"
        },
        {
            id: "outcomes_peopleWantedToTellMoreStories",
            dataType: "string",
            dataOptions: ["never","occasionally","sometimes","often","mixed"],
            required: true,
            displayType: "select",
            displayName: "Wanted to tell more",
            displayPrompt: "During your story collection, did these people seem to want to tell more stories than you collected?"
        },
        {
            id: "outcomes_peopleWantedToShareMoreStoriesWithEachOther",
            dataType: "string",
            dataOptions: ["never","occasionally","sometimes","often","mixed"],
            required: true,
            displayType: "select",
            displayName: "Wanted to share more",
            displayPrompt: "Did you ever feel that they wanted to share more experiences with each other than they did?"
        },
        {
            id: "outcomes_peopleFeltStoriesNeededToBeHeard",
            dataType: "string",
            dataOptions: ["not at all","somewhat","definitely","mixed"],
            required: true,
            displayType: "select",
            displayName: "Felt that stories needed to be heard",
            displayPrompt: "Did these people feel that some of the stories you collected \"needed to be heard\" by anyone?"
        },
        {
            id: "outcomes_peopleFeltNobodyCares",
            dataType: "string",
            dataOptions: ["not at all","somewhat","definitely","mixed"],
            required: true,
            displayType: "select",
            displayName: "Felt that nobody cares",
            displayPrompt: "Were there any issues that these people thought \"nobody cares\" about?"
        },
        {
            id: "outcomes_needsHeader",
            dataType: "none",
            displayType: "header",
            displayPrompt: "Needs"
        },
        {
            id: "outcomes_peopleFeltNobodyCanMeetNeeds",
            dataType: "string",
            dataOptions: ["not at all","somewhat","definitely","mixed"],
            required: true,
            displayType: "select",
            displayName: "Needs could not be met",
            displayPrompt: "Do the people in this group have needs that <i>nobody</i> can meet?"
        },
        {
            id: "outcomes_peopleFeltTheyNeedNewStories",
            dataType: "string",
            dataOptions: ["not at all","somewhat","definitely","mixed"],
            required: true,
            displayType: "select",
            displayName: "Needed to tell themselves new stories",
            displayPrompt: "Do these people need to start telling themselves <i>new</i> stories?"
        },
        {
            id: "outcomes_peopleWantedToKeepExploring",
            dataType: "string",
            dataOptions: ["not at all","somewhat","definitely","mixed"],
            required: true,
            displayType: "select",
            displayName: "Wanted more exploration",
            displayPrompt: "Were there any issues about which the people in this group seemed to want to keep exploring?"
        },
        {
            id: "outcomes_crisisPointsWereFound",
            dataType: "string",
            dataOptions: ["not at all","somewhat","definitely","mixed"],
            required: true,
            displayType: "select",
            displayName: "Crisis points",
            displayPrompt: "Did you discover any \"crisis points\" where people in this group needed help and didn't get it?"
        },
        {
            id: "outcomes_issuesWereBeyondWords",
            dataType: "string",
            dataOptions: ["not at all","somewhat","definitely","mixed"],
            required: true,
            displayType: "select",
            displayName: "Beyond words",
            displayPrompt: "Did you find any issues for this group that were beyond words, that no amount of discussion could resolve?"
        },
        {
            id: "outcomes_learningHeader",
            dataType: "none",
            displayType: "header",
            displayPrompt: "Learning"
        },
        {
            id: "outcomes_peopleLearnedAboutTopic",
            dataType: "string",
            dataOptions: ["never","occasionally","sometimes","often","mixed"],
            required: true,
            displayType: "select",
            displayName: "Learned about topic",
            displayPrompt: "Did these people say that they learned a lot about the topic by participating in the project?"
        },
        {
            id: "outcomes_issuesNewMembersStruggleWith",
            dataType: "string",
            dataOptions: ["not at all","somewhat","definitely","mixed"],
            required: true,
            displayType: "select",
            displayName: "New members needed help",
            displayPrompt: "Did you notice that new members of the community or organization were having a harder time making sense of things?"
        },
        {
            id: "outcomes_foundInfoWithoutUnderstanding",
            dataType: "string",
            dataOptions: ["not at all","somewhat","definitely","mixed"],
            required: true,
            displayType: "select",
            displayName: "Had more information than understanding",
            displayPrompt: "Were there any issues that these people found difficult to understand, even though abundant information was available?"
        },
        {
            id: "outcomes_foundOverConfidence",
            dataType: "string",
            dataOptions: ["not at all","somewhat","definitely","mixed"],
            required: true,
            displayType: "select",
            displayName: "Had more confidence than skill",
            displayPrompt: "Did you discover any areas in which these people had more confidence than skill?"
        },
        {
            id: "outcomes_peopleCuriousAboutStoryWork",
            dataType: "string",
            dataOptions: ["never","occasionally","sometimes","often","mixed"],
            required: true,
            displayType: "select",
            displayName: "Wanted to learn about story work",
            displayPrompt: "Did any of these participants express an interest in learning more about story work?"
        }
    ];
});