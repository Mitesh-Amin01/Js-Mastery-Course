// clone using Object assing

const obj = {
    key1:"value1",
    key2:"value2"
}
console.log(obj)

const obj1 = {...obj}
obj.key3 = "value3"

console.log(obj)

console.log(obj1)


console.log("New method of Object Cloning")

const obj2 = Object.assign({},obj)
console.log(obj2)