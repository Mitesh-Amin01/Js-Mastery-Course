// arrow functions
// arrow function not have this
// arrow function this is a window 
// capture to surrounding
// one level up
// arrow function this can not be a changeable
// window 
const person = {
    firstName:"mitesh",
    age:10,
    about: () => {
        console.log(this)
        console.log(this.firstName,this.age)
    }
}

person.about()

person.about.call(person)