import "./App.css"
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const tasklist = [
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
  ]

   // Calculate the total number of tasks
   const totalTasks = tasklist.reduce((acc, list) => acc + list.tasks.length, 0);

  return (
    <>
      <Header title='Task List' total={totalTasks} />


      <Footer/>
    </>
  )
}

export default App;