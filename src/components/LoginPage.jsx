import { useState } from "react";

export default function LoginPage() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    alert(`Login - ${name}`);
  }

  function onSubmitClick() {
    alert("clicked");
  }

  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Name?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
        <button style={{ marginLeft: "0.5rem" }}>Log In</button>
      </form>
    </div>
  );

  return (
    <>
      <h1>Login</h1>
      <input type="text" placeholder="Name" />
      <button type="submit" onClick={onSubmitClick}>
        Login
      </button>
    </>
  );
}
