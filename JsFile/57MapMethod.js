// Map Method

const arr1 = [1,2,3,4,5,6]
// return new Array
const ansMap =arr1.map((num)=>{
    return num**2
})

console.log(ansMap)


const user = [
    {firstName:"mitesh",age:10},
    {firstName:"mitesh",age:11},
    {firstName:"mitesh",age:12},
    {firstName:"mitesh",age:13},
    {firstName:"mitesh",age:14},
]

const userAge = user.map((val)=>{
    return val.age
})
console.log(userAge)