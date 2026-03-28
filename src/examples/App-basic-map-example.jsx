import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function TodoList() {
  const todos = [
    { id: 1, text: "yoo1" },
    { id: 2, text: "yoo2" },
    { id: 3, text: "yoo3" },
  ];

  return (
    <>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <div>
      <h1>TODO example</h1>
      <TodoList />
    </div>
  );
}

export default App;
