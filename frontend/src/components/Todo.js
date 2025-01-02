import React, { useState } from 'react'
import './Todo.css'
import { MdDelete } from "react-icons/md";
import {BiEdit} from 'react-icons/bi'



const Todo = ({tags, text, updateMode, deleteTodo, completeToggle}) => {
    const [checked, setChecked] = useState(false)

    const complete = () => {
        setChecked(!checked);
        completeToggle();
    }

    return (
        <div className="todo">
            <div className="todoContent">
                <label className="todoText">
                    <input type="checkbox" checked={tags.includes("complete")} onChange={complete}/>
                    <span className="checkmark"></span>
                    <span className={`${tags.includes("complete") ? "completed" : ''}`}> {text} </span>
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
