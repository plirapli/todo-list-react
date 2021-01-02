import React, {useState} from "react";

function Todo({text, todo, todos, setTodos, completed}) {
    const [edit, setEdit] = useState(false)

    const [editText, setEditText] = useState(text)
    const [editingText, setEditingText] = useState(editText)
    // const [editedText, setEditedText] = useState('')
    
    

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

    const editBtn = () => {
        setEdit(edited => !edited)
    }

    const saveBtn = () => {
        setEditText(editingText)
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {...item, text: editText}
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
                        {editText}
                </div>
                <button 
                    onClick={checkBtn} 
                    className="btn btn-check">
                        <i className={completed ? "todo-check" : "not-checked"}></i>
                </button>    
            </div>
            <div className="card-footer">
                <button onClick={editBtn} className={`btn btn-edit ${edit ? 'hide' : ''}`}>Edit</button>
                <button onClick={saveBtn} className={`btn btn-save ${edit ? 'show' : ''}`}>Save</button>
                {/* <button onClick={backBtn} className={`btn btn-back ${edit ? 'show' : ''}`}>Back</button> */}
            </div>
        </div>
    );
}

export default Todo;