import React from 'react'
import styles from './todoitem.module.css'

export const TodoItem = ({item, todos, setTodos}) => {

    function handleDelete(item) {
        let filteredTodos = todos.filter((todo) => item !== todo); //filtering todos to remove selected one
        setTodos(filteredTodos)
    }

    function handClick(name) {
        const newTodos = todos.map((todo) =>
            todo.name === name ? {...todo, done: !todo.done} : todo
        )
        setTodos(newTodos)
    }

    const completedClassName = item.done ? styles.completed : "";

    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span className={completedClassName} onClick={(e) => handClick(item.name)}>{item.name}</span>
                <span>
                <button onClick={(e) => handleDelete(item)} className={styles.deleteButton}>x</button></span>
            </div>

            <hr className={styles.line}/>
        </div>
    )
}
