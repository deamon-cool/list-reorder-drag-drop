let items = document.querySelectorAll('.container .list .item');

items.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('application/my-app', e.target.id);
        item.style.opacity = 0.3;
    });

    item.addEventListener('dragend', () => {
        item.style.opacity = 1;

        list.style.padding = '2px';
    });

});

let container = document.querySelector('.container');
container.addEventListener('dragover', (e) => {
    if (e.target === container) {
        list.style.padding = '2px 2px 40px 2px';
    }
});


let list = document.querySelector('.container .list');
list.addEventListener('dragover', (e) => {
    e.preventDefault();
});

list.addEventListener('drop', (e) => {
    let itemId = e.dataTransfer.getData('application/my-app');
    let item = document.getElementById(itemId);

    try {
        if (e.target === list) {
            list.appendChild(item);
        } else {
            list.insertBefore(item, e.target);
        }
    } catch (err) {}


});