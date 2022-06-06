import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const clearList = () => {
    setTodos([]);
  };

  return (
    <div className="app">
      <header>
        <h1>Todo App</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList setTodos={setTodos} todos={todos} />
      <div className="clearListContainer">
        <button className="clearBtn" onClick={clearList}>
          Clear List
        </button>
      </div>
    </div>
  );
}

export default App;
