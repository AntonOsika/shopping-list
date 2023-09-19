document.querySelector('button').addEventListener('click', function() {
  const item = document.querySelector('#item').value;
  if (item) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    document.querySelector('form').appendChild(listItem);
    document.querySelector('#item').value = '';
  }
});
