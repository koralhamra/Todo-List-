import React, { useState } from "react";
import './App.css';
//Importing COmponents
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import FormC from "./components/FormC";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState ([]);
  return (
    <div className="app">
      <header>
        <h1>Todo App</h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos} />
      <FormC />
    </div>
  );
}

export default App