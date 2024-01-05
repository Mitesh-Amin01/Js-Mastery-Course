const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons)

allButtons.forEach(element => {
    element.addEventListener('click',function(){
        console.log(this.textContent)
    })
});

// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this);
//     })
// }

// for(let i = 0 ; i< allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }