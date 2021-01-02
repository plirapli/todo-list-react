import React, { useState } from "react";

const Header = ({todoType, setTodoType}) => {
    const [types] = useState(["all", "completed", "uncomplete"])

    const typeHandler = (e) => {
        const type = e.target.textContent
        setTodoType(type)
    }
    return(
        <header>
            <h1>Todo List</h1>
            <div className="category">
                {types.map(type => (
                    <div onClick={typeHandler} className={`option shadow ${todoType === type ? 'active' : ''}`}>{type}</div>
                ))}
            </div>
        </header>
    )
}

export default Header;