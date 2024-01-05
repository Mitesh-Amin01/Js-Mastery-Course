// while loop example

let userValue = +prompt("Enter Number :- ")

if(userValue<0){
    console.log("Error")
}else{
    let i = 0
    let sum =0
    while(userValue>=i){
        sum = sum+i
        i++
    }
    console.log(sum)
}
//(n*(n+1)/2)