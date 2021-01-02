import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return(
            <ul>
                {filteredTodos.map(todo => (
                    <Todo 
                        todo={todo} 
                        title={todo.title}
                        text={todo.text} 
                        key={todo.id} 
                        completed={todo.completed}
                        todos={todos} 
                        setTodos={setTodos}
                        color={todo.color}
                    />
                ))}
            </ul>
    );
}

export default TodoList;