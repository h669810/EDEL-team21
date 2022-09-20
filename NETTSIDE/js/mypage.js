userNumber = localStorage.getItem('user')
document.getElementById("mypage_loggedinas").innerHTML = 'Innlogget som: ' + storedUsersINFO[userNumber][0][1] + ', ' + storedUsersINFO[userNumber][0][5]