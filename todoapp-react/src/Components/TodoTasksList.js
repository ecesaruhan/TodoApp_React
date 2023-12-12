import React, { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext'
import TodoTask from './TodoTask';
import TodoEditTask from './TodoEditTask';

const TodoTasksList = () => {
  const context = useContext(AppContext);
  return (
    <>
      <ul className='list-group'>
        {
          context.tasksList.map(task => {
            if (context.filters == "all") {
              if (task.isEditing && !task.isCompleted) {
                return <TodoEditTask key={task.id} task={task} />
              } else {
                return <TodoTask key={task.id} task={task} />
              }
            } else {
              if (task.isCompleted == context.filters) {
                if (task.isEditing && !task.isCompleted) {
                  return <TodoEditTask key={task.id} task={task} />
                } else {
                  return <TodoTask key={task.id} task={task} />
                }
              }
            }

          })
        }
      </ul>
    </>
  )
}

export default TodoTasksList;

//Burada edit butonuna basınca todoEditTask componentını çağıracağız. Butona basılmadan önceki halinde ise TodoTask çağırılacak.