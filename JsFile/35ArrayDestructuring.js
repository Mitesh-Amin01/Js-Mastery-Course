// array destructuring

const arr1 = ["item1","item2"]

let myVar1 =arr1[0]
let myVar2 =arr1[1]

console.log(`myVar1 :- ${myVar1} myVar2 :- ${myVar2}`)

// second Method

let [a,b,c]= arr1

// let [a,b]= arr1


console.log(`myVar1 :- ${a} myVar2 :- ${b} myVar3 :- ${c}`)


const arr2 = ["item1","item2","itecm3","item4"]

// const [i1,,i3]=arr2
const [i1,i2,...i3]=arr2


// let myNewArray =arr2.slice(2) create nested array

console.log(`myVar1 :- ${i1} myVar2 :- ${i3}`)



