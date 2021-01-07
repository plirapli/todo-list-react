import React, {useState} from "react";

function Todo({text, todo, todos, setTodos, completed}) {
    const [edit, setEdit] = useState(false)
    const [editingText, setEditingText] = useState(text)
    const colors = ["light-blue", "pink", "green", "yellow", "red", "dark", "white"]

    const editTextHandler = (e) => {
        setEditingText(e.target.textContent)
    }
    
    const checkBtn = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    const editBtn = () => { setEdit(edited => !edited) }

    const changeColorHandler = (e) => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {...item, color: e.target.dataset.color}
            }
            return item
        }))
    }

    const saveBtn = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {...item, text: editingText}
            }
            return item
        }))
        setEdit(edited => !edited)
    }

    return(
        <div  
            className={`card-body-wrapper`}>
            <div className={`card-body`}>
                <div
                    onInput={editTextHandler}
                    contentEditable={edit} 
                    className={`content textTodo ${completed ? "completed" : ""} ${edit ? "edit-mode" : ""}`}>
                        {text}
                </div>
                <button 
                    onClick={checkBtn} 
                    className={`btn btn-check ${completed ? 'show' : ''}`}>
                        <i className="todo-icon-check"></i>
                </button>    
            </div>
            <div className="card-footer">
                <button onClick={editBtn} className={`btn btn-footer btn-edit ${edit ? 'hide' : ''}`}>
                    <i className="todo-icon-edit-2"></i>
                </button>
                <button onClick={saveBtn} className={`btn btn-footer btn-save ${edit ? 'show' : ''}`}>
                    <i className="todo-icon-save"></i>
                </button>
                <div className="btn-color-wrapper">
                    {colors.map(col => (
                        <button 
                            data-color={col} 
                            onClick={changeColorHandler} 
                            className={`btn btn-footer btn-color ${edit ? 'show' : ''} ${col}`}>
                                <i className={`todo-icon-${col === todo.color ? "check" : ""}`}></i>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Todo;