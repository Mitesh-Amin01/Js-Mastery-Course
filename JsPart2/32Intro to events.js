// intro to events
// click 
// event add karne ke 3 tarike hai 
// 1.) onClick set on button attribute 
// onclick="console.log(`you clicked me`)"
const btn = document.querySelector(".btn-headline");

// 2.)

// btn.onclick = function(){
//     console.log("You clicked me!!!!")
// }

// 3.)
btn.addEventListener('click',()=>{
    console.log("you Clicked")
})