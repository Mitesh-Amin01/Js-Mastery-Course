// Reduce Method

const arr = [1,2,3,4,5,6,7]

const newArr=arr.reduce((accumlater,current)=>{
    console.log("Accumlater :- ",accumlater,"Current :-",current )
    return accumlater+current
})

console.log(newArr)

const userCart = [
    {porductId : 1,porductName : "mobile" , price:12000},
    {porductId : 2,porductName : "tv" , price:45000},
    {porductId : 3,porductName : "laptop" , price:189000},
    {porductId : 4,porductName : "tablet" , price:10000},
]

const total=userCart.reduce((totalPrice,currentProduct)=>{
    return currentProduct.price+totalPrice
},0)
console.log(total)