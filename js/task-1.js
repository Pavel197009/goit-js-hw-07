const item = document.querySelectorAll(".item ul");
const h2Categories = document.querySelectorAll("h2");
console.log(`Number of categories: ${item.length}`);
for (let i = 0; i < item.length; i++) {
    let count = item[i].children.length;
    console.log(`Category: ${h2Categories[i].textContent}`);
    console.log(`Elements: ${count}`);
}