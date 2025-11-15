import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navItems, setNavItems] = useState([]);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Fetch navigation from Strapi
    const fetchNavigation = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/navigations?populate=*"
        );
        const data = await response.json();
        // Sort by "order" if needed
        const sortedNav = data.data.sort(
          (a, b) => a.attributes?.order - b.attributes?.order
        );
        setNavItems(sortedNav);
      } catch (error) {
        console.error("Failed to fetch navigation:", error);
      }
    };

    fetchNavigation();
  }, []);

  return (
    <nav className="navbar">
      <div className="container py-2 flex justify-between items-center">
        <a href="/">
          <img
            className="mt-1.5"
            width="150px"
            src="http://localhost:1337/uploads/unelma_logo_3_541f1d8e95.png"
            alt="Logo"
          />
        </a>

        {/* Hamburger Button */}
        <button
          className="hamburger md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div
            className={`bar ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></div>
          <div className={`bar ${isOpen ? "opacity-0" : ""}`}></div>
          <div
            className={`bar ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></div>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links text-xl ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item?.slug}
                end={item?.slug === "/"} // only Home uses 'end'
                onClick={() => setIsOpen(false)}
              >
                {item?.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <hr />
    </nav>
  );
}

export default Navbar;
