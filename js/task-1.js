const items = document.querySelectorAll(".item");                               // выбор всех элементов с классом item
const h2Categories = document.querySelectorAll("h2");                           // выбор всех элементов h2    
console.log(`Number of categories: ${items.length}`);                           // вывод количества категорий       
for (let i = 0; i < items.length; i++) {                                        
    const getByTag = items.find(item => items[i].children.tagName === "UL");    // поиск потомка с тегом UL внутри каждого элемента класса item
    console.log(`Category: ${h2Categories[i].textContent}`);                    // вывод названия категории
    console.log(`Elements: ${getByTag.children.length}`);                       // вывод количества элементов LI в элементе UL  
}
