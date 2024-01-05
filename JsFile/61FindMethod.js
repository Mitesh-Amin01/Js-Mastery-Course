// FindMethod

const myArray =  ["hello","cat","dog","lion"]

const ansArray=myArray.find((e)=>{
    return e.length === 3
})
console.log(ansArray)


const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 3000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]

const ansProduct = products.find((e)=> e.productId === 4)
console.log(ansProduct)