// Filter Method

const numbers = [1,2,3,4,5,6,7,8,9,10]

// return new Array

// const evenNumber = numbers.filter((num)=>{
//     if(num%2==0){
//         return num
//     }
// })
const evenNumber = numbers.filter((num)=>{
    return num%2==0
})
console.log(evenNumber)