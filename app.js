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

        var removeButton = document.createElement("button");
        removeButton.innerHTML = "DONE";
        removeButton.className = "remove";
        removeButton.addEventListener("click", removeTask);
        newItem.appendChild(removeButton);
        taskList.appendChild(newItem);
    }
    else{
        alert("Task cannot be empty");
    }
};

function removeTask(e){
    var taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);

}