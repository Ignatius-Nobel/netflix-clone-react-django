import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import {
  popular_movies,
  trending_movies,
  top_rated_movies,
  action_movies,
  upcoming_movies,
  horror_movies,
  comedy_movies,
} from "../../constants/constants";
import RowPost from "../../components/RowPost/RowPost";

import React from "react";
import Footer from "../../components/Footer/Footer";

function Movies() {
  return (
    <div>
      <Navbar />
      <Banner theme={popular_movies} />
      <RowPost title="Trending Today" category={trending_movies} />
      <RowPost title="Highest Rated" category={top_rated_movies} />
      <RowPost title="Action" category={action_movies} />
      <RowPost title="Horror" category={horror_movies} />
      <RowPost title="Comedy" category={comedy_movies} />
      <Footer />
    </div>
  );
}

export default Movies;
