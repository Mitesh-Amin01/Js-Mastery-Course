// Parameter Destructuring

// object
// react

const person = {
    firstName : "mitesh",
    gender : "male"
}

// const printDetails = (obj)=>{
//     console.log(obj.firstName)
//     console.log(obj.gender)
//     console.log(obj.age) //Not Exist

// }
const printDetails = ({firstName,gender})=>{
    console.log(firstName)
    console.log(gender)
    //console.log(age) //Not Exist

}
printDetails(person)