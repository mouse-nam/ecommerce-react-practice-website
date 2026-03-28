import { useState } from "react";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handelSubmit(event) {
    event.preventDefault();
    alert(`Clicked by ${email} with pass: ${password}`);
  }

  return (
    <div
      style={{ maxWidth: 400, margin: "2rem auto", border: "1px solid red" }}
    >
      <h1>Sign Up</h1>

      <form onSubmit={handelSubmit}>
        <div>
          <label>
            Email :
            <input
              type="email"
              placeholder="example@email.com"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password :
            <input
              type="password"
              placeholder="****"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
