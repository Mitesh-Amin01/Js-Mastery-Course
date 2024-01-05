//undefined
//null

let firstName
// const firstName
console.log(typeof firstName)

// firstName = "mitesh"

let myVar = null
console.log(typeof null)
// return Object
// bug, error

//BigInt

let myNum1 = BigInt(90071992547409911n)
let myNum2 = 90071992547409911n
let myNum3 =12
console.log(typeof myNum1,myNum1)
console.log(typeof myNum2,myNum2)
console.log(typeof myNum3, myNum3)
//console.log(myNum1+myNum3) Cannot mix BigInt and other types, use explicit conversions
//console.log(Number.MAX_SAFE_INTEGER) check limet of number as int