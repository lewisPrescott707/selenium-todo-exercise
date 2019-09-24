$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("todo.feature");
formatter.feature({
  "line": 1,
  "name": "ToDO list",
  "description": "",
  "id": "todo-list",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "# Scenario One:"
    },
    {
      "line": 4,
      "value": "#\tSelect First Item"
    },
    {
      "line": 5,
      "value": "#\tVerify Item is Selected"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "# Scenario Two:"
    },
    {
      "line": 8,
      "value": "#\tAdd new Item"
    },
    {
      "line": 9,
      "value": "#\tVerify Item has been added"
    }
  ],
  "line": 11,
  "name": "Select Item in List",
  "description": "",
  "id": "todo-list;select-item-in-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user is on home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoStepDefinition.user_already_on_home_page()"
});
formatter.result({
  "duration": 1654734250,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 73525748,
  "status": "passed"
});
});