// computed Properties

const key1 = "Objkey1"
const key2 = "Objkey2"

const value1 = "myValue1"
const value2 = "myValue2"
// computed Properties []
const obj1 = {
    [key1]:value1,
    [key2]:value2
}
console.log(obj1)

// error not print key
// const obj2={}

// obj2.key1 = value1
// obj2.key2 = value2

// console.log(obj2)


const obj3={}

obj3[key1] = value1
obj3[key2] = value2
console.log(obj3)