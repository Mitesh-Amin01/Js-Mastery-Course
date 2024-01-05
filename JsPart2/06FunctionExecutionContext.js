// function exeution context

let foo = "foo"
console.log(foo)

function getFullName(fname,lname){
    console.log(arguments)
    let myVar = "Var inside Func"
    console.log(myVar)
    const fullName= fname+" "+lname
    return fullName
}

const personName = getFullName("mitesh","Amin")
console.log(personName)


console.log("hello world");
let firstName = "Harshit";
let lastName = "Vashistha";

const myFunction = function() {
    let var1 = "First Variable";
    let var2 = "second Variable";
    console.log(var1);
    console.log(var2);
}