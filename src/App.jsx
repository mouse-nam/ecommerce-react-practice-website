import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <div>
      <h3>Signup form example</h3>
      <SignUpForm />
    </div>
  );
}

export default App;
