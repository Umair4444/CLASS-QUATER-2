
import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]); // State to store the list of tasks
  const [newTask, setNewTask] = useState(""); // State to store the new task input

  // Function to handle input changes
  const handleInputChange = (e) => {
    setNewTask(e.target.value); // Update the new task as the user types
  };

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() === "") return; // Don't add empty tasks
    setTasks([...tasks, { text: newTask, completed: false }]); // Add task to the tasks list
    setNewTask(""); // Clear the input field
  };

  // Function to mark a task as complete or incomplete
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); // Update the task's completion status
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Remove task from the list
    setTasks(updatedTasks); // Update the state
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span
              onClick={() => toggleTaskCompletion(index)}
              style={{ textDecoration: task.completed ? "line-through" : "none" }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
