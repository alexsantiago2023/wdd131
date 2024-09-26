const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const deletebutton = document.createElement('button');

li.textContent = input.value;
deletebutton.textContent = '❌';

li.append(deletebutton);
list.append(li);

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        alert('Field is empty');
    }
    input.value = '';
    input.focus();
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});