const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    const myItem = input.value;
    input.value = '';
    /*it will create a new list item when the user click on the button*/
    const listItem = document.createElement('li');
    const listBtn = document.createElement('button');

    listItem.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(listItem);

    listBtn.addEventListener('click', function() {
    list.removeChild(listItem);
    });

    input.focus();
});
/* need to understand more about how a DOM works*/