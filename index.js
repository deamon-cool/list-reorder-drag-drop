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
});

list.addEventListener('drop', (e) => {
    console.log('drop');
    updateOrder(draggedItem, e.target);
});

function updateOrder(draggedItem, targetItem) {
    list.insertBefore(draggedItem, targetItem);
}