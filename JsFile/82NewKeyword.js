// New Keyword

function createUser1(firstName,Age){
    this.firstName = firstName
    this.Age = Age
}

createUser1.prototype.about = function(){
    console.log(`Name is ${this.firstName} and Age is ${this.Age}.`)
}
const user10 = new createUser1("mitesh",18)

// new keyword
// 1} empty object this = {}
// 2} return this
// 3} const user =Object.create(createUser.prototype) this line work do by new keyword 
// relation create automatic
// automatic create chain
user10.about()
console.log(user10)

console.log("----------------------Other Example----------------------")

// new keyword 
// 1.) this = {}
// 2.) return {} 
//

// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function 

function CreateUser(firstName,lastName,email,age,address){
    // const user =Object.create(createUser.prototype)
    this.firstName = firstName
    this.lastName =lastName
    this.email =email
    this.age = age
    this.address =address
    return this
}

CreateUser.prototype.about=function(){console.log(this.firstName,this.lastName,"Age :-",this.age)}
CreateUser.prototype.isAge = function(){return this.age>=18}
CreateUser.prototype.sing = function(){return "jdhkashdkashdjkhaksdh"}

const user1 = new CreateUser("Mitesh","Amin","@gmail.com",18,"jshakdjhaksdjkahkdj")


console.log(CreateUser.prototype)
console.log(user1)
// user1.about()
// console.log(user1.__proto__)
console.log(user1.sing())
console.log(user1.isAge())
