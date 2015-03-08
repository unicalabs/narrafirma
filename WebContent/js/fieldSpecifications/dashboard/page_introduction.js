define([], function() {
    "use strict";
    return [
{
    id: 'panel_introduction',
    displayName: 'Introduction',
    displayType: 'page',
    isHeader: false,
    modelClass: 'ProjectModel',
    section: 'dashboard'
},
{
    id: 'project_introductionLabel',
    dataType: 'none',
    displayType: 'label',
    displayPrompt: 'Welcome to NarraFirma. This page provides a brief overview to using the NarraFirma&#0153; software.'
},
{
    id: 'project_wwsBookLabel',
    dataType: 'none',
    displayType: 'label',
    displayPrompt: 'This software is a companion for the book "Working with Stories in Your Community or Organization" (WWS) by Cynthia F. Kurtz. That book describes on approach to a process called "Participatory Narrative Inquiry" or "PNI" for short. You can get a copy of that book <a href="http://workingwithstories.org/">here</a>.'
},
{
    id: 'project_wwsBookImage',
    dataType: 'none',
    displayType: 'image',
    displayConfiguration: 'images/WWS_BookCover_front_small.png',
    displayPrompt: 'Here is a picture of the front cover of the book.'
},
{
    id: 'project_pniOverviewLabel',
    dataType: 'none',
    displayType: 'label',
    displayPrompt: 'Participatory narrative inquiry methods involve collecting stories from a community; reviewing, tagging, and thinking about those stories; and then returning that information back to the community for further discussion or additional iterations of the PNI process. PNI often works much better that typical surveys to get at the "ground truth" in a community. PNI help people discover insights, catch emerging trends, make decisions, generate ideas, resolve conflicts, and connect people. PNI draws on theory and practice in narrative inquiry, participatory action research, oral history, mixed-methods research, participatory theatre, narrative therapy, sensemaking, complexity theory, and decision support. Its focus is on the exploration of values, beliefs, feelings, and perspectives through collaborative sensemaking with stories of lived experience.'
},
{
    id: 'project_usesLabel',
    dataType: 'none',
    displayType: 'label',
    displayPrompt: '"NarraFirma" is software designed to support people using the PNI approach described in the WWS book. You can use the NarraFirma&#0153; software to:\n<ul>\n<li>plan your Participatory Narrative Inquiry (PNI) project</li>\n<li>decide how you will collect stories</li>\n<li>write questions about stories</li>\n<li>plan group story sessions (and record what went on in them)</li>\n<li>collect or enter stories (and answers to questions)</li>\n<li>look at patterns in collected stories and answers</li>\n<li>build "catalytic" material</li>\n<li>plan sensemaking sessions (and record what went on in them)</li>\n<li>plan interventions (and record what went on in them)</li>\n<li>gather project feedback</li>\n<li>reflect on the project</li>\n<li>present the project to others</li>\n<li>preserve what you learned so you can use it on the next project</li>\n</ul>'
},
{
    id: 'project_pniPhasesDiagramLabel',
    dataType: 'none',
    displayType: 'label',
    displayConfiguration: 'images/PNIPhasesDiagram.png',
    displayPrompt: 'The NarraFirma software supports all six major phases of the PNI process. You can click on the buttons on the main dashboard (home) page to open those sections. Collection has been split into two subphases of designing a questionnaire and the process of using it. An extra final project report phase is available as well. Each phase is further subdivided into typically about seven or so individual pages that represent tasks.'
},
{
    id: 'project_pniPhasesDiagramImage',
    dataType: 'none',
    displayType: 'image',
    displayConfiguration: 'images/PNIPhasesDiagram.png',
    displayName: 'Diagram of PNI phases showing planning, collection, catalysis, sensemaking, intervention, and return',
    displayPrompt: 'Here is an image of the PNI phases from page 75 from the WWS book'
},
{
    id: 'project_helpBlueIconsLabel',
    dataType: 'none',
    displayType: 'label',
    displayPrompt: 'To the left of most fields displayed in the application is a blue icon with an "i" in it. If you click on that icon, a separate help window will open with more information about that field and other fields on the same application page. You can try that now if you want.'
},
{
    id: 'project_helpDashboardStatusLabel',
    dataType: 'none',
    displayType: 'label',
    displayPrompt: 'At the bottom of each page is a dropdown widget where you can set the "status" of the page to track your progress through tasks. Because you have read this far, you can mark the status of this page as "completely finished". You might instead choose "partially done" if perhaps you just skimmed this material and you intend to come back to this page for further review later, or perhaps as a reminder to purchase a copy of the Working With Stories book. Or, you could mark this page as "intentionally skipped" if you have done a project before and just jumped to the bottom of this page. That choice will then show up as the status of this page, which is also displayed on the first page in the related section, which in this case is the main dashboard.'
},
{
    id: 'project_getStartedLabel',
    dataType: 'none',
    displayType: 'label',
    displayPrompt: 'Now that you have finished with this page, you can click the "home" button to go back to the main dashboard. The home button is to the left of the dropdown box in the navigation section at the top of the page; the home button has an icon of a house. Then from the home dashboard page, click the "Planning" button to begin the first phase of the PNI process and start "Working with Stories in Your Community or Organization".'
}
];
});