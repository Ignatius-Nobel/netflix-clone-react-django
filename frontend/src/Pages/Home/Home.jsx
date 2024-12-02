import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../../components/Navbar/Navbar'
import { Navigate } from "react-router-dom";
import {
  popular_movies,
  top_rated_movies,
  top_rated_series,
  popular_series,
  trending_all,
  trending_movies,
  trending_series,
} from "../../constants/constants";
import RowPost from "../../components/RowPost/RowPost";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";

function Home() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (token) {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.get(
            "http://127.0.0.1:8000/api/user/",
            config
          );
          setLoggedIn(true);
          setUsername(response.data.username);
        } else {
          setLoggedIn(false);
          setUsername("");
        }
      } catch (err) {
        setLoggedIn(false);
        setUsername("");
        // console.log(err)
      }
    };
    checkLoggedInUser();
  }, []);

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (accessToken && refreshToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        await axios.post(
          "http://127.0.0.1:8000/api/logout/",
          { refresh: refreshToken },
          config
        );
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setLoggedIn(false);
        setUsername("");
        setShouldRedirect(true);
        console.log("Log out successful!");
      }
    } catch (error) {
      console.error("Failed to logout", error.response?.data || error.message);
    }
  };
  if (shouldRedirect) {
    return <Navigate to="/login" />;
  }

  return isLoggedIn ? (
    <div className="home">
      <Navbar logout={handleLogout}/>
      <Banner theme={trending_all} />
      <RowPost title="Trending Movies" category={trending_movies} />
      <RowPost title="Popular TV Shows" category={trending_series} />
      <RowPost title="Popular Movies" category={popular_movies} />
      <RowPost title="Top Rated Movies" category={top_rated_movies} />
      <RowPost title="Popular Shows" category={popular_series} />
      <RowPost title="Top Rated TV Shows" category={top_rated_series} />
      <Footer />
    </div>
  ) : (
    <div>Please Login</div>
  );
}

export default Home;
