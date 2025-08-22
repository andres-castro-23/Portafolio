const nav = document.querySelector('.nav')

window.addEventListener('scroll',()=>{
const limit = window.innerHeight * 0.77
if (window.scrollY >= limit) {
    nav.style.position = 'fixed'
    nav.style.backgroundColor = "#000000bd"
    nav.style.top = "0"
} else {
    nav.style.position = 'static'    
    nav.style.backgroundColor = "transparent"
}

})
