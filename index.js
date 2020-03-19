let items = document.querySelectorAll('.list .item');
let draggedItem;

items.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
        console.log('dragstart');
        draggedItem = e.target;
        draggedItem.style.opacity = '0.2';
    });

    item.addEventListener('dragend', (e) => {
        draggedItem.style.opacity = '1';
        console.log(list);
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