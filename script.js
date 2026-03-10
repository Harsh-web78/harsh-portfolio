// PARTICLE BACKGROUND

tsParticles.load("particles",{

particles:{
number:{value:80},
size:{value:3},
move:{speed:1},
links:{enable:true}
}

})


// GSAP SCROLL

gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray(".reveal").forEach(section=>{

gsap.to(section,{

opacity:1,
y:0,
duration:1.2,

scrollTrigger:{
trigger:section,
start:"top 80%"
}

})

})


// CONTACT FORM

document.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault()

alert("Message sent! I will contact you soon.")

})
