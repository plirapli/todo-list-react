import React from "react";
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos, todoType, setTodoType}) => {
  const types = ["all", "completed", "uncomplete"]

  const typeHandler = (e) => {
		const type = e.target.textContent
		setTodoType(type)
  }
  
  return(
      <div className="todolist">
        <div className="category">
          {types.map(type => (
              <div onClick={typeHandler} className={`option shadow ${todoType === type ? 'active' : ''}`}>{type}</div>
          ))}
        </div>
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
      </div>
          
  );
}

export default TodoList;