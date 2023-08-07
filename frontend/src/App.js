import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="app-todo">
      <div className='tasks-list-main'>
        <h1>Mis Tareas</h1>
        <List />
      </div>
    </div>
  );
}

export default App;
