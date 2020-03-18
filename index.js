let items = document.querySelectorAll('.list .item');
let draggedItem;

items.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
        console.log('dragstart');
        draggedItem = e.target;
    });
});

let list = document.querySelector('.list');
list.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('dragover');
    updateOrder(draggedItem, e.target);
});

list.addEventListener('drop', (e) => {
    console.log('drop');
    updateOrder(draggedItem, e.target);
});


function updateOrder(draggedItem, targetItem) {
    if(targetItem.className === draggedItem.className) {
        list.insertBefore(draggedItem, targetItem);
    } else {
        list.appendChild(draggedItem);
    }
}