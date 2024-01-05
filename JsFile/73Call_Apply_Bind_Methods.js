// call apply bind
function about(hobby,favMusician){
    console.log(this.firstName,this.age,hobby,favMusician)
}
const person = {
    firstName:"mitesh",
    age:10
}

const person2 = {
    firstName:"raj",
    age:20
}

// person.about()
// set this person2 this is one block

about.call(person,"Piano","Udit Sir")
about.call(person2,"Guitar","Arajit Singh")

// apply
// set perameter in list
about.apply(person,["flute","jubin"])

// bind
// return function
const bindFunc=about.bind(person2,"Mic","Alkaji")

bindFunc()

