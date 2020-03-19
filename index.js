let list = document.querySelector('.list');
list.addEventListener('dragover', (e) => {
    e.preventDefault();

    updateOrder(e.target, draggedItem);
});

// read items saved content from localStorage, create div and append to list
for (let i = 0; i < localStorage.length; i++) {
    let temp = localStorage[i].split(':');
    let id = temp[0];
    let text = temp[1];

    let div = createDivItem(id, 'item', true, text);
    list.appendChild(div);
}

// creats new item for list
function createDivItem(id, divClass, draggable, text) {
    let div = document.createElement('div');
    div.setAttribute('id', id);
    div.setAttribute('class', divClass);
    div.setAttribute('draggable', draggable);
    div.textContent = text;

    return div;
}


let items = document.querySelectorAll('.list .item');
addItemsListeners(items);

let draggedItem;

// adds listeners to items
function addItemsListeners(items) {
    items.forEach((item) => {
        item.addEventListener('dragstart', (e) => {
            draggedItem = e.target;

            draggedItem.style.opacity = '0.01';
        });

        item.addEventListener('dragend', (e) => {
            saveOrderToStorage(list);

            draggedItem.style.opacity = '1';
        });

    });

}

// update order of each item in the list when some is dragging
function updateOrder(targetItem, draggedItem) {
    if (targetItem.className === draggedItem.className) {
        list.insertBefore(draggedItem, targetItem);
    } else {
        list.appendChild(draggedItem);
    }
}

// save order to localStorage of each item
function saveOrderToStorage(list) {
    for (let i = 0; i < list.children.length; i++) {
        localStorage.setItem(i, list.children[i].id + ':' + list.children[i].textContent);
    }
}

// button and adds listeners to generete example list of items
let buttonGenerate = document.querySelector('button');
buttonGenerate.onclick = (e) => {
    e.preventDefault();
    if (list.children.length === 0) {
        for (let i = 0; i < 5; i++) {
            let div = createDivItem('item' + i, 'item', true, 'Item ' + i);
            list.appendChild(div);
        }

        items = document.querySelectorAll('.list .item');
        addItemsListeners(items);
    }
};