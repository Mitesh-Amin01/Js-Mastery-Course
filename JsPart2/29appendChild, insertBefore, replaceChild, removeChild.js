// some old methods to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild

const ul = document.querySelector(".todo-list");

// new element
const li = document.createElement("li");
li.textContent = "new todo";
// ul.appendChild(li)


const referenceNode = document.querySelector(".first-todo");
// ul.insertBefore(li,referenceNode)

ul.removeChild(li,referenceNode);