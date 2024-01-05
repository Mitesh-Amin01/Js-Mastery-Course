// block scope vs function scope


// let and const are block scope
// var is function scope
// {block}
// {
//    let first = 1   
// }

{
    // let and const is block scope
    let firstName = "Mitesh"
    console.log(firstName)
}
// console.log(firstName)

{
    var firstName = "HELLO"
    // console.log(firstName)
}

{
    console.log(firstName)
}
console.log(firstName)