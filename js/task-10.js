

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBox = document.querySelector("#boxes")
const createEL = document.querySelector('button[data-create]');
const destroyEl = document.querySelector('button[data-destroy]');
const inputField = document.querySelector("input")


function createBoxes() {
  let amount = Number(inputField.value);
  const boxes = []

  for (let i = 0; i < amount; i++) {
    const box = document.createElement(`div`)
    const size = 30 + i * 10
    box.style.width = `${size}px`
    box.style.height = `${size}px`
    box.style.backgroundColor = `${getRandomHexColor()}`
    boxes.push(box)
  }
  divBox.append(...boxes)
}
function destroyBoxes() {
    divBox.innerHTML = '';
}

createEL.addEventListener("click", createBoxes)
destroyEl.addEventListener("click", destroyBoxes)

