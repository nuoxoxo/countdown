let CurrentTime, EndTime

let ShaunSet = [
  'https://tenor.com/EBnP.gif', // Thumbsup
  'https://tenor.com/bz9Hu.gif', // Ok Thumbsup
  'https://tenor.com/xxB5.gif', // Hooray 
  'https://tenor.com/bh5c6.gif', // Portrait
  'https://tenor.com/30r0.gif', // Breakdance
  'https://tenor.com/bKr41.gif', // Crowd applause
  'https://tenor.com/bL3vk.gif', // Zooming in
  'https://tenor.com/bNQqB.gif', // Hug
  'https://tenor.com/bKr4Z.gif', // Pacifier
  'https://tenor.com/bTzh9.gif', // Joinha ok
  'https://tenor.com/xxws.gif', // Searching
  'https://tenor.com/W6xu.gif' // Curling slide
]

let ShaunPath = ShaunSet[Math.floor(Math.random() * ShaunSet.length)]
// document.getElementById('Shaun').src=ShaunPath
// console.log(document.getElementById('Shaun'), ShaunPath)

let interval

EndTime = new Date(2023, 4, 9, 9, 59, 0)

interval = setInterval(function() {

  CurrentTime = new Date().getTime()

  // console.log(CurrentTime, EndTime)

  let diff = EndTime - CurrentTime
  let days = Math.floor(diff / (1000 * 60 * 60 * 24))
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((diff % (1000 * 60)) / 1000)

  document.querySelector(".days").textContent = `${days}`
  document.querySelector(".hours").textContent = `${hours}`
  document.querySelector(".mins").textContent = `${minutes}`
  document.querySelector(".secs").textContent = `${seconds}`

  if (diff < 0) {

    clearInterval(interval)
    document.getElementById('div-counter').innerHTML = "Let's end it here. \n"

  }

}, 1000)

