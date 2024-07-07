function addToList() {
  const newItemInput = document.getElementById('new');

  const newItem = newItemInput.value.trim();

  if (!newItem) {
    alert('You have not entered any item');
    return;
  }

  const liItem = document.createElement('li');
  liItem.textContent = newItem;

  let clickCount = 0; 
  const colors = ['lightgreen', 'red', 'aliceblue']; 

  liItem.addEventListener('click', function() {
    clickCount = (clickCount + 1) % colors.length; 
    this.style.color = colors[clickCount];
  });

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn'); 
  deleteButton.textContent = '✅';

  deleteButton.addEventListener('click', function(event) { 
    const clickedButton = event.target;
    const itemId = clickedButton.dataset.itemId; 
    const itemElement = document.getElementById(itemId);
    itemElement.parentNode.removeChild(itemElement);
  });

  liItem.dataset.itemId = Math.random().toString(36).substring(2, 15); 

  liItem.appendChild(deleteButton);
  const list = document.getElementById('list');
  list.appendChild(liItem);

  newItemInput.value = '';
}

const addButton = document.getElementById('addBtn');
addButton.addEventListener('click', addToList);

const clearButton = document.getElementById('clearBtn');
clearButton.addEventListener('click', function() {
  list.innerHTML = ''; 
});
