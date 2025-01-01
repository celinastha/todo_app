import React from 'react'
import './Todo.css'
import { MdDelete } from "react-icons/md";
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'


const Todo = ({text, updateMode, deleteTodo}) => {
  return (
    <div className="todo">
        <div className="todoContent">
            <label className="todoText">
                <input type="checkbox"/>
                <span className="checkmark"></span>
                {text}
            </label>
        </div>
        <div className="icons">
            <BiEdit className="icon" onClick={updateMode}/>
            <MdDelete className="icon" onClick={deleteTodo} />
        </div>
    </div>
  )
}

export default Todo
