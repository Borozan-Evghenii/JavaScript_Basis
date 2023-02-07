const todoList = document.querySelector(".todoList");
const button = document.querySelector(".todoButton");

button.addEventListener("click", handleClick);

document.addEventListener("DOMContentLoaded", () => {
  const toDoItems = JSON.parse(localStorage.getItem("tasks")) || [];
  toDoItems.forEach((e) => {
    createToDo(e);
  });
});

let tasks = [];

function handleClick() {
  let inputValue = this.previousElementSibling.value;
  if (inputValue) {
    if (!tasks.includes(inputValue)) {
      createToDo(inputValue);
    } else {
      alert("This task will added");
    }
  } else {
    alert("Write a task");
  }
}

function createToDo(task) {
  const el = document.createElement("li");
  el.innerText = task;
  tasks = [...tasks, task];
  el.addEventListener("click", removeToDo);
  localStorage.setItem("tasks", JSON.stringify([...tasks]));
  todoList.append(el);
}

function removeToDo(e) {
  this.removeEventListener("click", removeToDo);
  this.remove();
}

/*Toggler*/

const togglerButton = document.querySelector(".togglerButton");
const togglerContainer = document.querySelector(".spoilerContainer");
togglerButton.addEventListener("click", () => {
  togglerContainer.classList.toggle("showSpoiler");
});
