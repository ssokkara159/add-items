import React from "react";
import { useState } from "react";

const App = () => {
  const [add, setAdd] = useState("");
  const [task, setTask] = useState([]);

  const handleOnChange = (e) => {
    e.preventDefault();

    setAdd(e.target.value);
  };
  const handleOnClick = () => {
    setTask([...task, add]);
    console.log(task);
  };
  return (
    <>
      <div>add</div>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <form onSubmit={handleOnChange}>
        <input
          type="text"
          placeholder="items..."
          value={add}
          onChange={handleOnChange}
        ></input>
        <button onClick={handleOnClick}>add</button>
        <div>
          list:
          {task.map((item) => {
            return <div> {item} </div>;
          })}
        </div>
      </form>
    </>
  );
};

export default App;
