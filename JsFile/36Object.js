// objects
// array are good but not sufficient
// for real world data
// objects store key value pairs
// object do not have index

// how to create objects

const obj = {
    name : "Mitesh",
    age : "5",
    hobbies : ["singing"]
}

console.log(obj)


// how to access data from objects

console.log(obj.name)
console.log(obj.age)

console.log(obj["hobbies"]) // given key name in string



// how to add key value pair to objects

obj.gender = "male"

console.log(obj)

obj["student"] = "Yes"

console.log(obj)