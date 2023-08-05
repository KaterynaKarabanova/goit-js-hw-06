function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body")
const changeColorBtn = document.querySelector(".change-color")
const spanColor = document.querySelector(".color")
function changeColor() {
  let colorRandom = getRandomHexColor()
  bodyEl.style.backgroundColor = colorRandom
  spanColor.textContent = `${colorRandom}`
}

changeColorBtn.addEventListener("click", changeColor)