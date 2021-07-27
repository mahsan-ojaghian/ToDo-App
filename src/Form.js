import React from "react";

function Form({ setInputText, setTodos, todos, inputText }) {
  //javascript codes
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
  };
  return (
    <React.Fragment>
      <form>
        <input type="text" className="input" onChange={inputTextHandler} />
        <button type="submit" onClick={submitTodoHandler}>
          Add
        </button>
        <div className="select">
          <select name="todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </React.Fragment>
  );
}
export default Form;
