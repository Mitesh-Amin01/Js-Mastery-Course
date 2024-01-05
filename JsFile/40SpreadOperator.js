// spread operator ...

const array1 = [1,2,3]
const array2 = [4,5,6]

const array3 = [...array1,...array2,"string"]
const array4 = [...array2,...array1]
const mixArray = [...array4,...array3,...array1,...array2]
const newArray = [..."abcd"]
console.log(array3)
console.log(array4)
console.log(mixArray)

console.log(newArray)

// spread operator ... in object


const obj1 = {
    key1:"value1",
    key2:"value2",
    key3:"value3"
//  key1 :"hello"
}

const obj2 = {
    key1:"valueObj2",//override obj1 key1 value oder following obj1 -> obj2 | obj2 -> obj1
    key4:"value2",
    key5:"value3"
}

const newObj = {...obj1,...obj2}
const newObj1 = {..."abcd"}
// same for array
console.log(newObj)
console.log(newObj1)