const items = document.querySelectorAll(".item");                               // выбор всех элементов с классом item
const h2Categories = document.querySelectorAll("h2");                           // выбор всех элементов h2    
console.log(`Number of categories: ${items.length}`);                           // вывод количества категорий       
for (let i = 0; i < items.length; i++) {                                        
    const childElements = items[i].children;                                    // выбор всех потомков i - го элемента с классом item
    let ptr = 0;
    for (let j = 0; j < childElements.length; j++) {                            // перебор с поиском элемента с тегом UL
        if (childElements[j].tagName == "UL") {
            ptr = j;
            break;
        }
    }
    console.log(`Category: ${h2Categories[i].textContent}`);                    // вывод названия категории
    console.log(`Elements: ${childElements[ptr].children.length}`);             // вывод количества элементов LI в элементе UL  
}