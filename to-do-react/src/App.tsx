import React, { useState } from 'react';
import { nanoid } from "nanoid";
import './App.css';
import Header from './components/header';
import TaskCard from './components/task-card';

function App() {
  const data: any[] = [];
  const [tasks, setTasks] = useState(data);
  const [newTaskName, setNewTaskName] = useState('');

  function addTask() {
    if (newTaskName !== "") {
      const newTask = { id: `todo-${nanoid()}`, name: newTaskName, completed: false };
      setTasks([...tasks, newTask]);
      setNewTaskName('');
    }
  }

  function deleteTask(id: string) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function toggleComplete(id: string) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const allTasks = tasks.map(task => (
    <TaskCard key={task.id} id={task.id} name={task.name} completed={task.completed} deleteTask={deleteTask} toggleComplete={toggleComplete} />
  ));

  const incompletedTasks = allTasks.filter(task => !task.props.completed);
  const completedTasks = allTasks.filter(task => task.props.completed);

  return (
    <body>
      <Header />

      <section className='add-task'>
        <input
          type="text"
          placeholder='Titre de la tâche'
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button onClick={() => addTask()}>+</button>
      </section>

      <section className="task-container">
        {incompletedTasks}
        <hr className='bar' />
        {completedTasks}
      </section>
    </body>
  );
}

export default App;
