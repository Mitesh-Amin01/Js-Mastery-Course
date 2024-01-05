 class Person{
    constructor(name,age,gender,email){
        this.name = name
        this.age = age
        this.gender = gender
        this.email =email
    }
    get fullName(){
        return `My Name is ${this.name} and My Age is ${this.age}.`
    }
    set setInfo(name){
        const [fullName,age]=name.split(" ")
        this.name = fullName
        this.age = age
    }
 }

 const user1 = new Person("Mitesh",18,"male","mitesh@gmail.com")

 console.log(user1)
 console.log(user1.age)
 
 // console.log(user1.fullName()) convert as property before method add get key word

 console.log(user1.fullName)

//  user1.setName("Raj")
// second method
// user1.name = "Raj"
user1.setInfo = "Raj 19"
 console.log(user1.fullName)

