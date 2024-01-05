// arrow function

const addTwoNumber = (a,b)=>{
    return a+b
}

console.log(addTwoNumber(3,9))

// one input

const age =18

const agePrint = a =>{
    console.log(`Age is a ${a}`)
} 
agePrint(age)

// return value not required return key word
const ageCheck = a => a>=18
console.log(ageCheck(age))