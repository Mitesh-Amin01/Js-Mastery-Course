// every method
// callback function return true/false
// const number = [1,2,3,4,5,6,7]
const number = [2,4,6,8]

const ans=number.every((e)=> e%2== 0)

// every method also return true and false

console.log(ans)

const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 30000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]

const product=products.every((e)=>e.price<10000)
console.log(product)