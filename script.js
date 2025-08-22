const nav = document.querySelector('.nav')


window.addEventListener('scroll',()=>{
    if (window.innerWidth > 500) {
        const limit = window.innerHeight * 0.80
        if (window.scrollY >= limit) {
            nav.style.position = 'fixed'
            nav.style.backgroundColor = "#000000bd"
            nav.style.top = "0"
        } else {
            nav.style.position = 'static'    
            nav.style.backgroundColor = "transparent"
    }
    }
})
