const maninButton = document.querySelector('button')
const body = document.body
const span = document.querySelector('.currentColor')
console.log(maninButton)
function rendomColorGenerator(){
    const red = Math.floor(Math.random()*256)
    const green =Math.floor(Math.random()*256)
    const blue =Math.floor(Math.random()*256)
    const rendomColor = `rgb(${red},${green},${blue})`
    return rendomColor
}
maninButton.addEventListener('click',()=>{
    const rendomColor = rendomColorGenerator()
    body.style.backgroundColor = rendomColor
    span.textContent = rendomColor
})