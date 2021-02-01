var month = new Date().getMonth(),
  years = new Date().getFullYear()
const dayss = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
function calendarFunction() {
  const date = new Date(years, month, 1)
  const yearText = document.getElementsByClassName('year')[0]
  const monthText = document.getElementsByClassName('month')[0]
  yearText.innerHTML = date.getFullYear()
  monthText.innerHTML = months[date.getMonth()]

  var day = 1
  for (let i = 1; i <= 37; i++) {
    document.getElementById('d' + i).innerHTML = ''
  }
  for (
    let i = date.getDay() + 1;
    day <= new Date(years, month + 1, 0).getDate();
    i++
  ) {
    if (new Date().getDate() === day && new Date().getMonth() == month) {
      document.getElementById('d' + i).innerHTML =
        "<span class='highLight'>" + day + '</span>'
      day++
    } else {
      document.getElementById('d' + i).innerHTML = day
      day++
    }
  }
  displayDis()
}

var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')

function next() {
  month++
  calendarFunction()
}
function prev() {
  month--
  calendarFunction()
}
nextBtn.addEventListener('click', next)
prevBtn.addEventListener('click', prev)
window.addEventListener('keydown', (e) => {
  if (!cont.classList.contains('intro')) return
  switch (e.key.toLowerCase()) {
    case 'arrowright':
      return next()
    case 'arrowleft':
      return prev()
  }
})

var calendarCont = document.querySelector('.calendarCont')
var displayDate = document.querySelector('.displayDate')
var monthDis = document.querySelector('.monthDis')
var yearDis = document.querySelector('.yearDis')
var dayDis = document.querySelector('.dayDis')
var cont = document.querySelector('.cont')
function displayDis() {
  let date = new Date()
  monthDis.innerHTML = months[date.getMonth()]
  yearDis.innerHTML = date.getFullYear()
  dayDis.innerHTML = dayss[date.getDay()]
}
displayDate.onclick = function () {
  cont.classList.add('intro')
  displayDate.classList.add('scale')
}
window.onclick = function (e) {
  e.stopPropagation()
  if (e.target == cont) {
    cont.classList.remove('intro')
    displayDate.classList.remove('scale')
  }
}
