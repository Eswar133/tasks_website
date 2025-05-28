const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());


let tasks = [];
let idCounter = 1;


app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});


app.get('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.status(200).json(task);
});


app.post('/tasks', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  const newTask = {
    id: idCounter++,
    title,
    description
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});


app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;

  const taskIndex = tasks.findIndex(t => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  tasks[taskIndex] = { id, title, description };

  res.status(200).json(tasks[taskIndex]);
});


app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  res.status(200).json({ message: 'Task deleted successfully' });
});

// page not found
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


app.get('/tasks', (req, res) => {
  let { page = 1, limit = 10, sortBy, order = 'asc' } = req.query;

  page = parseInt(page);
  limit = parseInt(limit);

  let result = [...tasks];


  if (sortBy) {
    result.sort((a, b) => {
      if (order === 'desc') {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      }
    });
  }


  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedResult = result.slice(startIndex, endIndex);

  res.status(200).json({
    totalTasks: result.length,
    page,
    limit,
    tasks: paginatedResult
  });
});

// Starting te server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
