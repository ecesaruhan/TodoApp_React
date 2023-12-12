import { useEffect, useState } from 'react';
import './App.css';
import TodoAddTask from './Components/TodoAddTask';
import TodoFilters from './Components/TodoFilters';
import TodoTasksList from './Components/TodoTasksList';
import { AppContext } from './Contexts/AppContext';
import { v4 as idGenerate } from 'uuid';

function App() {
  const [tasksList, setTasksList] = useState([]);

  const [filters, setFilters] = useState("all");

  // useEffect(() => {
  //   getFromLocalStorage();
  // }, [])

  // useEffect(() => {
  //   setToLocalStorage();
  // }, [tasksList])

  const addTask = _text => {
    setTasksList(
      [...tasksList, {
        id: idGenerate(),
        text: _text,
        isCompleted: false,
        isEditing: false
      }]
    )
  }

  const toggleCompleted = id => {
    setTasksList(
      tasksList.map(task => task.id == id ? { ...task, isCompleted: !task.isCompleted } : task)
    );
  }

  const deleteTask = id => {
    setTasksList(
      tasksList.filter(task => task.id != id)
    );
  }

  const toggleEditing = id => {
    setTasksList(
      tasksList.map(task => task.id == id ? { ...task, isEditing: true } : { ...task, isEditing: false })
    );
  }

  const updateTask = (id, _text) => {
    setTasksList(
      tasksList.map(task => task.id == id ? { ...task, text: _text, isEditing: !task.isEditing } : task)
    );
  }

  const clearAllTasks = id => {
    setTasksList([]);
  }

  // const setToLocalStorage = () => {
  //   localStorage.setItem("todo-app-with-react", JSON.stringify(tasksList))
  // }

  // const getFromLocalStorage = () => {
  //   let item = localStorage.getItem("todo-app-with-react")
  //   if (item != null) {
  //     setTasksList(JSON.parse(item));
  //   }
  // }

  return (
    <AppContext.Provider value={{ tasksList, addTask, filters, setFilters, toggleCompleted, clearAllTasks, deleteTask, toggleEditing, updateTask }}>
      <div className='container w-50 p-5'>
        <TodoAddTask />
        <TodoFilters />
        <TodoTasksList />
      </div>
    </AppContext.Provider>
  );
}

export default App;
