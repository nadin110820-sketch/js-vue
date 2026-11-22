let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");
let taskCounter = document.querySelector("#taskCounter");
function updateCounter() {
    let count = taskList.querySelectorAll('li').length;
    taskCounter.textContent = count;
}
function addTask() {
    let text = taskInput.value.trim();
    if (text === "") {
        alert("Please enter an task");
        return;
    }
    let li = document.createElement("li");
    li.classList.add("task");
    let span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = text;
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "done";
    doneBtn.addEventListener("click", () => {
        li.classList.toggle("done");
    })
    let editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => {
        let newText = prompt("Please enter an edit task: ", span.textContent);
        if (newText === null) {
            return;
        }
        if (newText.trim() === "") {
            alert("Please enter an edit task");
            return;
        }
        span.textContent = newText.trim();
    });
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        let answer = confirm("Are you sure you want to delete?");
        if (answer) {
            li.remove();
            updateCounter()
        }
    });
    li.append(span, doneBtn, editBtn, deleteBtn);
    taskList.append(li);
    updateCounter()
    taskInput.value = "";
}
addBtn.addEventListener("click", addTask);