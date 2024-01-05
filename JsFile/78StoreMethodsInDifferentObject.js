// function createUser(firstName,lastName,email,age,address){
//     const user ={}
//     user.firstName = firstName
//     user.lastName =lastName
//     user.email =email
//     user.age = age
//     user.address =address
//     user.about=function(){
//         console.log(this.firstName,this.age)
//     },
//     user.isAge= function(){
//         return this.age>=18
//     }
//     return user
// }

// method created multipal time in memory

// solve this problem
// one time create this method 
// use anywhere 
// refrence
// use this time go address and call
const userMethod = {
    about(){
        console.log(this.firstName,this.age)
    },
    isAge(){
        return this.age>=18
    }
}
function createUser(firstName,lastName,email,age,address){
    const user ={}
    user.firstName = firstName
    user.lastName =lastName
    user.email =email
    user.age = age
    user.address =address
    user.about = userMethod.about
    user.isAge = userMethod.isAge
    return user
}
const user1 = createUser("Mitesh","Amin","@gmail.com",18,"jshakdjhaksdjkahkdj")
const user2 = createUser("Raj","Sathvara","@gmail.com",18,"jshakdjhaksdjkahkdj")
const user3 = createUser("Dipesh","Raval","@gmail.com",18,"jshakdjhaksdjkahkdj")

console.log(user1)
user1.about()
console.log(user2)
user2.about()
console.log(user3)
user3.about()