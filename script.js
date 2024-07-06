function addToList() {
  const newItemInput = document.getElementById('new');

  const newItem = newItemInput.value.trim();

  if (!newItem) {
    alert('You have not entered any item');
    return;
  }

  const liItem = document.createElement('li');

  liItem.textContent = newItem;

  liItem.addEventListener('click', function() {
    this.classList.toggle('purchased');
  });

  // Create a delete button element
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn'); // Add class for styling (optional)
  deleteButton.textContent = '🚮';

  // Function to handle deleting an item
  function deleteItem(event) {
    const clickedButton = event.target;
    const itemId = clickedButton.dataset.id;
    const itemElement = document.getElementById(itemId);
    itemElement.parentNode.removeChild(itemElement);
  }

  // Add event listener to the delete button
  deleteButton.addEventListener('click', deleteItem);

  // Append the new list item and delete button to the existing list
  liItem.appendChild(deleteButton);
  const list = document.getElementById('list');
  list.appendChild(liItem);

  newItemInput.value = '';
}

// Event listener for the "Add" button click
const addButton = document.getElementById('addBtn');
addButton.addEventListener('click', addToList);

// Event listener for the "Clear List" button click (assuming ID "clearBtn")
const clearButton = document.getElementById('clearBtn');
clearButton.addEventListener('click', function() {
  list.innerHTML = ''; // Clear all list items
});

// Add event listener to existing delete buttons (if any) on page load
const deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach(button => {
  button.addEventListener('click', deleteItem);
});