const grandparent =document.querySelector(".grandparent")

const parent = document.querySelector('.parent')

const child =document.querySelector('.child')

// event delegation

// child.addEventListener('click',()=>{
//     console.log("You Clicked on Child")
// })
// parent.addEventListener('click',()=>{
//     console.log("You Clicked on parent")
// })
grandparent.addEventListener('click',(e)=>{
    console.log("You Clicked on grandparent",e.target)
})

// document.body.addEventListener('click',()=>{
//     console.log("You Clicked on body")
// })