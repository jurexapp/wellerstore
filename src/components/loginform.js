import React from "react";
import "../login-signup.css";
function LoginForm() {
  return (
    <div className="form-div">
      <form className="loginform" id="createAccount">
        <h1 className="form-tittle">Create Account</h1>
        <div className="loginform-message loginform-message-error">
          Incorrect username / password combination.
        </div>
        <div className="loginform-input-group">
          <input
            type="text"
            className="loginform-input"
            autofocus
            placeholder="username"
          ></input>
          <div className="loginform-input-error-message">
            That input is incorrect
          </div>
        </div>
        <div className="loginform-input-group">
          <input
            type="text"
            className="loginform-input"
            autofocus
            placeholder="Email Address"
          ></input>
          <div className="loginform-input-error-message">
            That input is incorrect
          </div>
        </div>
        <div className="loginform-input-group">
          <input
            type="password"
            className="loginform-input loginform-input-error"
            autofocus
            placeholder="password"
          ></input>
          <div className="loginform-input-error-message">
            This is an incorrect password
          </div>
        </div>
        <div className="loginform-input-group">
          <input
            type="password"
            class="loginform-input loginform-input-error"
            autofocus
            placeholder="Confirm password"
          ></input>
          <div className="loginform-input-error-message">
            This is an incorrect password
          </div>
        </div>
        <button className="login-button" type="submit">
          Continue
        </button>

        <p className="loginform-text">
          <a href="#" className="form-link" id="linklogin">
            Already have an account? Log-in.
          </a>
        </p>
      </form>
      <form className="loginform form-hidden" id="login">
        <h1 className="form-tittle">Login</h1>
        <div className="loginform-message loginform-message-error">
          Incorrect username / password combination.
        </div>
        <div className="loginform-input-group">
          <input
            type="text"
            className="loginform-input"
            autofocus
            placeholder="username or email"
          ></input>
          <div className="loginform-input-error-message">
            That input is incorrect
          </div>
        </div>
        <div className="loginform-input-group">
          <input
            type="password"
            className="loginform-input loginform-input-error"
            autofocus
            placeholder="password"
          ></input>
          <div className="loginform-input-error-message">
            This is an incorrect password
          </div>
        </div>
        <button className="login-button" type="submit">
          Continue
        </button>
        <p className="loginform-text">
          <a href="#" className="form-link">
            Forgot your password?
          </a>
        </p>
        <p class="loginform-text">
          <a href="#" className="form-link" id="linkCreateAccount">
            Don't have an account? Create an account.
          </a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
