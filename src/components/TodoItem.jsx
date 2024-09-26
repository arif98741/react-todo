import React from 'react'
import styles from './todoitem.module.css'

export const TodoItem = ({item,todos, setTodos}) => {
    
    function handleDelete(item)
    {
        console.log(`Deleted ${item}`);
        setTodos(todos.filter((todo)=> item != todo) )
        
    }
    return (
        
        <div className={styles.item}>
            <div className={styles.itemName}>{item} <span>
                <button onClick={(e)=>handleDelete(item)} className={ styles.deleteButton }>x</button></span>
                </div>
            
            <hr className={styles.line}/>
        </div>
    )
}
