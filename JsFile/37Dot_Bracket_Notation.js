// difference between dot and bracket notaion
const key = 'email'
const obj = {
    name : "Mitesh",
    age : "5",
    "person hobbies" : ["singing"]
}

console.log(obj["person hobbies"]) // not use dot notaion

obj.key = "hsdgaj"
console.log(obj)

obj[key] = "email-Id"
console.log(obj)