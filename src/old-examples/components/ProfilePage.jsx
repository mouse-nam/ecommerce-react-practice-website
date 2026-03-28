import { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1>Profile</h1>
      <p>Name: [Pull form context] {user.name}</p>
    </>
  );
}
