import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  //   const { user, logout } = useAuth();

  return (
    <header
      style={{
        padding: "1rem 1.5rem",
        marginBottom: "1rem",
        borderBottom: "1px solid #ffff56",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <nav
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="profile">Profile</Link>
      </nav>

      <div>
        <Link to="login">login</Link>
      </div>
    </header>
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/profile" className="navbar-link">
            Profile
          </Link>
        </div>
        <div className="navbar-auth">
          {/* {!user ? ( */}
          <div className="navbar-auth-links">
            <Link to="/auth" className="btn btn-secondary">
              Login
            </Link>
            <Link to="/auth" className="btn btn-primary">
              Signup
            </Link>
          </div>
          {/* ) : (
            <div className="navbar-user">
              <span className="navbar-greeting">Hello, {user.email}</span>
              <button className="btn btn-secondary" onClick={logout}>
                Logout
              </button>
            </div>
          )} */}
        </div>
      </div>
    </nav>
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          ShopHub
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/checkout" className="navbar-link">
            Cart
          </Link>
        </div>
        <div className="navbar-auth">
          {!user ? (
            <div className="navbar-auth-links">
              <Link to="/auth" className="btn btn-secondary">
                Login
              </Link>
              <Link to="/auth" className="btn btn-primary">
                Signup
              </Link>
            </div>
          ) : (
            <div className="navbar-user">
              <span className="navbar-greeting">Hello, {user.email}</span>
              <button className="btn btn-secondary" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
