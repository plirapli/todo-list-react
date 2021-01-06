import React, {useState, useEffect} from 'react';
import "./todo-icon/style.css";
import "./index.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputTitle, setInputTitle] = useState("")
  const [inputText, setInputText] = useState("")
  const [todos, setTodosState] = useState([])
  const [todoType, setTodoType] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  const [cardColor, setCardColor] = useState("white")

  const getTodosFromLocalStorage = () => {
    const savedTodos = localStorage.getItem('todo_lists')

    if (savedTodos) {
      try {
        const parse = JSON.parse(savedTodos)
        setTodosState(parse)
      } catch (error) {
        alert("Error while trying to read localStorage")
      }
    }
  }

  const setTodos = (allItem) => {
    setTodosState(allItem)
    localStorage.setItem('todo_lists', JSON.stringify(allItem))
  }

  const filterHandler = () => {
    switch (todoType) {
      case "completed":
        setFilteredTodos(todos.filter(todo => (todo.completed)))
        break;
      case "uncomplete":
        setFilteredTodos(todos.filter(todo => (!todo.completed)))
        break;
      default:
        setFilteredTodos(todos);
        break;
    } 
  }

  useEffect(() => {
    getTodosFromLocalStorage()
  }, [])

  useEffect(() => {
    filterHandler()
  }, [todos, todoType])

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Form 
          inputTitle={inputTitle} setInputTitle={setInputTitle}
          inputText={inputText} setInputText={setInputText} 
          todos={todos} setTodos={setTodos} 
          cardColor={cardColor} setCardColor={setCardColor} />
        <TodoList 
          setTodoType={setTodoType} todoType={todoType}
          todos={todos} setTodos={setTodos} 
          filteredTodos={filteredTodos} 
        />
      </div>
    </div>
  );
}

export default App;
