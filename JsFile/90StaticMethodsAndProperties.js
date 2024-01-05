class Person{
    constructor(name,age,gender,email){
        this.name = name
        this.age = age
        this.gender = gender
        this.email =email
    }
    static classInfo(){
        // not associte by object
        // class related method
        console.log("this is person class.")
    }
    static desc = "Static Property"
    get fullName(){
        return `My Name is ${this.name} and My Age is ${this.age}.`
    }
    set setInfo(name){
        const [fullName,age]=name.split(" ")
        this.name = fullName
        this.age = age
    }
    drive(){
        return this.age>=18
    }
 }

const user1 = new Person("Mitesh",18,"male","mitesh@gmail.com")

// user1.classInfo() not this type call
// user1.desc 

Person.classInfo()
console.log(Person.desc)
