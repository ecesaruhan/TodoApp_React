import './App.css';
import TodoAddTask from './Components/TodoAddTask';
import TodoFilters from './Components/TodoFilters';
import TodoTasksList from './Components/TodoTasksList';
import { AppContext } from './Contexts/AppContext';

function App() {
  return (
    <AppContext.Provider>
      <div className='container w-75 p-5'>
        <TodoAddTask />
        <TodoFilters />
        <TodoTasksList />
      </div>
    </AppContext.Provider>
  );
}

export default App;
