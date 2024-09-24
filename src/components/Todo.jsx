import React, {useState} from 'react'
import {Form} from "./Form.jsx";
import {TodoList} from "./TodoList.jsx";

const Todo = () => {
    const [todos, setTodos] = useState([])

    return (
        <div>
            <Form todos={todos} setTodos={setTodos}/>
            <TodoList todos={todos}/>
        </div>
    )
}
export default Todo
