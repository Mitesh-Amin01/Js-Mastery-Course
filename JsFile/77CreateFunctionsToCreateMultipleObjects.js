// const user = {
//     firstName:"mitesh",
//     lastName:"amin",
//     age:10,
//     email:"@gmail.com",
//     address:"House Number, Colony, pincode, state",
//     about(){
//         console.log(this.firstName,this.age)
//     },
//     isAge(){
//         return this.age>=18
//     }
// }

// user.about()

// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 


function createUser(firstName,lastName,email,age,address){
    const user ={}
    user.firstName = firstName
    user.lastName =lastName
    user.email =email
    user.age = age
    user.address =address
    user.about=function(){
        console.log(this.firstName,this.age)
    },
    user.isAge= function(){
        return this.age>=18
    }
    return user
}

const user1 = createUser("mitesh","amin","@gmail.com",18,"jshakdjhaksdjkahkdj")
console.log(user1)
console.log(user1.isAge())
user1.about()

