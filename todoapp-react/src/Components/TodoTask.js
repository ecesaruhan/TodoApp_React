import React, { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoTask = ({ task }) => {
  const context = useContext(AppContext);
  return (
    <div>
      <li className={
        task.isCompleted ? "d-flex justify-content-between list-group-item rounded-2 mb-1 text-decoration-line-through text-success align-items-center"
          : "d-flex justify-content-between list-group-item rounded-2 mb-1 align-items-center"}>
        <div role='button' onClick={() => { context.toggleCompleted(task.id) }} className='w-75'>{task.text}</div>
        <div>
          <button className='btn btn-warning me-1' onClick={() => { context.toggleEditing(task.id) }}>
            <FontAwesomeIcon className='fs-5 text-white' icon={faPenToSquare} />
          </button>
          <button className='btn btn-danger' onClick={() => { context.deleteTask(task.id) }}>
            <FontAwesomeIcon className='fs-5' icon={faTrashCan} />
          </button>
        </div>
      </li>
    </div>
  )
}

export default TodoTask;