for(let i = 0; i < localStorage.length; i++) {
    console.log(i, localStorage[i]);
}

// read from Storage
// read id
// read text content
// read position
// sort by the position ?
// create each div.item in div.list


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


let list = document.querySelector('.list');
list.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('dragover');
    updateOrder(e.target, draggedItem);
});


function updateOrder(targetItem, draggedItem) {
    if(targetItem.className === draggedItem.className) {
        list.insertBefore(draggedItem, targetItem);
    } else {
        list.appendChild(draggedItem);
    }
}

function saveOrder(list) {
    for(let i = 0; i < list.children.length; i++) {
        localStorage.setItem(i, list.children[i].id + ':' + list.children[i].textContent);
    }
}