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
  singleToDo.classList.add("single-to-do");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-buttons");
  const deleteButtonText = document.createTextNode("delete");
  deleteButton.append(deleteButtonText);
  singleToDo.append(deleteButton);
  const deleteButtons = document.getElementsByClassName("delete-buttons");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function (event) {
      const parentNode = event.target.parentNode;
      parentNode.remove();
    };
  }

  const markedToDos = document.getElementsByClassName("single-to-do");
  for (let i = 0; i < markedToDos.length; i++) {
    markedToDos[i].onclick = function (event) {
      const toDoMarked = event.target;
      if (toDoMarked.style.textDecoration === "line-through") {
        toDoMarked.style.textDecoration = "none";
      } else {
        toDoMarked.style.textDecoration = "line-through";
      }
    };
  }

  input[0].value = "";
};
