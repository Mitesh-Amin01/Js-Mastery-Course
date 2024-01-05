function hello(){
    console.log("HELLO")
}

// javaScript function ===> function + object

// console.log(hello.name)

// you can add your own properties

hello.myOwnProperty = "Very Unique Value"

console.log(hello.myOwnProperty)

// name property ---> tells function name;

// function provides more usefull properties.

// function give free space {} empty obj
// function with store key value pair

console.log(hello.prototype)

// only functions provide prototype property

if(hello.prototype){
    console.log("Prototype is present")
}else{
    console.log("Prototype is present")
}
const obj = {key1:"value1"}
// const arr = [1,2,3]

if(obj.prototype){
    console.log("Prototype is present")
}else{
    console.log("Prototype not is present")
}

hello.prototype.test="Testing"
hello.prototype.age = 19
hello.prototype.sing = function(){
    return "Lalalaaalll"
}
console.log(hello.prototype)
console.log(hello.prototype.sing())
