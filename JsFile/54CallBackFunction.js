// CallBack Function

const myFunc = (callback) =>{
    // console.log(a) // print callback Function
    // console.log("This is myFunc")
    callback()
}

// myFunc([1,2,3])
// myFunc("String")
// myFunc(null)

const myFunc2 = () =>{
    console.log("This is myFunc2.")
}

myFunc(myFunc2)


const addTwoNumber = (...arr) =>{
    let total = 0
    for(let num of arr){
        total=total+num
    }
    console.log(total)
}

const callBackFunction = (callback) =>{
    const a=10
    const b=20
    const c=22.9
    callback(a,b,c)
}

callBackFunction(addTwoNumber)