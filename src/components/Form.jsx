import React, {useState} from 'react'
import style from './form.module.css'

export const Form = ({todos, setTodos}) => {
    const [todo, setTodo] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
    }

    return (
        <div>
            <form className={style.todoform} onSubmit={(e) => handleSubmit(e)}>
                <div className={style.inputContainer}>
                    <input placeholder={'Enter todo name'} className={style.modernInput}
                           onChange={(e) => setTodo(e.target.value)}
                           value={todo} type="text"/>
                    <button className={style.modernButton} type={'submit'}>Submit</button>
                </div>
            </form>
        </div>
    )
}
