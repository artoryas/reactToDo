import React from 'react';

import '../styles/todo-list-item.css';

const TodoListItem = ({ label, onDeleted, onToggleImportant, onToggleDone, important, done }) => {

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important';
        }
        return(
            <div className="d-flex justify-content-between">
            <span className={classNames} 
                onClick={ onToggleDone }>
                {label}
            </span>
            <div className="d-flex">
                <button className='btn btn-outline-success btn-sm mr-3'
                    onClick={onToggleImportant}>
                    <i className='fa fa-exclamation'></i>
                </button>
                <button className='btn btn-outline-danger btn-sm'
                        onClick={onDeleted}>
                    <i className='fa fa-trash-o'></i>
                </button>
            </div>
        </div>
        ) 
 
}

export default TodoListItem;