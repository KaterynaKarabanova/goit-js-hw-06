const categories = document.querySelectorAll(`.item`)
console.log(categories);

console.log(`Number of categories: ${categories.length}`);
const title = document.querySelector(`.item > h2`)
console.log(`Category: ${title.textContent}`);
const nestedUl = document.querySelector("#categories .item ul");

const liCount = nestedUl.getElementsByTagName("li").length;
console.log(`Elements: ${liCount}`);

