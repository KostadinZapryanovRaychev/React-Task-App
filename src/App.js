
import { React, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';


const mytasks = [
  {
    id: 1,
    text: "Food shipping",
    day: "Feb 5th at 2:30pm",
    reminder: false
  },
  {
    id: 2,
    text: "Buying airplane",
    day: "Nov 17th at 8:30pm",
    reminder: false
  },
  {
    id: 3,
    text: "Becoming billionaire",
    day: "Next year at the beggining",
    reminder: false
  },
  {
    id: 4,
    text: "Learning French",
    day: "Oct 22th at 12:30am",
    reminder: false
  },
]

function App() {
  const [tasks, setTasks] = useState(mytasks);
  const [showAdd,setShowAdd] = useState(false);
  
  const addTask = (task)=>{
      const id = Math.floor(Math.random()*10000)+1;
      const newTask = {id,...task};
      setTasks([...tasks,newTask]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    console.log(id);
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  
  return (
    <div className="container">
      <Header onAdd={()=>setShowAdd(!showAdd)} showAdd={showAdd}></Header>
      {showAdd && <AddTask addTask={addTask}></AddTask>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : "No tasks to show"}
    </div>
  );
}

export default App;
