// Methods

// function inside object

function personInfo(){
    console.log(`Person Name is ${this.firstName} And Age is ${this.age} `)
}
const person = {
    firstName:"mitesh",
    age:10,
    about: personInfo
}
const person1 = {
    firstName:"Raj",
    age:15,
    about: personInfo
}
const person2 = {
    firstName:"Prince",
    age:50,
    about: personInfo
}
person.about()
person1.about()
person2.about()


