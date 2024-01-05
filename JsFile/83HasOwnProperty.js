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

for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
}