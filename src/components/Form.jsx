import React, {useState} from 'react'
import styles from './form.module.css'

export const Form = ({todos, setTodos}) => {
    const [todo, setTodo] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);

        
        console.log(`Added ${todo}`);
        
        setTodo("");
    }

    return (
        <div>
            <form className={styles.todoform} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.inputContainer}>
                    <input placeholder={'Enter todo name'} className={styles.modernInput}
                           onChange={(e) => setTodo(e.target.value)}
                           value={todo} type="text"/>
                    <button className={styles.modernButton} type={'submit'}>Add</button>
                </div>
            </form>
            <p className={styles.totalTask}>Total Task: <strong>{todos.length}</strong></p>
        </div>
    )
}
