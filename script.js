function addToList() {
    const newItemInput = document.getElementById('new');
  
    const newItem = newItemInput.value.trim();
  
    if (!newItem) {
      alert('You have not entered any item')
      return;
    }
  
    const liItem = document.createElement('li');
  
    liItem.textContent = newItem;
  
    liItem.addEventListener('click', function() {
      this.classList.toggle('purchased'); 
    });
  
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