// and or operator

let firstName = "mitesh"
let age = 11

// if(firstName[0]==="m"){
//     console.log("You name start with M")
// }

if(firstName[0]==="m" && age>18){
    console.log("You name start with M")
}else{
    console.log("Any Condition are False")
}

if(firstName[0]==="m" || age>18){
    console.log("You name start with M")
}else{
    console.log("Any Condition are False")
}