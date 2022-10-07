import {React, useState} from 'react'
import Task from './Task'
import classes from "../App.css";





const Tasks = ({tasks,onDelete,onToggle}) => {
 
  return (
    <div>
        {tasks.map((task)=>{
            return  <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}></Task>
        })}

    </div>
  )
}

export default Tasks