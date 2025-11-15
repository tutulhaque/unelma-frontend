import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const jwt = urlParams.get("jwt");

    if (jwt) {
      localStorage.setItem("jwt", jwt);
      navigate("/"); // redirect to homepage
    } else {
      console.error("Google login failed");
    }
  }, [navigate]);

  return <p className="text-center mt-20">Logging in with Google...</p>;
};

export default GoogleCallback;
