// lexical scope
// check function varable exist variable so use
// but not exist variable this time check lexical envarment
// outer variable check

const myVar = "value1"
const myApp = () =>{
    // const myVar = "value2"
    const func1 = () => {
        // const myVar = "value :- 3"
        console.log("Function1",myVar)
    }
    const func2 = () => console.log("Function2")
    const func3 = () => console.log("Function3")
    console.log(myVar)
    func1()
}

myApp()