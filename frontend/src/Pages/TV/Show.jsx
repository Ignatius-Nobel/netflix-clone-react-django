import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import {
  popular_series,
  trending_series,
  top_rated_series,
  action_series,
  comedy_movies,
  crime_series,
} from "../../constants/constants";
import RowPost from "../../components/RowPost/RowPost";
import Footer from "../../components/Footer/Footer";

function Show() {
  return (
    <div>
      <Navbar />
      <Banner theme={popular_series} />
      <RowPost title="Trending Today" category={trending_series} />
      <RowPost title="Highest Rated" category={top_rated_series} />
      <RowPost title="Action" category={action_series} />
      <RowPost title="Crime" category={crime_series} />
      <RowPost title="Comedy" category={comedy_movies} />
      <Footer />
    </div>
  );
}

export default Show;
