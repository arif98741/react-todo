import React, { useState } from 'react'
import styles from './form.module.css'

export const Form = ({ todos, setTodos }) => {
    //const [todo, setTodo] = useState("")
    const [todo, setTodo] = useState({
        name: "",
        done: false
    })

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);


        console.log(`Added ${todo.name}`);

        setTodo({
            name: "",
            done: false
        });
    }

    return (
        <div>
            <form className={styles.todoform} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.inputContainer}>
                    <input placeholder={'Enter todo name'} className={styles.modernInput}
                        onChange={(e) => setTodo({ name: e.target.value, done: false })}
                        value={todo.name} type="text" />
                    <button className={styles.modernButton} type={'submit'}>Add</button>
                </div>
            </form>
            <p className={styles.totalTask}>Total Task: <strong>{todos.length}</strong></p>
        </div>
    )
}
