// GET REQUEST
async function getTodos() {
    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => showOutput(res))
    .catch(err => console.error(err));
  }
  
  // POST REQUEST
  function addTodo() {
    axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title: 'New Todo',
      completed: false
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
    console.log('POST Request');
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios
    .put('https://jsonplaceholder.typicode.com/todos/1', {
      title: 'Updated Todo',
      completed: true
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
    console.log('PUT/PATCH Request');
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => showOutput(res))
    .catch(err => console.error(err));
    console.log('DELETE Request');
  }

  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);