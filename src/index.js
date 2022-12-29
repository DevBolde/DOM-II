import './less/index.less'

// Your code goes here
const body = document.querySelector('body')
body.style.background = 'darkgray'

// Event Number 1 - Load
window.onload= function (evt){
    console.log(`event ${evt.type} fired! Ready to go!`)
const heading = document.querySelector('h1')
heading.textContent = 'READY TO GO!!'
// Event Number 2 - Copy
window.addEventListener('copy', ()=>{
    navigator.clipboard.readText()
    .then(text => {
        heading.textContent += text
    })
})
// Event Number 3 - Click
window.addEventListener('click', () =>{
    body.style.removeProperty('background')
})
// Event Number 4 - Click
body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})
// Event Number 5 - dblclick (Double Click)
document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = ''
})
// Event Number 6 - keydown
window.addEventListener('keydown', evt =>{
 if (evt.key == 6) {
    document.body.innerHTML = 'YOU RAN ORDER 66';
 }
})
// Event Number 7 - 
}
 
