import React, {useState} from "react";
import TodoText from "./TodoText";
import { motion } from "framer-motion";

function Todo({title, text, todo, todos, setTodos, completed, color}) {
    const [max, setMax] = useState(false)
    
    const resizeBtn = () => setMax(!max)
    const deleteBtn = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

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
            <div className={`top-bar ${color}`}>
                <div onClick={resizeBtn} className="title">
                    <h3 className={`textTodo ${completed ? "completed" : ""} ${max ? "max" : ""}`}>{title}</h3>
                    <i className={`todo-chevron-${max ? 'up' : 'down'}`}></i>
                </div>
                <button onClick={deleteBtn} className="btn-del">&#10005;</button>    
            </div>

            {/* Teks akan muncul ketika di expand */}
            {max && <TodoText text={text} key={todo.id} todo={todo} todos={todos} setTodos={setTodos} completed={completed} color={color} />}
        </motion.li>
    );
}

export default Todo;