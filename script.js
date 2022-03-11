
// Defaut Theme

if (localStorage.theme == 'darkmode') {
  document.body.classList.add('darkmode')
}

// Dark Theme
const moonDark = document.getElementById("moon");

moonDark.addEventListener('click', (event) => {
  document.body.classList.toggle('darkmode')
  localStorage.setItem('theme', 'darkmode')
})

// White Theme
const sunLight = document.getElementById("sun");

sunLight.addEventListener('click', (event) => {
  document.body.classList.toggle('darkmode')
  localStorage.setItem('theme', 'whiteMode')
})

