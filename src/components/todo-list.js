import React from 'react';

import TodoListItem from './todo-list-item';
import '../styles/todo-list.css';

const ToDoList = ({data, onDeleted, onToggleImportant, onToggleDone}) => {

    const elements = data.map((item) => {
        return (
            <li key={item.id} className='list-group-item pl-3'>
                <TodoListItem 
                    {... item}
                    onDeleted={() => onDeleted(item.id)} 
                    onToggleImportant={() => onToggleImportant(item.id)}
                    onToggleDone={() => onToggleDone(item.id)}/>
            </li>
        )
    })
    return (
        <ul className='list-group todo-list mt-3'>
           { elements }
        </ul>
    )
}
export default ToDoList;