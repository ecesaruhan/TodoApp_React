import React, { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext';

const TodoFilters = () => {
  const context = useContext(AppContext);
  return (
    <div className='container-fluid d-flex justify-content-between p-2 g-0 mb-1 border rounded-1'>
      <div>
        <button onClick={()=>{context.setFilters("all")}} className='btn btn-primary me-1 btn-sm'>All</button>
        <button onClick={()=>{context.setFilters(false)}} className='btn btn-warning me-1 btn-sm'>Pending</button>
        <button onClick={()=>{context.setFilters(true)}} className='btn btn-success me-1 btn-sm'>Completed</button>
      </div>
      <button onClick={()=>{context.clearAllTasks()}} className='btn btn-danger btn-sm' type='button' id='btn-clear-all-tasks' >
        Clear All 
      </button>
    </div>
  )
}

export default TodoFilters;