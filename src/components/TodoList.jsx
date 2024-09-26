import React from 'react'
import {TodoItem} from "./TodoItem.jsx";
import styles from './todolist.module.css'


export const TodoList = ({todos, setTodos}) => {

    const sortedTodos = todos.slice().sort((a,b)=>Number(a.done) - Number(b.done))

    return (
        <div className={styles.list}>
            {sortedTodos.map((item) => (
                <TodoItem todos={todos} setTodos={setTodos} key={Math.random()} item={item}/>
            ))}
        </div>
    )
}
