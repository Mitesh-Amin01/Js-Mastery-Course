// nested if else

let winningNumber = 19

let userGuess = +prompt("Enter number :- ")

if(winningNumber === userGuess){
    console.log("You Are Win!")
}else{
    if(winningNumber>userGuess){
        console.log("your number is to low")
    }else{
        console.log("your number is to high")
    }
}