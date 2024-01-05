// Function Return Function
// Function Return Function and CallBack both in One Function Called HighOder Function

const func1 = () =>{
    const insideFunc = () =>{
        return "Return A Inside Function"
    }
    return insideFunc
}
const func2 = () =>{
    return {name:"Mitehs",age : 10}
}
const otherFunction = func1()
console.log(func1())
console.log(otherFunction())
console.log(func2())