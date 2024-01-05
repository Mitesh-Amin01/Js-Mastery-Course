// Object Destructuring

const obj1 = {
    key1:"value1",
    key2:"value2",
    key3:"value3",
    key4:"value4"
}

let firstKey = obj1.key1
firstKey = "Chenged Value"
console.log(firstKey)

// short cut Destructuring

const {key2:varName1,key3:varName2,...restProps} = obj1

console.log(varName1)
console.log(varName2)
console.log(restProps)


