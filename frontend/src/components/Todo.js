import React from 'react'
import './Todo.css'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'


const Todo = ({text, updateMode, deleteTodo}) => {
  return (
    <div className="todo">
        <div className="todoText">{text}</div>
        <div className="icons">
            <BiEdit className="icon" onClick={updateMode}/>
            <AiFillDelete className="icon" onClick={deleteTodo} />
        </div>
    </div>
  )
}

export default Todo
