// index2.html use
// const rootNode = document.getRootNode();
// console.log(rootNode)
// const htmlElementNode1 = rootNode;
// console.log(htmlElementNode1.childNodes);
// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes);//NodeList(3) [head, text, body]
// console.log(htmlElementNode); 

// // head and body
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// // console.log(headElementNode.childNodes);

// console.log(headElementNode.parentNode)

// // sibling relation 
// // --> text node -->body
// console.dir(headElementNode.nextSibling)
// console.log(headElementNode.nextSibling.nextSibling)
// // this method return next Element not text node
// // console.dir(headElementNode.nextElementSibling)
// // h1 to parent 
// const h1 = document.querySelector("h1");
// console.log(h1)
// const body = h1.parentNode.parentNode;
// console.log(body)
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
const body = document.body
body.style.color = "#efefef";
body.style.backgroundColor = "#333"
const head = document.querySelector("head");
// console.log(head);
const title = head.querySelector("title");
console.log(title.childNodes);
const container = document.querySelector(".container");
console.log(container.children);