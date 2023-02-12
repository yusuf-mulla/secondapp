import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export const ToDo1 = () => {
  const [text, setText] = useState("");
  const [toDo, setToDo] = useState([]);

  const handleAddTask = () => {
    if (!text.trim()) return;
    setToDo([...toDo, text]);
    setText("");
  };

  return (
    <div>
      <h1>to do list</h1>
      <TextField
        placeholder="To Do list"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        variant="contained"
        color="success"
        onClick={() => handleAddTask()}
      >
        Add Task
      </Button>

      <ol>
        {toDo.map((item, index) => {
          return <li>{item} </li>;
        })}
      </ol>
    </div>
  );
};
