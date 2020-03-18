let items = document.querySelectorAll('.container .list .item');

console.log(items[1].id);

items.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
        console.log('dragstart');
        e.dataTransfer.setData('application/my-app', e.target.id);
    });


});

let list = document.querySelector('.container .list');
list.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('dragover');
    console.log(e);
});

list.addEventListener('drop', (e) => {
    console.log('drop');
    let item = e.dataTransfer.getData('application/my-app');
    console.log(item);
});