//reference of page elements
var addButton = document.getElementById("add");
var clearButton = document.getElementById("clear");
var taskInput = document.getElementById("task");
var taskList = document.getElementById("tasklist");

addButton.addEventListener("click", listFunction);
taskInput.addEventListener("keyup", function(){

    if(event.keyCode===13){
        event.preventDefault();
        listFunction();
    }
    
});

clearButton.addEventListener("click", function(){
    taskList.innerHTML = "";

});


 function listFunction(){
    var task = taskInput.value;
    if(task.trim()){
        var newItem = document.createElement("li");
        var taskText = document.createTextNode(task);
        newItem.appendChild(taskText);
        taskInput.value = "";
        taskList.appendChild(newItem);
    }
    else{
        alert("Task cannot be empty");
    }
};