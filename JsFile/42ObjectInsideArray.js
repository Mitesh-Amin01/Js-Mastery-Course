// Object inside array
// vary useful in real world applications

const users = [
    {userId : "1",firstName : "Mitesh",gender:"male"},
    {userId : "2",firstName : "Raj",gender:"male"},
    {userId : "3",firstName : "Dipesh",gender:"male"}
]
console.log(users)

for(let user of users){
    console.log(user.firstName)
}