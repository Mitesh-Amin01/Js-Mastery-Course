// this keyword

const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
    console.log("you clicked me !!!!");
    console.log("value of this")
    console.log(this);
});
//function case in this value is a button

// btn.addEventListener("click",()=>{
//     console.log("you clicked me !!!!");
//     console.log("value of this")
//     console.log(this);
// }); arrow function this value is a window 
// arrow func case in one level up this value