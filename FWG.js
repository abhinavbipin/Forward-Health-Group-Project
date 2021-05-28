/* 
Abhinav Bipin
Project for Forward Health Group

Task Display

*/

class Task {
  constructor(id, task, complete) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  }
  completeTask(checked) {
    this.complete = checked;
  }
}

var numTasks = 0;
var numComplete = 0;
var numIncomplete = 0;

var tasks = []; //populate with php
var completes = [];

function setChecks() {//after adding a task, and loading a page, sets the onclicks for each checkbox
  let collection = document.getElementsByClassName("Complete");
  for (let i = 0; i < collection.length; i++) {
    collection[i].onclick = updateTask;
  }
}

function updateTask(e) {//handles when a task is checked or unchecked as complete
  var check = e.target; // checkbox

  if (check.checked === true) {
    //update numbers accordingly
    numComplete++;
    numIncomplete--;
  } else {
    numComplete--;
    numIncomplete++;
  }
  updateDash(); //updates dashboard w new content
}


document.getElementById("Add").onclick = function () {//sets Add task's button handling
  addTask()
};


function addTask() { //prompts user for new task, and updates arrays and numbers
  document.getElementById('Add').innerHTML = "Add Task";
  var newT = prompt("Please Enter New Task: ");
  try {
    if (!(newT === "")) {
      tasks.push(newT); // edit to have full task info
      completes.push(false);
    } else {
      throw new Error('You did not enter a task. Click to try again.');
    }
    numTasks++;
    numIncomplete++;
    uploadList(tasks); //then updates page HTML to show new task
  } catch(e) {
    document.getElementById('Add').innerHTML = e.message;
  }
  
}

function uploadList(taskList) { // goes through arrays and sets HTML of list to display info
  var fullList = ""; //Html string
  for (var i = 0; i < taskList.length; i++) { //adds list item for each task
    fullList += "<li>\n";
    var task = taskList[i];
    var name = "<label id=\"Name\">" + task + "&nbsp;&nbsp;&nbsp;</label>\n";
    var complete = "<label id=\"Name\"> Complete:  </label>\n";
    var box = "<input type=\"checkbox\" class=\"Complete\"";
    if (completes[i] ===true) {
      box += " checked";
    }
    box += ">\n"
    fullList = fullList + name + complete + box + "</li>\n";
  }

  document.getElementById("Task List").innerHTML = fullList; 
  updateDash(); //updates dashboard and checkboxs
  setChecks();
}

function updateDash() { //updates html AND this is where we updates the array containing whether each task is complete

  let boxes = document.getElementsByClassName("Complete");
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].checked === true) {
      completes[i] = true;
    } else {
      completes[i] = false;
    }
  }

  //dashboard html update
  document.getElementById("Total").innerHTML = "Total Tasks: "+numTasks;
  document.getElementById("NComplete").innerHTML = "Complete Tasks: "+numComplete;
  document.getElementById("NIncomplete").innerHTML = "Incomplete Tasks: "+numIncomplete;
}
