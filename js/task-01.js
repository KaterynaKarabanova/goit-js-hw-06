const categories = document.querySelectorAll(`.item`)
console.log(`Number of categories: ${categories.length}`);
categories.forEach(category => {
  let categoryName = category.querySelector('h2').textContent;
  let elements = category.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elements}`);
});