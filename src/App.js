import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container p-5 mt-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
      <h1> What's the Plan for Today </h1>

      <AddTodoForm />
      <TodoItem />
      <TodoList />
    </div>
  );
}

export default App;
