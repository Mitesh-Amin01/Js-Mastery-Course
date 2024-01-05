// function inside function

const app = () =>{
    const hello = () =>{
        console.log("Hello Function.")
    }
    const addTwoNumber = (a,b)=> a+b
    console.log("inside App")
    hello()
    console.log(`Answer is a ${addTwoNumber(15,15)}`)
}
app()