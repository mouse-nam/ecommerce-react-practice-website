import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import Navbar from "./components/NavBar";
import { AuthContext } from "../AuthContext";

function App() {
  const [user, setUser] = useState({ name: "", isAuth: false });

  function login(name) {
    setUser({ name: name, isAuth: true });
  }

  function logout() {
    setUser({ name: "", isAuth: false });
  }

  return (
    <div>
      <h3>Global State management with useContextHook</h3>
      <AuthContext.Provider value={{ user, login, logout }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* <Route path="*" element={<FallbackPage />} /> */}
        </Routes>

        <p>Footer</p>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
