// static list vs live list

// querySelectorAll give static list
const list = document.querySelectorAll(".todo-list li")
console.log(list)
const sixthLi = document.createElement("li")
sixthLi.textContent = "item5"

const ul = document.querySelector(".todo-list")
ul.append(sixthLi)



// getElementBySomething give live list
console.log("----------------------------------------------------------")
const list1 = ul.getElementsByTagName("li")
const sixthLi1 = document.createElement("li")
sixthLi1.textContent = "item5"

const ul1 = document.querySelector(".todo-list")
ul.append(sixthLi1)
console.log(list1)
