import React, { useContext, useState } from 'react'
import { AppContext } from '../Contexts/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

const TodoAddTask = () => {
  const context = useContext(AppContext);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      context.addTask(text);
      setText("");
      e.target.firstChild.firstChild.focus();
    } else {
      alert("Please do not leave blank!")
    }
  }

  return (
    <div className='container-fluid p-0'>
      <h1 className='text-center text-primary'>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-group mb-1'>
          <input onChange={(e) => { setText(e.target.value) }} value={text} type="text" className='form-control' placeholder='Please enter your new task here.' />
          <button className='btn btn-success btn-sm' type='submit' id='add-task-button'>
            <FontAwesomeIcon className='fs-1' icon={faSquarePlus} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default TodoAddTask;