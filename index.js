let list = document.querySelector('.list');
list.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('dragover');
    updateOrder(e.target, draggedItem);
});


for (let i = 0; i < localStorage.length; i++) {
    let temp = localStorage[i].split(':');
    let id = temp[0];
    let text = temp[1];

    let div = document.createElement('div');
    div.setAttribute('id', id);
    div.setAttribute('class', 'item');
    div.setAttribute('draggable', 'true');
    div.textContent = text;

    list.appendChild(div);
}

let items = document.querySelectorAll('.list .item');
let draggedItem;

items.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
        console.log('dragstart');
        draggedItem = e.target;
        draggedItem.style.opacity = '0.01';
    });

    item.addEventListener('dragend', (e) => {
        draggedItem.style.opacity = '1';
        saveOrder(list);
    });

});


function updateOrder(targetItem, draggedItem) {
    if (targetItem.className === draggedItem.className) {
        list.insertBefore(draggedItem, targetItem);
    } else {
        list.appendChild(draggedItem);
    }
}

function saveOrder(list) {
    for (let i = 0; i < list.children.length; i++) {
        localStorage.setItem(i, list.children[i].id + ':' + list.children[i].textContent);
    }
}


let buttonGenerate = document.querySelector('button');
buttonGenerate.onclick = (e) => {
    e.preventDefault();
    if (list.children.length === 0) {
        for (let i = 0; i < 5; i++) {
            let div = document.createElement('div');

            div.setAttribute('id', 'item' + i);
            div.setAttribute('class', 'item');
            div.setAttribute('draggable', 'true');
            div.textContent = 'Item ' + i;

            list.appendChild(div);
        }

        items = document.querySelectorAll('.list .item');

        items.forEach((item) => {
            item.addEventListener('dragstart', (e) => {
                console.log('dragstart');
                draggedItem = e.target;
                draggedItem.style.opacity = '0.01';
            });

            item.addEventListener('dragend', (e) => {
                draggedItem.style.opacity = '1';
                saveOrder(list);
            });

        });

    }

}