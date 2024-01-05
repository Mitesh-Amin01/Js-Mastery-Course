// const userMethod = {
//     about(){
//         console.log(this.firstName,this.age)
//     },
//     isAge(){
//         return this.age>=18
//     },
//     sing(){
//         return "jdhkashdkashdjkhaksdh"
//     }
// }
function createUser(firstName,lastName,email,age,address){
    const user =Object.create(createUser.prototype)
    user.firstName = firstName
    user.lastName =lastName
    user.email =email
    user.age = age
    user.address =address
    user.about = createUser.prototype.about
    user.isAge = createUser.prototype.isAge
    user.sing = createUser.prototype.sing
    return user
}

createUser.prototype.about=function(){console.log(this.firstName,this.lastName,"Age :-",this.age)}
createUser.prototype.isAge = function(){return this.age>=18}
createUser.prototype.sing = function(){return "jdhkashdkashdjkhaksdh"}
const user1 = createUser("Mitesh","Amin","@gmail.com",18,"jshakdjhaksdjkahkdj")
const user2 = createUser("Raj","Sathvara","@gmail.com",9,"jshakdjhaksdjkahkdj")
const user3 = createUser("Dipesh","Raval","@gmail.com",20,"jshakdjhaksdjkahkdj")

console.log(createUser.prototype)
console.log(user1)
user1.about()
console.log(user1.__proto__)
console.log(user1.sing())
console.log(user1.isAge())
console.log(user2)
user2.about()
console.log(user2.isAge())
console.log(user3)
user3.about()
console.log(user3.isAge())

// proto is refrance of created chain
// prototype is a object