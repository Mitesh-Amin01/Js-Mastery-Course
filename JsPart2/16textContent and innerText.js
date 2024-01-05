// change text 
// textContent  return hidden text also
// <h1>hello <span style="display:hidden">hi</span/></h1>
// out put is hello hi
// textContent and innerText
// innerText return only h1 text
// <h1>hello <span style="display:hidden">hi</span/></h1>
// output is hello 
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.innerText);
mainHeading.textContent = "This is something else";
console.log(mainHeading.textContent);