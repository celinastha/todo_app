import axios from 'axios'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const baseUrl = "http://localhost:5000"

const getAllTodo = (setTodo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data ---> ', data);
        setTodo(data);
    })
    .catch((err) => console.log(err))
}

const addTodo = (text, setText, setTodo) => {
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllTodo(setTodo)
        toast.success("Todo Successfully Added!", { autoClose: 1800 });
    })
    .catch((err) => console.log(err))
}

const updateTodo = (todoId, text, setText, setTodo, setIsUpdating, cancelUpdate) => {
    axios
    .post(`${baseUrl}/update`, {_id: todoId, text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllTodo(setTodo)
        toast.success("Todo Successfully Updated!", { autoClose: 1800 });  
    })
    .catch((err) => console.log(err))
}

const deleteTodo = (_id, setTodo) => {
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        console.log(data)
        getAllTodo(setTodo)
        toast.success("Todo Successfully Deleted!", { autoClose: 1800 });
    })
    .catch((err) => console.log(err))
}

export {getAllTodo, addTodo, updateTodo, deleteTodo}