import { useState } from "react";
import "./App.css"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasklist from "./components/Tasklist";


function App() {
  const [tasklist , setTasks] = useState([
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

const handleDelete = (id:number) => {
  setTasks((currentState) => 
  currentState.filter((g) => g.id !== id)
);
};

   // Calculate the total number of tasks
   const totalTasks = tasklist.reduce((acc, list) => acc + list.tasks.length, 0);

  return (
    <>
      <Header title='Task List' total={totalTasks} />

      {tasklist.map(list => (
            <Tasklist 
                key={list.id}
                title={list.title}
                tasks={list.tasks}
                id={list.id}
                onDelete={handleDelete}
            />
        ))}


      <Footer/>
    </>
  )
}

export default App;