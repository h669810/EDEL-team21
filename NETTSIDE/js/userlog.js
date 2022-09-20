const userlog = localStorage.getItem('userlog')
const mypage = document.getElementById('mypage')
const logoffe = document.getElementById('logoff')
const logone = document.getElementById('logon')
const medlemContainer = document.getElementById("member_container")
const logoffContainer = document.getElementById("logoff_container")

const loginSubmit = document.getElementById("loginButton")
const registerSubmit = document.getElementById("registerButton")

const number = document.getElementById("number")
const fullname = document.getElementById("name")
const address = document.getElementById("address")
const zipcode = document.getElementById("zipcode")
const zipplace = document.getElementById("zipplace")
const email = document.getElementById("email")
const password = document.getElementById("password")

const wrongPassword = document.getElementById("wrong_password")

var users = []
var usersINFO = []
var storedUsers,storedUsersINFO
var currentEmail

if(localStorage.users != undefined) {
    storedUsers = JSON.parse(localStorage.users)
    storedUsersINFO = JSON.parse(localStorage.usersINFO)
} else {
    localStorage.setItem('users',JSON.stringify([[]]))
    localStorage.setItem('usersINFO',JSON.stringify([[]]))
}

function collectStoredItems() {
    console.log(usersINFO)
    console.log(localStorage.getItem('usersINFO'))
    storedUsers = JSON.parse(localStorage.users)
    storedUsersINFO = JSON.parse(localStorage.usersINFO)
}

if(userlog != 'off' && userlog != 'on') {
    localStorage.setItem('userlog','off')

}

if(userlog == 'off') {
    mypage.style.display = 'none'
    logoffe.style.display = 'none'

    logone.style.display = 'block'

    medlemContainer.style.display = "block"
    logoffContainer.style.display = "none"
} else if (userlog == 'on') {
    mypage.style.display = 'block'
    logoffe.style.display = 'block'

    logone.style.display = 'none'

    medlemContainer.style.display = "none"
    logoffContainer.style.display = "block"
}
var userNr = null
function login() {
    for(i = 0;i<storedUsers.length;i++) {
        if(storedUsers[i][0] == email.value) {
            if(storedUsers[i][1] == password.value) {
                userNr = i;
            } else (userNr = null)
        }
    } 

    if(userNr != null) {
        wrongPassword.style.opacity = '0'
        email.style.borderColor = 'var(--darkgrey)'
        password.style.borderColor = 'var(--darkgrey)'
        window.location.href = 'index.html'
        localStorage.setItem('userlog','on')
    } else if(userNr == null) {
        wrongPassword.style.opacity = '1'
        email.style.borderColor = 'var(--red)'
        password.style.borderColor = 'var(--red)'
        localStorage.setItem('userlog','off')
    }
    currentUser = userNr
    localStorage.setItem('user',userNr)
}

function logoff() {
    localStorage.setItem('userlog','off')
    userNr = null
    window.location.href = 'index.html'
}

function register () {
    var userINFO = [number.value, fullname.value, address.value, zipcode.value, zipplace.value, email.value, password.value, userNr]

    var x = JSON.parse(localStorage.usersINFO)
    console.log(x)
    var y = JSON.parse(localStorage.users)
    console.log(y)

    x.push([userINFO])
    y.push([userINFO[5],userINFO[6]])

    localStorage.setItem('usersINFO',JSON.stringify(x))
    localStorage.setItem('users',JSON.stringify(y))

    window.location.href = 'login.html'
    collectStoredItems()
}
