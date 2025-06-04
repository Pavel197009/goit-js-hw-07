const item = document.querySelectorAll(".item");
const h2Categories = document.querySelectorAll("h2");
console.log(`Number of categories: ${item.length}`);
for (let i = 0; i < h2Categories.length; i++) {
    let count = h2Categories[i].nextElementSibling.children.length;
    console.log(`Category: ${h2Categories[i].textContent}`);
    console.log(`Elements: ${count}`);
}