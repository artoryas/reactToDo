import React from 'react';

const Header = ({todoCount, doneCount}) => {
    return(
        <div>
            <h1>Todo App</h1>
            <h5>{doneCount} дел было выполнено, осталось {todoCount}</h5>
        </div>
        
    )
}

export default Header;