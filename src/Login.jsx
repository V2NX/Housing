import './App.css';

function Login() {
    return (
        <>
        <div className="container">
    <h2>Login</h2>
    <form>
      <div className="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username"/>
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password"/>
      </div>
      <div className="form-group">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
        </>
    );
}
export default Login;