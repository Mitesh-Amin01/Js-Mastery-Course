// event bubbling / event propogation
// event capturing
// event delegation

const grandparent =document.querySelector(".grandparent")

const parent = document.querySelector('.parent')

const child =document.querySelector('.child')


// event bubbling / event propogation

child.addEventListener('click',()=>{
    console.log("You Clicked on Child")
})
parent.addEventListener('click',()=>{
    console.log("You Clicked on parent")
})
grandparent.addEventListener('click',()=>{
    console.log("You Clicked on grandparent")
})

document.body.addEventListener('click',()=>{
    console.log("You Clicked on body")
})

// event capturing

child.addEventListener('click',()=>{
    console.log("event capturing Child")
},true)
parent.addEventListener('click',()=>{
    console.log("event capturing parent")
},true)
grandparent.addEventListener('click',()=>{
    console.log("event capturing grandparent")
},true)

document.body.addEventListener('click',()=>{
    console.log("event capturing body")
},true)