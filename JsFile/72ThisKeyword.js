// This Keyword

console.log(this===window)

const myFunc = () =>{
    console.log("hello")
}
function test(){
    "use strict"
    console.log("I am Test",this)
}
console.log(this)

test()

