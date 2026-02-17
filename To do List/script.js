function addTask() {
    let taskInput = document.getElementById("task");
    let task = taskInput.value;

    if (task === "") return;

    let li = document.createElement("li");

    li.innerHTML = task +
        " <button onclick='removeTask(this)'>Remove</button>";

    document.getElementById("list").appendChild(li);

    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}
