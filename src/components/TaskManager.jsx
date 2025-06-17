import { useState, useEffect, useContext, useMemo } from 'react';
import { Button } from './ui/button';
import useLocalStorage from '../lib/useLocalStorage.jsx';
import { ThemeContext } from '../lib/ThemeContext.jsx';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [taskInput, setTaskInput] = useState('');
  const [filter, setFilter] = useState('All');
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Example side effect: log tasks count
    console.log(`You have ${tasks.length} tasks`);
  }, [tasks]);

  const addTask = () => {
    if (taskInput) {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'Active':
        return tasks.filter(task => !task.completed);
      case 'Completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  return (
    <div className={theme === 'dark' ? 'bg-gray-800 text-white p-4 rounded' : 'bg-white text-black p-4 rounded'}>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
        className="border p-2 rounded w-full mb-2"
      />
      <Button variant="primary" onClick={addTask}>Add Task</Button>
      <div className="my-2">
        <Button variant={filter === 'All' ? 'primary' : 'outline'} onClick={() => setFilter('All')}>All</Button>
        <Button variant={filter === 'Active' ? 'primary' : 'outline'} onClick={() => setFilter('Active')}>Active</Button>
        <Button variant={filter === 'Completed' ? 'primary' : 'outline'} onClick={() => setFilter('Completed')}>Completed</Button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className="flex items-center justify-between mb-1">
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <div>
              <Button variant="secondary" onClick={() => toggleTaskCompletion(task.id)}>Toggle</Button>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
