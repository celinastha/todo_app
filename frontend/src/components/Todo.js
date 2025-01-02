import React, { useState } from 'react'
import './Todo.css'
import { MdDelete } from "react-icons/md";
import {BiEdit} from 'react-icons/bi'



const Todo = ({text, updateMode, deleteTodo}) => {
    const [checked, setChecked] = useState(false)

    return (
        <div className="todo">
            <div className="todoContent">
                <label className="todoText">
                    <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
                    <span className="checkmark"></span>
                    <span className={`${checked ? 'checked' : ''}`}> {text} </span>
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
