// Mendapatkan referensi ke elemen HTML
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Fungsi untuk menambahkan task
function addTask() {
  const taskText = taskInput.value;
  
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }
  
  // Buat elemen li baru untuk task
  const li = document.createElement('li');
  li.textContent = taskText;
  
  // Tambahkan tombol hapus pada setiap task
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function() {
    taskList.removeChild(li);
  };
  
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  
  // Kosongkan input setelah menambah task
  taskInput.value = '';
}

// Event listener untuk tombol "Add Task"
addTaskBtn.addEventListener('click', addTask);

// Event listener untuk menambah task dengan menekan Enter
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
