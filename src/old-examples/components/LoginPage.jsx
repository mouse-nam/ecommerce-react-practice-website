import { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext";

export default function LoginPage() {
  const [name, setName] = useState("");
  const { user, login } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    login(name);
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

      {user.isAuth && <p>Wellcome {user.name}</p>}
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
