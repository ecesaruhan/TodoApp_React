import React, { useContext, useState } from 'react'
import { AppContext } from '../Contexts/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

const TodoEditTask = ({task}) => {
  const context = useContext(AppContext);
  const [text, setText] = useState(task.text)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      context.updateTask(task.id, text);
    } else {
      alert("Please do not leave blank!")
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input onChange={(e) => { setText(e.target.value) }} value={text} type="text" className="form-control bg-light" placeholder="What is the task today ?" />
        <button className="btn btn-warning" type="submit" id="btn-add-task"><FontAwesomeIcon className='text-white fs-2' icon={faSquareCheck} /></button>
      </div>
    </form>
  )
}

export default TodoEditTask;