// Functions

function happyBirthaday(){
    console.log("Happy Birthday To You.....")
}
function sumTwoNumber(){
    console.log(`2x2 = ${2*2}`)
}
happyBirthaday()
happyBirthaday()


sumTwoNumber()
sumTwoNumber()


function sumTwo(a,b){
    return a+b
}

console.log(sumTwo(4,4))
console.log(sumTwo(5,7))
console.log(sumTwo(undefined,undefined))


function sumThree(a,b,c){
    return a+b+c
}

console.log(sumThree(4,4,4))
console.log(sumThree(5,7))
// console.log(sumThree(undefined,undefined,undefined))

const number = 15

function oddEven(num){
    return num%2==0 ? console.log("Even") :console.log("Odd")
}

oddEven(number)


