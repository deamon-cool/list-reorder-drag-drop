let items = document.querySelectorAll('.container .list .item');

items.forEach((item) => {
    item.addEventListener('dragstart', (e, item) => {
        console.log('dragstart');
        e.dataTransfer.setData('application/my-app', e.target);
    });

});

let list = document.querySelector('.container .list');
list.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('dragover');
});

list.addEventListener('drop', (e) => {
    console.log('drop');
    let item = e.dataTransfer.getData('application/my-app');
    console.log(item);

    list.appendChild(item);
});