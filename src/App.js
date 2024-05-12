import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home.js";
import About from "./components/About/About.js";

function App() {
  // var display=document.getElementsByClassName("account");
  // display.classList.toggle("show");
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="link">
          <h1>ELECTROSTORE</h1>
        </Link>
        <ion-icon className="account" name="person-circle-outline"></ion-icon>
        <div className="dropdown">
          <Link className="link">Profile</Link>
          <Link className="link">Orders</Link>
          <Link className="link">Cart</Link>
          <Link className="link">Login</Link>
          <Link className="link">Signup</Link>
        </div>
      </nav>

      <Routes>
        <Route exact path="" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
