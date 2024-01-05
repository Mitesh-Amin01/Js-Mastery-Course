const userMethod = {
    about(){
        console.log(this.firstName,this.age)
    },
    isAge(){
        return this.age>=18
    },
    sing(){
        return "jdhkashdkashdjkhaksdh"
    }
}
function createUser(firstName,lastName,email,age,address){
    const user =Object.create(userMethod)
    user.firstName = firstName
    user.lastName =lastName
    user.email =email
    user.age = age
    user.address =address
    user.about = userMethod.about
    user.isAge = userMethod.isAge
    user.sing = userMethod.sing
    return user
}
const user1 = createUser("Mitesh","Amin","@gmail.com",18,"jshakdjhaksdjkahkdj")
const user2 = createUser("Raj","Sathvara","@gmail.com",18,"jshakdjhaksdjkahkdj")
const user3 = createUser("Dipesh","Raval","@gmail.com",18,"jshakdjhaksdjkahkdj")


console.log(user1)
user1.about()
console.log(user1.__proto__)
console.log(user1.sing())
console.log(user2)
user2.about()
console.log(user3)
user3.about()




// other file concept

console.log("----------------------Other Concept----------------------")

const obj1={key1:"value1",key2:"value2"}
// const obj2={key3:"value3"}
// We want key2 but key1 is not present in obj1
// So, we are create connection between obj1 and obj3
// Access a value for a obj1
// console.log(obj2.key2)

//other way to create empty obj

const obj3 = Object.create(obj1) // return {}
obj3.key4 = "value4"

console.log(obj3)
console.log(obj3.key1) 


// __proto__
console.log(obj3.__proto__) 

// offical ecmascript documentation 

// [[prototype]]

// 1}__proto__ , [[prototype]]
// both diffrent
// 2}prototype    