// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection
console.log(navItems);
// object
console.log(Array.isArray(navItems));
const navItems1 = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems1[0]);
console.log(navItems1);
console.log(Array.isArray(navItems1));
