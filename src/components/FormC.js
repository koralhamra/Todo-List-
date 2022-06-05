import React from "react";

const FormC = ({ setInputText, todos, setTodos, inputText }) => {
  //Here I can write javascript code and function
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  };
    return (
        <formC>
        <input 
        value={inputText}
        onChange={inputTextHandler} type="text" />
          <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          >
            clear list
        </button>
      </formC>
    );
};
export default FormC;