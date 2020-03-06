let items = document.querySelectorAll('.container .list .item');

items.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
        console.log('dragstart');
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
    console.log('dragover');
});

list.addEventListener('drop', (e) => {
    console.log('drop');
    let itemId = e.dataTransfer.getData('application/my-app');
    let item = document.getElementById(itemId);
    console.log(itemId);

    try {
        if (e.target === null) {
            list.appendChild(item);
        } else {
            list.insertBefore(item, e.target);
        }
    } catch (err) {}


});