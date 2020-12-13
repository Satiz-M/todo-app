import React, { useState, useEffect, useRef } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleClickAdd = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput("");
  };

  return (
    <form className="todo" onSubmit={handleClickAdd}>
      {props.edit ? (
        <>
          <input
            className="todo-input"
            value={input}
            placeholder="Update your items"
            type="text"
            name="text"
            onChange={handleChangeInput}
            ref={inputRef}
          />
          <button className="todo-button">Update Todo</button>
        </>
      ) : (
        <>
          <input
            className="todo-input"
            value={input}
            placeholder="Enter your todos"
            type="text"
            name="text"
            onChange={handleChangeInput}
            ref={inputRef}
          />
          <button className="todo-button">Add Todo</button>
        </>
      )}
    </form>
  );
}
