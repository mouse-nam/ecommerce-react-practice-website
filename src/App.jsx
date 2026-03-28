import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import { Route, Routes } from "react-router-dom";

function HomePage() {
  return <h1>HomePage</h1>;
}

function AboutPage() {
  return <h1>AboutPage</h1>;
}

function FallbackPage() {
  return <h1>404: Nothing Found</h1>;
}

function App() {
  return (
    <div>
      <h3>Routing</h3>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<FallbackPage />} />
      </Routes>
    </div>
  );
}

export default App;
