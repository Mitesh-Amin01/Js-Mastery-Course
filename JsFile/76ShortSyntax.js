// short syntax

// const person = {
//     firstName:"mitesh",
//     age:10,
//     about: () => {
//         console.log(this)
//         console.log(this.firstName,this.age)
//     }
// }

const person = {
    firstName:"mitesh",
    age:10,
    about(){
        console.log(this.firstName,this.age)
    }
}
person.about()