let x = document.getElementById('.num-1')
let y = document.getElementById('.num-2')
let start= document.querySelector('.start')
let z = document.querySelector('.answer')

function add(){
    let z = x+y
}

start.addEventListener('click', () => {
    x.innerHTML=Math.floor(Math.random()*10)
    y.innerHTML=Math.floor(Math.random()*10) 
})

console.log(z)
console.log(x)
console.log(y)