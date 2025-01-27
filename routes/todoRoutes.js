const { Router } = require('express');
const { getTodos, createTodo, deleteTodo } = require('../controllers/todoController');

const router = Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.delete('/:id', deleteTodo);

module.exports = router;