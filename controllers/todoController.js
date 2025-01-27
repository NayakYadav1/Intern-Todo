const Todo = require('../models/todoModel');

// Fetch all tasks
const getTodos = async (req, res) => {
    try{
        const todos = await Todo.find();
        res.json(todos);
    } catch(err) {
        res.status(500).send(err.message);
    }
}

// Add a new task
const createTodo = async (req, res) => {
    try{
        const newTodo = await Todo.create(req.body);
        res.json(newTodo);
    } catch(err) {
        res.status(500).send(err.message);
    }
};

// Delete a task
const deleteTodo = async (req, res) => {
    try{
        await Todo.findByIdAndDelete(req.params.id);
        res.json({
            message: 'Task Deleted'
        })
    } catch(err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getTodos, createTodo, deleteTodo }