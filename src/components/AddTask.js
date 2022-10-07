import {React, useState} from 'react'

const AddTask = ({addTask}) => {
    const [text,setText] = useState("");
    const [day,setDay] = useState("");
    const [reminder,setReminder] = useState(false);

   const onSubmit = (event)=> {
    event.preventDefault();
    if(!text){
        alert("Please add task, don't remain the field empty")
        return
    };
    addTask({text,day,reminder});
    setText("");
    setDay("");
    setReminder(false);
   }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input type="text" placeholder='Add task' value={text} onChange={(event)=>setText(event.target.value)}></input>
      </div>
      <div className='form-control'>
        <label>Day</label>
        <input type="text" placeholder='Add day' value={day} onChange={(event)=>setDay(event.target.value)}></input>
      </div>
      <div className='form-control form-control-check'>
        <label>Set reminder</label>
        <input type="checkbox" value={reminder} checked={reminder} onChange={(event)=>setReminder(event.currentTarget.checked)}/>
      </div>
      <input type="submit" value="Save Task" className='btn btn-block' ></input>
    </form>
  )
}

export default AddTask