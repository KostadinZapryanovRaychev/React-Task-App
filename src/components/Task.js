import React from 'react'
import {FaTimes} from "react-icons/fa"
import classes from "../App.css";

const Task = (props) => {
  return (
    <div className={`task ${props.task.reminder ? "reminder" : ""}`} onDoubleClick={()=>props.onToggle(props.task.id)}>
        <h5>{props.task.text} <FaTimes onClick={()=>props.onDelete(props.task.id)}></FaTimes></h5>
        <p>{props.task.day}</p>
    </div>
  )
}

export default Task