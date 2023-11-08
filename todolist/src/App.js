import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {

  const initialState = JSON.parse(localStorage.getItem("todo")) || [] 
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState(initialState)
  const [editTodo, setEditTodo] = useState(null)

  useEffect(()=>{
    localStorage.setItem("todo", JSON.stringify(todo))
  },[todo])

  return (
    <div className="container">
      <div className='todo-container'>
        <h1>todo-list</h1>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todo={todo}
          setTodo={setTodo}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <Todolist 
            todo={todo} 
            setTodo={setTodo}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
