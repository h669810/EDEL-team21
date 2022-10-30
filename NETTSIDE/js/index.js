const lineT = document.body.querySelector(".lineT")
const lineB = document.body.querySelector(".lineB")
const burger = document.body.querySelector(".burger")
const topBar = document.body.querySelector(".top_bar")
const utlaanB = document.getElementById("utlaanB")
const kjoretoyB = document.getElementById("kjoretoyB")
const medlemskapB = document.getElementById("medlemskapB")

const vehicles = [["XPENG P7","SEDAN","706km - NEDC Rekkevidde","4.5s - 0-100km/t Akselerasjon","XPILOT 3.0 - ADAS","pictures/xpengp7.png","4","available","CAR"],
            ["Volvo XC40 Recharge","SUV","433km - WLTP Rekkevidde","4.9s - 0-100km/t Akselerasjon","28min - Hurtiglading 10-80%","pictures/xc40.png","0","unreleased","CAR"],
            ["Hydrolift E-22", "Hurtigående elbåt","150 hk - Evoy Galeforce Outboard","40 knop - Maks hastighet","5 knop - ca. 7 timer, 23 knop - ca. 1 time","pictures/hydrolifte-22 no bg.png","1","available","BOAT"],
            ["MOMAS Jason 2022","Terrengsykkel","Opptil 100km - Rekkevidde","36V 250w - Krankmotor","23kg - Vekt","pictures/jason22.png","10","available","BICYCLE"]];

function getParameter(parameterName) {
    let parameters = new URLSearchParams(window.location.search)
    return parameters.get(parameterName)
}

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
        window.location.href = "vaare-kjoretoy.html"
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
