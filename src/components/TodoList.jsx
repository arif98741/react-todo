import React from 'react'
import {TodoItem} from "./TodoItem.jsx";
import styles from './todolist.module.css'


export const TodoList = ({todos,setTodos}) => {
    return (
        <div className={styles.list}>
            {todos.map((item) => (
                <TodoItem todos={todos} setTodos={setTodos} key={Math.random()} item={item}/>
            ))}
        </div>
    )
}
