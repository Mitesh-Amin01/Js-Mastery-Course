// let number = [1,2,3,4]
// array prototype is array
let number = new Array(1,2,3,4)
// prototype
console.log(Array.prototype)
console.log(Object.getPrototypeOf(number))
// prototype --- functions
// function prototype is object
// prototype Change

function hello(){
    console.log("Hello Sir")
}
console.log(hello.prototype)
console.log("Is Array or Not.",Array.isArray(hello.prototype))

hello.prototype=[]
console.log(hello.prototype)

console.log("Is Array or Not.",Array.isArray(hello.prototype))

hello.prototype.push("item1","item2","item3")

console.log(hello.prototype)

