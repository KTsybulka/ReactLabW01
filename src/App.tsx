import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasklist from "./components/Tasklist";

function App() {
  const [tasklist, setTasks] = useState([
    {
      title: 'Humber',
      tasks: ['Task 1', 'Task 2', 'Task 3'],
      id: 1,
    },
    {
      title: 'MERN',
      tasks: ['Lab', 'Project', 'Quiz'],
      id: 2,
    },
    {
      title: 'Java',
      tasks: ['Group Discussion', 'Exam', 'Assignment'],
      id: 3,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newTitle, setNewTitle] = useState('');
  const [newTask, setNewTask] = useState('');

  const handleDelete = (id: number) => {
    setTasks((currentState) =>
      currentState.filter((list) => list.id !== id)
    );
  };

  const handleAddTaskList = () => {
    if (newTitle.trim() === '' || newTask.trim() === '') return; // Ensure title and task are not empty

    const taskArray = newTask.split(',').map(task => task.trim());
    const newTaskList = {
      title: newTitle,
      tasks: taskArray,
      id: tasklist.length + 1,
    };
    setTasks([...tasklist, newTaskList]);
    setNewTask('');
    setNewTitle('');
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const filteredTasks =
    selectedCategory === 'All'
      ? tasklist
      : tasklist.filter(list => list.title === selectedCategory);

  // Calculate the total number of tasks
  const totalTasks = tasklist.reduce((acc, list) => acc + list.tasks.length, 0);

  return (
    <>
      <Header title='Task List' total={totalTasks} />

      <div className="add-taskList">
        <input
          type="text"
          placeholder="Task list title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter tasks separated by commas"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTaskList}>Add new task</button>
      </div>

      <div className="category-filter">
        <label htmlFor="category">Filter by Category: </label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All</option>
          {tasklist.map(list => (
            <option key={list.id} value={list.title}>
              {list.title}
            </option>
          ))}
        </select>
      </div>

      {/* Render filtered task lists */}
      {filteredTasks.map(list => (
        <Tasklist
          key={list.id}
          title={list.title}
          tasks={list.tasks}
          id={list.id}
          onDelete={handleDelete}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;