import React, { useContext } from 'react'
import { AppContext } from '../Contexts/AppContext'
import TodoTask from './TodoTask';

const TodoTasksList = () => {
  const context = useContext(AppContext);
  return (
    <>
      <TodoTask />
      <TodoTask />
      <TodoTask />
      <TodoTask />
    </>
  )
}

export default TodoTasksList;

//Burada edit butonuna basınca todoEditTask componentını çağıracağız. Butona basılmadan önceki halinde ise TodoTask çağırılacak.