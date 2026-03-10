const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"

})

const cards = document.querySelectorAll(".card")

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

let top = card.getBoundingClientRect().top

if(top < window.innerHeight - 100){

card.style.opacity="1"
card.style.transform="translateY(0)"

}

})

})
