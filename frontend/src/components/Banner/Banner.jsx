import "./Banner.css";
import { useState, useEffect } from "react";
import axios from "../../axios";
import { imgUrl } from "../../constants/constants";

function Banner({ theme }) {
  const [banner, setBanner] = useState();
  useEffect(() => {
    axios.get(theme).then((response) => {
      console.log(response.data.results[2]);
      setBanner(response.data.results[2]);
    });
  }, []);
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${banner && imgUrl + banner.backdrop_path})`,
      }}
    >
      <div className="banner">
        <h1>
          {banner && (banner.title ? banner.title : banner.original_name)}
        </h1>
        <div className="banner-buttons">
          <button className="btn">Play</button>
          <button className="btn">My list</button>
        </div>
        <p>{banner && banner.overview.slice(0, 200)}</p>
      </div>
    </div>
  );
}

export default Banner;
