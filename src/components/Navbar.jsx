import { Link, NavLink } from "react-router-dom";
import "./css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/">
          <img
            className="mt-1.5"
            width="150px"
            src="http://localhost:1337/uploads/unelma_logo_3_541f1d8e95.png"
            alt=""
          />
        </a>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <hr />
    </nav>
  );
}
export default Navbar;
