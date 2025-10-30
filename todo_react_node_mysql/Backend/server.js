const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'todo_database',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0   
})

app.get('/', (req, res) => {
  res.send('Hello From Backend!');
});

app.get('/todos', (req, res) => {
    res.setHeader("Content-Type", "text/html");
    
  res.send('Here are your todos');
});

app.post('/addTodo', (req, res) => {
  const newTodo = req.body;
  const todoText = newTodo.text;
  console.log('Received new todo:', todoText);

   // Logic to add the new todo would go here
  res.status(201).send('Todo added');
});
 

app.listen(3000, (err) => {
  if (err) {
    console.error('Error starting server:', err);
    return;
  }
  console.log('Server is running on port 3000');
});
