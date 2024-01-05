// class keyword
// class are fake

class CreateUser{
    constructor(firstName,lastName,email,age,address){
        console.log("Constructor Called")
        this.firstName = firstName
        this.lastName =lastName
        this.email =email
        this.age = age
        this.address =address
    }
    about(){
        return `My Name is ${this.firstName} ${this.lastName} and Age is ${this.age}. My Email ID is a ${this.email} and Address is ${this.address}`
    }
    isAge(){
        return this.age>=18
    }
    sing(){
        return `${this.firstName} is sing a song`
    }
    print(e){
        console.log(e)
    }
}

//not create without new keyword const user = CreateUser("Mitesh","Amin","@gmail.com",18,"Address Info...")

const user = new CreateUser("Mitesh","Amin","@gmail.com",10,"Address Info...")
const user1 = new CreateUser("Raj","Sathvara","@gmail.com",20,"Address Info...")

console.log(user.about())
console.log(user1.about())
console.log(user.isAge())
console.log(user1.isAge())
console.log(user.sing())
console.log(user1.sing())
user.print("Print Method")
user1.print(212323)


console.log(Object.getPrototypeOf(user))
console.log(Object.getPrototypeOf(user1))

