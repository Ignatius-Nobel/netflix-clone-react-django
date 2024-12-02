import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import netflix_bg from "../../assets/netflix_bg.jpg";
import netflix_logo from "../../assets/netflix_logo.png";


export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        formData
      );
      console.log("Success!", response.data);
      setSuccessMessage("Login Successful!");
      localStorage.setItem("accessToken", response.data.tokens.access);
      localStorage.setItem("refreshToken", response.data.tokens.refresh);
      navigate("/");
    } catch (error) {
      console.log("Error during Login!", error.response?.data);
      if (error.response && error.response.data) {
        Object.keys(error.response.data).forEach((field) => {
          const errorMessages = error.response.data[field];
          if (errorMessages && errorMessages.length > 0) {
            setError(errorMessages[0]);
          }
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${netflix_bg})`, backgroundSize: "cover" }}
    >
      <div className="background"></div>
      {/* <Navbar /> */}
      <div>
        <div className="login">
            {error && <p style={{ color: "red" }}>{error}</p>}
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            <h2>Login</h2>
            <form>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              ></input>{" "}
              <br />
              <br />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              ></input>{" "}
              <br />
              <br />
              <button type="submit" disabled={isLoading} onClick={handleSubmit}>
                Login
              </button>
            </form>
            <div>
              Dont have an account? &nbsp;
              <Link className="signup-button" to="/register">
                Signup
              </Link>
            </div>
      </div>
      </div>
    </div>
  );
}
