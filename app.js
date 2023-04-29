//let counter = document.querySelector('.div-counter')
//let counter_fmt = document.querySelector('.div-counter-fmt h4')

let toPrint = document.querySelector(".article-explanatory-notes")

// next doomsday:
//  May 9, 2O23
//   O-index month : May - 4
//   timezone hour : 7am -> 9am
let target = new Date(2023, 4, 9, 9, 59, 0)
console.log(target)
let year = target.getFullYear()
let hours = target.getHours()
let mins = target.getMinutes()

let 

toPrint.textContent = `how much time left to a specified date: ${hours} ${minutes}`
