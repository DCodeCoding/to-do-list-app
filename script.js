const input = document.getElementsByClassName("input-box");
const form = document.getElementsByClassName("form-container");
const toDoItem = document.getElementsByClassName("to-do-list");

form[0].onsubmit = function submitForm(event) {
  event.preventDefault();
  const toDoName = input[0].value;
  const singleToDo = document.createElement("ul");
  const listToDo = document.createElement("li");
  toDoItem[0].append(singleToDo);
  singleToDo.append(listToDo);
  listToDo.append(toDoName);
  input[0].value = "";
};
