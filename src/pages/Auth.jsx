export default function Auth() {
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-input" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-input" id="password" />
            </div>
            <button className="btn btn-primary btn-large">Sign Up</button>
          </form>

          <div className="auth-switch">
            Already have a account?{" "}
            <span className="auth-link" onClick={() => console.log(login)}>
              Login.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
