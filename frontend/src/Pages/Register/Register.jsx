import { useState } from "react";
import axios from "axios";
import netflix_bg from "../../assets/netflix_bg.jpg";
import "../Login/Login.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        formData
      );
      console.log("Success!", response.data);
      setSuccessMessage("Registration Successful!");
    } catch (error) {
      console.log("Error during registration!", error.response?.data);
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
      <div className="login">
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <h2>Register</h2>
        <form>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
          ></input>{" "}
          <br />
          <br />
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
            name="password1"
            value={formData.password1}
            onChange={handleChange}
            placeholder="Password"
          ></input>{" "}
          <br />
          <br />
          <input
            type="password"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            placeholder="Confirm Password"
          ></input>{" "}
          <br />
          <br />
          <button type="submit" disabled={isLoading} onClick={handleSubmit}>
            Register
          </button>
        </form>
        <div>
          Already have an account? &nbsp;
          <Link className="signup-button" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
