// Nested Destructuring

const users = [
    {userId : "1",firstName : "Mitesh",gender:"male"},
    {userId : "2",firstName : "Raj",gender:"male"},
    {userId : "3",firstName : "Dipesh",gender:"male"}
]

// const [user1,user2,user3] = users 

// console.log(user1)
// console.log(user2)
// console.log(user3)

const [{firstName:user1},,{firstName:user2,gender}] = users 

console.log(user1)
console.log(user2,gender)