let items = document.querySelectorAll('.container .list .item');

items.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('application/my-app', e.target.id);
        item.style.opacity = 0.3;
    });

    item.addEventListener('dragend', () => {
        item.style.opacity = 1;
    });

});


let list = document.querySelector('.container .list');
list.addEventListener('dragover', (e) => {
    e.preventDefault();

    if (e.target === items[items.length - 1]) {
        list.style.padding = '2px 2px 40px 2px';
    } else {
        list.style.padding = '2px';
    }
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