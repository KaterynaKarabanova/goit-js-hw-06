
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
 
];
const list = document.querySelector("#ingredients")
const liArray = []
ingredients.forEach(element => {
  let liAdd = document.createElement(`li`);
  liAdd.textContent = `${element}`;
  liAdd.classList.add(`item`);
  liArray.push(liAdd)
});
list.append(...liArray);

  
  






