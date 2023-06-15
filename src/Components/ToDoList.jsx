import { useEffect, useState } from "react";
import "./todo.scss";

function ToDoList() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todo-items")) || []
  );
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todo-items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div id="app">
        <h1>My Todo 🗒️</h1>
        <div className="container">
          <form>
            <h2>Add Item</h2>
            <input
              type="text"
              id="title"
              placeholder="Title"
              className="form-control"
              autoComplete="off"
              onChange={(event) => setInput(event.target.value)}
              value={input}
            ></input>
            <button
              onClick={(event) => {
                if (!input) {
                  alert("cant add empty item");
                  return;
                }
                event.preventDefault();
                const newItems = [...items];
                newItems.push(input);
                setItems(newItems);
                setInput("");
              }}
            >
              Add
            </button>
            <button
              className="orange"
              onClick={() => {
                setItems([]);
              }}
            >
              {" "}
              Reset{" "}
            </button>
          </form>
          <div className="items">
            <h2>Items</h2>
            <ol>
              {items.map((item, index) => {
                return (
                  <li key={`item-${index}`}>
                    <h3>{item}</h3>
                    <button
                      className="delete"
                      onClick={() => {
                        const newItems = items.filter((item, indexItem) => {
                          return index !== indexItem;
                        });
                        setItems(newItems);
                      }}
                    ></button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
