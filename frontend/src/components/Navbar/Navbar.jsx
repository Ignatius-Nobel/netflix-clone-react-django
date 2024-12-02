import "./Navbar.css";
import logo from "../../assets/netflix_logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.png";
import profile_img from "../../assets/netflix_profile.jpg";
import drop_down from "../../assets/drop_down.png";
import { Link } from "react-router-dom";

const Navbar = ({logout}) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <Link className="nav-link" to="/">
            <li>Home</li>
          </Link>
          <Link className="nav-link" to="/tv-series">
            <li>TV Shows</li>
          </Link>
          <Link className="nav-link" to="/movies">
            <li>Movies</li>
          </Link>
          <Link className="nav-link" to="/new-and-popular">
            <li>New & Popular</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="search-icon" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="bell-icon" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="profile-avatar" className="profile" />
          <img src={drop_down} style={{ width: "20px" }} alt="drop-down" />
          <div className="dropdown">
            <p onClick={logout}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
