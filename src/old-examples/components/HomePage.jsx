import { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext";

export default function HomePage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1>Home</h1>
      {user.isAuth ? <p>Welcome back, {user.name}</p> : <p>Pls Log in.</p>}
    </>
  );
}
