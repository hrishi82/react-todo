import React from "react";

// Alternate Way to pass "props" :
// const Form = (props) => {
//   const submitTodoHandler = e => {
//     e.preventDefault();
//     props.setTodos([
//       ...props.todos,
//       { text: props.inputText, completed: false }
//     ]);
// };

// Alternate way to do submitTodoHandler:
// const submitTodoHandler = e => {
//   let todoNote = {
//     text: inputText,
//     completed: false,
//   };

//   let newTodos = [...todos];
//   newTodos.push(todoNote);
//   setTodos(newTodos);
// };

const Form = ({ setInputText, todos, inputText, setTodos }) => {
  const inputTextHandler = e => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = e => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
