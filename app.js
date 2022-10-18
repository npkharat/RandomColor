let btn=document.querySelector("#btn")
let body=document.body
let span=document.querySelector("span")
// console.log(span.textContent)

let getRandomColor= ()=>{
    let red=Math.floor(Math.random()*256)
    let green=Math.floor(Math.random()*256)
    let blue=Math.floor(Math.random()*256)
    let randomColor=`rgb( ${red},${green},${blue}) `
    return randomColor;

}

btn.addEventListener("click",()=>{
    body.style.backgroundColor=getRandomColor()
    console.log(getRandomColor())
    span.textContent=getRandomColor()
    
})

