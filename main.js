let title = document.querySelector('.title')
let ul = document.querySelector('ul')
let boutton = document.querySelector('.reload')


window.onload = function () {
  if (window.navigator.onLine) {
    online()
  }
  else {
    offline()
  }
}

window.addEventListener("online",function () {
  online()
})
window.addEventListener("offline",function () {
  offline() 
}
)


var localisation = navigator.hardwareConcurrency;
console.log("Votre emplacement est  ", localisation);

var localisation1 = navigator.language
console.log("Votre emplacement est  ", localisation1);






function online() {
  title.innerHTML = "ON Line"
  title.style.color = "green"
  ul.classList.add("hide")
  boutton.classList.add("hide")
}

function offline() {
  title.innerHTML = "OFF Line"
  title.style.color = "#666"
  ul.classList.remove("hide")
  boutton.classList.remove("hide")
}
