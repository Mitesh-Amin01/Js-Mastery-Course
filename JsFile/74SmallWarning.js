const person = {
    firstName:"mitesh",
    age:10,
    about: function(){
        console.log(this)
        console.log(this.firstName,this.age)
    }
}
// don't to do mistake

// const myFunc = function(){
//     console.log(this)
//     console.log(this.firstName,this.age)
// }
// const myFunc = person.about
// return undefind undefind

const myFunc = person.about.bind(person)
myFunc()