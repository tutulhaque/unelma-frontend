import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const API_URL = "http://localhost:1337/api/auth/local/register";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("jwt", data.jwt);
        setMessage("Registration successful!");
        navigate("/"); // redirect to homepage
      } else {
        setMessage(data.error?.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage("Network error.");
    }
  };

  // Google login
  const handleGoogleLogin = () => {
    const googleUrl = `http://localhost:1337/api/connect/google?redirect_uri=http://localhost:5173/google-callback`;
    window.location.href = googleUrl;
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">Register</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        />

        <button
          type="submit"
          className="w-full bg-[#3780B2] text-white py-2 rounded-lg"
        >
          Register
        </button>
      </form>

      <button
        onClick={handleGoogleLogin}
        className="w-full mt-2 bg-red-500 text-white py-2 rounded-lg flex justify-center items-center gap-2"
      >
        Continue with Google
      </button>

      <p className="text-center text-sm text-gray-600 mt-2">{message}</p>
    </div>
  );
};

export default Register;
