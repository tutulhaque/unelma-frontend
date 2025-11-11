import { Link, NavLink, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import "./css/Navbar.css";
import logo from "../assets/images/unelma-logo-removebg-preview.png";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [showCart, setShowCart] = useState(false);

  const isSingleProductPage =
    location.pathname.startsWith("/product/") && location.pathname !== "/product";
  const linkColorClass = isSingleProductPage ? "text-black" : "text-white";

  const toggleCart = () => setShowCart((prev) => !prev);

  return (
    <nav
      className={`navbar ${isSingleProductPage ? "bg-white" : "bg-transparent"}`}
    >
      <div className="container flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/">
          <img className="mt-1.5" width="150px" src={logo} alt="Logo" />
        </Link>

        {/* Links */}
        <ul className="nav-links flex gap-6 items-center">
          {["/", "/product", "/about", "/blog", "/contact"].map((path, index) => {
            const label = ["Home", "Product", "About", "Blog", "Contact"][index];
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `${linkColorClass} ${isActive ? "font-semibold underline" : ""}`
                  }
                  style={{
                    color: isSingleProductPage ? "black" : "white",
                  }}
                >
                  {label}
                </NavLink>
              </li>
            );
          })}

          {/* 🛒 Cart Icon */}
          <li className="relative cursor-pointer" onClick={toggleCart}>
            <ShoppingCart
              className={`w-6 h-6 ${isSingleProductPage ? "text-black" : "text-white"
                } hover:scale-110 transition-transform`}
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </li>
        </ul>

        {/* 🧺 Cart Popup */}
        {showCart && (
          <div className="absolute right-0 top-12 bg-white shadow-2xl rounded-xl w-80 p-4 z-50">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Your Cart</h3>
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-sm">Your cart is empty.</p>
            ) : (
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-2"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 px-3">
                      <p className="text-sm font-medium text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-500">${item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
            {cartItems.length > 0 && (
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={clearCart}
                  className="text-sm text-gray-500 hover:text-red-500"
                >
                  Clear All
                </button>
                <Link
                  to="/checkout"
                  className="bg-[#008081] text-white px-4 py-1.5 rounded-lg text-sm hover:bg-[#006666]"
                >
                  Checkout →
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;


