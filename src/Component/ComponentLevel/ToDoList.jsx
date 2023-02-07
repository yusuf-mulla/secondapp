import React, { useState } from "react";

export const ToDoList = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("enter value");
    }

    const item = {
      // id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deletItem(id) {
    const newArray = items.map((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="ToDoList">
      <h1>To Do List </h1>
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}
              <button
                className="delete-button"
                onClick={() => deletItem(item.id)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
