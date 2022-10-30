var parameter = getParameter("kjoretoy")

if(parameter != null) {
    localStorage.setItem('lastVehicle',parameter)
} else if (parameter == null) {
    parameter = +localStorage.getItem('lastVehicle')
    if(parameter == null)
        window.location.href='vaare-kjoretoy.html'
}

var arr = vehicles[parameter]

if(arr[7] == "unreleased") {
    if(arr[8] == "CAR") window.location.href='biler.html'
    if(arr[8] == "BOAT") window.location.href='baater.html'
    if(arr[8] == "BICYCLE") window.location.href='sykler.html'
}

const vehicleImg = document.getElementById('vehicleImg')
const vehicleTitle = document.getElementById('vehicleTitle')
const vehicleText1 = document.getElementById('vehicleText1')
const vehicleText2 = document.getElementById('vehicleText2')
const vehicleText3 = document.getElementById('vehicleText3')
const errorMsg = document.getElementById('errorMsg')

vehicleImg.src = arr[5]
vehicleTitle.innerHTML = '<strong>' + arr[0] + '</strong> ' + arr[1]
vehicleText1.textContent = arr[2]
vehicleText2.textContent = arr[3]
vehicleText3.textContent = arr[4]


const available = document.getElementById('available')

const dateStart = document.querySelector('input[name="rent-start"]')
const dateEnd = document.querySelector('input[name="rent-end"]')

const hourStart = document.getElementById('starthour')
const hourEnd = document.getElementById('endhour')
const minuteStart = document.getElementById('startminute')
const minuteEnd = document.getElementById('endminute')

function rentVehicle() {
    const today = Date.now()
    const offset = new Date().getTimezoneOffset()

    const startInMS = dateStart.valueAsNumber + hourStart.value*60*60*1000 + minuteStart.value*60*1000 + offset*60*1000
    const endInMS = dateEnd.valueAsNumber + hourEnd.value*60*60*1000 + minuteEnd.value*60*1000 + offset*60*1000
    const MARGIN = 15*60*1000

    if (!dateStart.value || !dateEnd.value) return errorMsg.textContent = ("You need to define both dates")
    if (today > (startInMS + MARGIN) || today > (endInMS + MARGIN)) return errorMsg.textContent = ("Your end and start date needs to be greater than today's date!")
    if (dateEnd.valueAsNumber < dateStart.valueAsNumber) return errorMsg.textContent = ("The end date needs to be greater than the start date!")
    if (hourEnd.value <= hourStart.value) return errorMsg.textContent = ("You need to rent the vehicle for at least 1 hour!")
    errorMsg.textContent = ""
}

function checkAvailability() {

    const today = Date.now()
    const offset = new Date().getTimezoneOffset()

    const startInMS = dateStart.valueAsNumber + hourStart.value*60*60*1000 + minuteStart.value*60*1000 + offset*60*1000
    const endInMS = dateEnd.valueAsNumber + hourEnd.value*60*60*1000 + minuteEnd.value*60*1000 + offset*60*1000
    const MARGIN = 15*60*1000
    

    if (!dateStart.value || !dateEnd.value) return errorMsg.textContent = ("You need to define both dates")
    if (today > (startInMS + MARGIN) || today > (endInMS + MARGIN)) return errorMsg.textContent = ("Your end and start date needs to be greater than today's date!")
    if (dateEnd.valueAsNumber < dateStart.valueAsNumber) return errorMsg.textContent = ("The end date needs to be greater than the start date!")
    if (hourEnd.value <= hourStart.value) return errorMsg.textContent = ("You need to rent the vehicle for at least 1 hour!")

    errorMsg.textContent = ""
    available.textContent = Math.floor(Math.random() * (+arr[6] + 1))
}