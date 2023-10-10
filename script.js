let dateUser = prompt("Digite aqui sua data no formato: yyyy/mm/dd")

let endDate = new Date(dateUser)

let container = document.getElementById("container")

function countdown() {
  let currentDate = new Date()
  let result = (endDate - currentDate) / 1000
  let days = Math.floor(result / 3600 / 24)
  let hours = Math.floor(result / 3600) % 24
  let minutes = Math.floor(result / 60) % 60
  let seconds = Math.floor(result) % 60

  let countdownText = `${days} d: ${formatTime(hours)} h: ${formatTime(
    minutes
  )} m: ${formatTime(seconds)} s`

  container.textContent = countdownText
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

setInterval(countdown, 1000)
countdown()
