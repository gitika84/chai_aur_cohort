function updateClock() {
const timeElement = document.getElementById("time")
const dateElement = document.getElementById("date")

const now = new Date();
const hours = now.getHours() % 12 || 12;
const minutes = now.getMinutes().toString().padStart(2 , "0" )
const second = now.getSeconds().toString().padStart(2 , "0" )

const ampm = now.getHours() <= 12 ? "AM" : "PM";

timeElement.textContent = `${hours}:${minutes}:${second}:${ampm}`


}

setInterval(updateClock, 1000)
updateClock()