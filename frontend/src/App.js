import { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import { deleteTodo, updateTodo, addTodo, getAllTodo } from './utils/HandleApi';
import { ToastContainer, toast } from 'react-toastify';

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

  const handleAddUpdate = () => {
    if(!text.trim()){
      toast.error("Text is required!");
      return;
    }
    if(isUpdating){
      updateTodo(todoId, text, setText, setTodo, setIsUpdating)
    } else{
      addTodo(text, setText, setTodo)
    }
  }

  const cancelUpdate = () => {
    setIsUpdating(false)
    setText("")
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

        <div className = "todoAddUpdate">
          <input type="text" placeholder="Add todos" value={text} onChange={(e) => setText(e.target.value)}/>
          <div className="actions" onClick={handleAddUpdate}>
            {isUpdating ? <button className="cancelUpdate" onClick={cancelUpdate}>Cancel</button> : ""}
            {isUpdating ? <span className="addUpdateBtn">Update</span> : <span className="addUpdateBtn">Add</span>}
          </div>
        </div>
      
      </div>
      <ToastContainer />
    </div>
    
  );
}

export default App;
