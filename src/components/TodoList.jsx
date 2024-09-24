import React from 'react'
import {TodoItem} from "./TodoItem.jsx";
import styles from './todolist.module.css'


export const TodoList = ({todos}) => {
    return (
        <div className={styles.list}>
            {todos.map((item) => (
                <TodoItem key={Math.random()} item={item}/>
            ))}
        </div>
    )
}
