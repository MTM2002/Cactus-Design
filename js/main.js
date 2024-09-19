let toggleMenu = document.querySelector(".toggle-button")
toggleMenu.addEventListener("click", e => {
    document.querySelector(".nav-menu").style.right = 0
})
let closeBtn = document.querySelector(".nav-close")
closeBtn.addEventListener("click", e => {
    document.querySelector(".nav-menu").style.right = `-100%`
})
let navLinks = document.querySelectorAll(".links li a")
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        navLinks.forEach(link => {
            link.classList.remove("active")
        })
        e.target.classList.add("active")
        document.querySelector(".nav-menu").style.right = `-100%`
    })
})
window.onscroll = function() {
    let header = document.querySelector(".header")
    if (scrollY > 50) {
        header.classList.add("blur-header")
    } else {
        header.classList.remove("blur-header")
    }
    let scrollTop = document.querySelector(".scroll-up")
    if (scrollY > 350) {
        scrollTop.style.bottom = `3rem`
    } else {
        scrollTop.style.bottom = `-50%`
    }
    let homeSection = document.querySelector(".home")
    let newsSection = document.querySelector(".news")
    let shopSection = document.querySelector(".shop")
    let careSection = document.querySelector(".care")
    let contactSection = document.querySelector(".contact")
    if (scrollY > homeSection.offsetTop - 200) {
        navLinks.forEach(link => {
        link.classList.remove("active")
        })
        document.querySelector(".links li a.one").classList.add("active")
    }  else {
        document.querySelector(".links li a.one").classList.remove("active")
    }
    if (scrollY > newsSection.offsetTop - 200) {
        navLinks.forEach(link => {
        link.classList.remove("active")
        })
        document.querySelector(".links li a.two").classList.add("active")
    }  else {
        document.querySelector(".links li a.two").classList.remove("active")
    }
    if (scrollY > shopSection.offsetTop - 200) {
        navLinks.forEach(link => {
        link.classList.remove("active")
        })
        document.querySelector(".links li a.three").classList.add("active")
    }  else {
        document.querySelector(".links li a.three").classList.remove("active")
        if(scrollY > newsSection.offsetTop - 200) {
            document.querySelector(".links li a.two").classList.add("active")
        } else {
                document.querySelector(".links li a.two").classList.remove("active")
                document.querySelector(".links li a.one").classList.add("active")
        }
    }
    if (scrollY > careSection.offsetTop - 300) {
        navLinks.forEach(link => {
        link.classList.remove("active")
        })
        document.querySelector(".links li a.four").classList.add("active")
    }  else {
        document.querySelector(".links li a.four").classList.remove("active")
    }
    if (scrollY > contactSection.offsetTop - 200) {
        navLinks.forEach(link => {
        link.classList.remove("active")
        })
        document.querySelector(".links li a.five").classList.add("active")
    }  else {
        document.querySelector(".links li a.five").classList.remove("active")
    }
}
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2500,
    delay: 300,
    // reset: true,
})
sr.reveal(`.home-img, .care-img, .contact-img, .footer`)
sr.reveal(`.content,.care-list,.contact-text`, {delay: 500})
sr.reveal(`.news`, {delay: 500,interval: 100})
sr.reveal(`.shop-card`, {interval: 100})