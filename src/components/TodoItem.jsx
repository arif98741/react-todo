import React from 'react'
import styles from './todoitem.module.css'

export const TodoItem = ({item,todos, setTodos}) => {
    
    function handleDelete(item)
    {
        setTodos(todos.filter((todo)=> item != todo) )
        console.log(`Deleted button clicked`,todos);
        
    }
    return (
        
        <div className={styles.item}>
            <div className={styles.itemName}>{item.name} <span>
                <button onClick={(e)=>handleDelete(item)} className={ styles.deleteButton }>x</button></span>
                </div>
            
            <hr className={styles.line}/>
        </div>
    )
}
