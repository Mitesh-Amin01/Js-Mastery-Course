// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol

// const person = {
//     firstName : "Mitesh",age:18,1:"one",$:"hello"
// }
// console.log(person.firstName)
// console.log(person["age"])

// for (let key in person){
//     console.log(typeof key)
// }
// console.log(person.$)


const maps = new Map()

maps.set("firstName","Mitesh")
maps.set("age",18)
maps.set(1,1)
maps.set([1,2,3],"OneTwoThree")
maps.set(true,"TRUE")

console.log(maps)

console.log(maps.get("firstName"))

console.log(maps.keys())
console.log(maps.values())

console.log(maps.size)

for (let key of maps.keys()){
    console.log(key," typeof :-",typeof key)
}

maps.forEach((e)=>{
    console.log("ForEach Value:- ",e)
})


for (let [key,value] of maps){
    //return array
    console.log(key,value)
}


const person1={
    id:1,
    firstName:"mitesh"
}
// const persons = new Map([['firstName','mitesh'],['age',18]]) 

const userInfo = new Map()

userInfo.set(person1,{age:10,gender:"male"})


console.log(userInfo)

console.log(person1.id)
console.log(userInfo.get(person1).age)




