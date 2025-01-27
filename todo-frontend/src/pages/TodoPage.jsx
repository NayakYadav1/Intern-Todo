import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    // Fetch tasks
    useEffect(() => {
        axios.get('http://localhost:5000/api/todos')
            .then((res) => setTodos(res.data))
            .catch((err) => console.log(err))
    }, []);

    // Add task
    const addTask = () => {
        axios.post('http://localhost:5000/api/todos', { task })
            .then((res) => setTodos([...todos, res.data]))
            .catch((err) => console.log(err))
    };

    // Delete task
    const deleteTask = (id) => {
        axios.delete(`http://localhost:5000/api/todos/${id}`)
            .then((res) => setTodos(todos.filter((todo) => todo._id !== id)))
            .catch((err) => console.log(err))
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a task" />
            <button onClick={addTask}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id}>
                        {todo.task}
                        <button onClick={() => deleteTask(todo._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoPage;