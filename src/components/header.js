import "../style.css";
import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li className="Logo">
              <Link to="/">Seller Express logo</Link>
            </li>
            <li className="log-in">
              <Link to="/login">
                <strong>Log in</strong>
              </Link>
            </li>
            <li>
              <div>
                <button className="sign-up-button">
                  <strong>Sign up!</strong>
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
