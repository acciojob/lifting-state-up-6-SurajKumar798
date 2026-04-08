
import React from "react";
import './../styles/App.css';

const App = () => {
  const[todo, setTodo] = useState([
    {id: 1, text: 'Learn React', completed: false},
    {id: 2, text: 'Build a React app', completed: false},
    {id: 3, text: 'Deploy the React app', completed: false}
  ]);
  const handleComplete=(id)=>{
    const updateTodos = todos.map(todo=> 
      todo.id === id ? {...too, completed: true} : todo
    );
    setTodo(updateTodos); 
  }
  return (
    <div>
        {/* Do not remove the main div */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App
