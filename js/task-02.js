
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients")
const liPot = document.createElement(`li`)
const liMush = document.createElement(`li`)
const liGar = document.createElement(`li`)
const liTom = document.createElement(`li`)
const liHer = document.createElement(`li`)
const liCon = document.createElement(`li`)

const childElements = [
liPot, liMush, liGar, liTom, liHer, liCon
]
childElements.forEach((element, index) => {
  element.classList.add(`item`)
  list.appendChild(element);
  element.textContent = ingredients[index];
});
  






