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
  const [cancelUpdate, setCancelUpdate] = useState(false);

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
      updateTodo(todoId, text, setText, setTodo, setIsUpdating, cancelUpdate)
    } else{
      addTodo(text, setText, setTodo)
    }
  }

  const cancel = () => {
    setCancelUpdate(true);
    console.log("Cancel clicked");
  }

  useEffect(() => { 
    //console.log("cancelUpdate state changed:", cancelUpdate); 
    if (cancelUpdate) { 
      console.log("Update cancelled."); 
      setCancelUpdate(false); 
      setText(""); 
      setIsUpdating(false)
      toast.warning("Update Cancelled", { autoClose: 1800 });
    }
  }, [cancelUpdate]);

  return (
    <div className="App">
      <div className="container">
        
        <h1>ToDos</h1>

        <div className="todoList">
          {todo.map((item) => 
            <Todo 
            key={item._id} 
            text={item.text} 
            updateMode={() => updateMode(item._id, item.text)}
            deleteTodo={() => deleteTodo(item._id, setTodo)}  
          />)}
        </div>

        <div className = "todoAddUpdate">
          <input type="text" placeholder="Add todos" value={text} onChange={(e) => setText(e.target.value)}/>
          <div className="actions">
            {isUpdating ? (
              <>
                <button className="cancelUpdate" onClick={cancel}>Cancel</button>
                <button className="addUpdateBtn" onClick={handleAddUpdate}>Update</button>
              </>
            ):(
              <button className="addUpdateBtn" onClick={handleAddUpdate}>Add</button>
            )}
          </div>
        </div>
      
      </div>
      <ToastContainer />
    </div>
    
  );
}

export default App;
