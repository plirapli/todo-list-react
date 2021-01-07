import React, {useState} from "react";
import TodoText from "./TodoText";
import { motion } from "framer-motion";

function Todo({title, text, todo, todos, setTodos, completed, color}) {
    const [max, setMax] = useState(false)
    const [edit, setEdit] = useState(false)
    const [editText, setEditText] = useState(title)
    
    const resizeBtn = () => edit ? setMax(max) : setMax(max => !max)
    const deleteBtn = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const editBtn = () => { setEdit(edited => !edited) }
    
    const saveHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {...item, title: editText}
            }
            return item
        }))

        setEdit(edited => !edited)
    }

    const editHandler = (e) => { setEditText(e.target.textContent) }

    const variantList = {
        hidden: {
            y: -100, opacity: 0
        },
        animation: {
            y:0, opacity: 1
        }
    }

    return(
        <motion.li 
            className={`shadow ${color}`} 
            variants={variantList}
            animate="animation"
            initial="hidden"
        >
            <div className={`top-bar`}>
                <button onClick={editBtn} className={`title-edit btn ${edit ? "hide" : ""}`}>
                    <i className="todo-icon-edit-2"></i>
                </button>
                <button onClick={saveHandler} className={`title-save btn ${edit ? "" : "hide"} `}>
                    <i className="todo-icon-save"></i>
                </button>
                <div onClick={resizeBtn} className={`title ${edit ? "edit-mode" : ""}`}>
                    <h3 onInput={editHandler}
                        contentEditable={edit} 
                        className={`textTodo ${completed ? "completed" : ""} ${max ? "max" : ""} ${edit ? "edit-mode" : ""}`}>
                        {title}
                    </h3>
                    <i className={`todo-icon-chevron-${max ? 'up' : 'down'}`}></i>
                </div>
                <button onClick={deleteBtn} className="btn btn-del"><i className="todo-icon-x"></i></button>    
            </div>

            {/* Teks akan muncul ketika di expand */}
            {max && <TodoText text={text} key={todo.id} todo={todo} todos={todos} setTodos={setTodos} completed={completed} color={color} />}
        </motion.li>
    );
}

export default Todo;