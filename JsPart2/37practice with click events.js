console.log("script start !!!!!")
const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.currentTarget.textContent==="Red"){
            document.body.style.backgroundColor = "red"
        }else if(e.currentTarget.textContent === "Yellow"){
            document.body.style.backgroundColor = "yellow"
        }else{
            document.body.style.backgroundColor = "green"
        }
    })
})