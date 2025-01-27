import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <header>
        <h1>To-Do App</h1>
      </header>
      <main>
        <AddTaskForm onAdd={addTask} />
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleTaskCompletion}
        />
      </main>
    </div>
  );
}

export default App;
