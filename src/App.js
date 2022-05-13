import React from "react";

//components
import HomePage from "./components/homepage";
import Login from "./components/login";
// import Randomquotes from "./components/fcc/randomquotes";
// routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      

      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/quotes" element={<Randomquotes />}></Route> */}
      </Routes>
    </Router>
  );
}

// dummies
export function About() {
  return <h2>About</h2>;
}

// export function Login() {
//   return <h2>Login</h2>;
// }
