// some method

// kya ek bhi number esa hai jo even hai 
// true 

const numbers = [3,5,9]

const ans = numbers.some((e)=> e%2==0)

console.log(ans)

const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 30000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]

const product = products.some((e)=>e.price>25000)
console.log(product)