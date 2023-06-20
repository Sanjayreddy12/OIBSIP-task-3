document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var taskInput = document.getElementById('todo-input');
    var taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      var taskItem = createTaskItem(taskText);
      document.getElementById('todo-list').appendChild(taskItem);
      taskInput.value = '';
    }
  });
  
  function createTaskItem(taskText) {
    var li = document.createElement('li');
    var taskSpan = document.createElement('span');
    var deleteSpan = document.createElement('span');
  
    taskSpan.textContent = taskText;
    taskSpan.className = 'task';
  
    deleteSpan.textContent = 'x';
    deleteSpan.className = 'delete';
    deleteSpan.addEventListener('click', function() {
        li.classList.add('celebrate');
        setTimeout(function() {
          li.remove();
        }, 900);
      });
    
    li.appendChild(taskSpan);
    li.appendChild(deleteSpan);
  
    return li;
  }
  