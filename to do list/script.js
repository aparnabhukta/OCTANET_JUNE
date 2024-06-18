const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText === '') return; // If task input is empty, do nothing
  
  addTask(taskText);
  taskInput.value = ''; // Clear input field after adding task
});

function addTask(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <div class="actions">
      <button class="complete">Complete</button>
      <button class="delete">Delete</button>
    </div>
  `;
  taskList.appendChild(li);
  
  // Add event listeners for complete and delete buttons
  const completeBtn = li.querySelector('.complete');
  const deleteBtn = li.querySelector('.delete');
  
  completeBtn.addEventListener('click', function() {
    li.classList.toggle('completed');
    completeBtn.textContent = li.classList.contains('completed') ? 'Undo' : 'Complete';
  });
  
  deleteBtn.addEventListener('click', function() {
    li.remove();
  });
}
