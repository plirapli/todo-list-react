import React, {useState, useEffect} from "react";
import TodoText from "./TodoText";
import { motion } from "framer-motion";

function Todo({title, text, todo, todos, setTodos, completed, color}) {
    const [max, setMax] = useState(false)
    const [longTitle, setLongTitle] = useState('')
    
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

    useEffect(() => {
        if (title.length >= 32) {
            !max ? setLongTitle(`${title.slice(0, 27)}...`) : setLongTitle(title)
        } else {
            setLongTitle(title)
        }
    }, [max])

    return(
        <motion.li 
            className={`todo-list shadow ${color}`} 
            variants={variantList}
            animate="animation"
            initial="hidden"
        >
            <div className={`top-bar ${color}`}>
                <div onClick={resizeBtn} className="title">
                    <h3 className={`textTodo ${completed ? "completed" : ""}`}>{longTitle}</h3>
                    <i className={`todo-chevron-${max ? 'up' : 'down'}`}></i>
                </div>
                <button onClick={deleteBtn} className="btn-del">&#10005;</button>    
            </div>
            {max && <TodoText text={text} todo={todo} todos={todos} setTodos={setTodos} completed={completed} color={color} />}
        </motion.li>
    );
}

export default Todo;