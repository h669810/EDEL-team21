const lineT = document.body.querySelector(".lineT")
const lineB = document.body.querySelector(".lineB")
const burger = document.body.querySelector(".burger")
const topBar = document.body.querySelector(".top_bar")
const utlaanB = document.getElementById("utlaanB")
const kjoretoyB = document.getElementById("kjoretoyB")
const medlemskapB = document.getElementById("medlemskapB")

function pageRedirect_1() {
    window.location.href = "index.html"
}
function pageRedirect_2() {
    if(!topBar.classList.contains("active")) {
        window.location.href = "lokasjoner.html"
    } else {
        if(!utlaanB.classList.contains("visible")) {utlaanB.setAttribute("aria-expanded","true")} 
        else {utlaanB.setAttribute("aria-expanded","false")}
        utlaanB.classList.toggle("visible")
    }
    if(kjoretoyB.classList.contains("visible")) {
        kjoretoyB.classList.remove("visible")
        kjoretoyB.setAttribute("aria-expanded","false")
    }
    if(medlemskapB.classList.contains("visible")) {
        medlemskapB.classList.remove("visible")
        medlemskapB.setAttribute("aria-expanded","false")
    }
}
function pageRedirect_3() {
    if(!topBar.classList.contains("active")) {
        window.location.href = "index.html"
    } else {
        if(!kjoretoyB.classList.contains("visible")) {kjoretoyB.setAttribute("aria-expanded","true")} 
        else {kjoretoyB.setAttribute("aria-expanded","false")}
        kjoretoyB.classList.toggle("visible")
    }
    if(utlaanB.classList.contains("visible")) {
        utlaanB.classList.remove("visible")
        utlaanB.setAttribute("aria-expanded","false")
    }
    if(medlemskapB.classList.contains("visible")) {
        medlemskapB.classList.remove("visible")
        medlemskapB.setAttribute("aria-expanded","false")
    }
}
function pageRedirect_member() {
    if(!topBar.classList.contains("active")) {
        window.location.href = "member.html"
    } else {
        if(!medlemskapB.classList.contains("visible")) {medlemskapB.setAttribute("aria-expanded","true")} 
        else {medlemskapB.setAttribute("aria-expanded","false")}
        medlemskapB.classList.toggle("visible")
    }
    if(utlaanB.classList.contains("visible")) {
        utlaanB.classList.remove("visible")
        utlaanB.setAttribute("aria-expanded","false")
    }
    if(kjoretoyB.classList.contains("visible")) {
        kjoretoyB.classList.remove("visible")
        kjoretoyB.setAttribute("aria-expanded","false")
    }
}
function pageRedirect_4() {
    window.location.href = "index.html"
}
function pageRedirect_mypage() {
    window.location.href = "minside.html"
}
function bButtonclicked() {
    topBar.classList.toggle("active")
}

window.addEventListener("resize", function () {
    if(this.window.innerWidth > 800) {
        if(topBar.classList.contains("active")) {
            topBar.classList.remove("active")
        }
        if(utlaanB.classList.contains('visible')) {
            utlaanB.classList.remove('visible')
        }
        if(kjoretoyB.classList.contains('visible')) {
            kjoretoyB.classList.remove('visible')
        }
        if(medlemskapB.classList.contains('visible')) {
            medlemskapB.classList.remove('visible')
        }
    }
})
