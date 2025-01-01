import { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import { deleteTodo, updateTodo, addTodo, getAllTodo } from './utils/HandleApi';

function App() {

  const [todo, setTodo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false) 
  const [todoId, setTodoId] = useState("")

  useEffect(() => {
    getAllTodo(setTodo)
  }, [])

  const updateMode = (_id, text) => { 
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        
        <h1>ToDos</h1>

        <div className="todoList">
          {todo.map((item) => 
            <Todo key={item._id} text={item.text} 
            updateMode={() => updateMode(item._id, item.text)}
            deleteTodo={() => deleteTodo(item._id, setTodo)}  
          />)}
        </div>

        <div className = "todoAdd">
          <input type="text" placeholder="Add todos" value={text} onChange={(e) => setText(e.target.value)}/>
          <div className='addBtn' onClick={isUpdating ? () => updateTodo(todoId, text, setText, setTodo, setIsUpdating) : () => addTodo(text, setText, setTodo)}>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default App;
