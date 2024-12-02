import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import RowPost from "../../components/RowPost/RowPost";
import {
  air_today_series,
  on_air_series,
  popular_movies,
  popular_series,
  upcoming_movies,
} from "../../constants/constants";
import Footer from "../../components/Footer/Footer";

function NewPopular() {
  return (
    <div>
      <Navbar />
      <div style={{ height: "90px" }}></div>
      <RowPost title="Arriving Recently" category={air_today_series} />
      <RowPost title="Top 10 Movies" category={popular_movies} range={10} />
      <RowPost title="Top 10 Series" category={popular_series} range={10} />
      <RowPost title="Upcoming Movies" category={upcoming_movies} />
      <RowPost title="Comming Next Week" category={on_air_series} />
      <Footer />
    </div>
  );
}

export default NewPopular;
