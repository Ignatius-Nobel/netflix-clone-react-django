import "./RowPost.css";
import axios from "../../axios";
import { useEffect, useRef, useState } from "react";
import { imgUrl } from "../../constants/constants";

function RowPost({ title, category, range = 20 }) {
  const cardsRef = useRef();
  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };
  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  const [poster, setPoster] = useState();
  useEffect(() => {
    axios.get(category).then((response) => {
      // console.log(response.data.results);
      setPoster(response.data.results);
    });
  }, []);

  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="posters" ref={cardsRef}>
        {poster &&
          poster.slice(0, range).map((post, index) => (
            <div key={index}>
              <div
                className="post"
                style={{
                  backgroundImage: `url(${imgUrl + post.backdrop_path})`,
                }}
              >
                <h4>{post.title ? post.title : post.original_name}</h4>
                <div>{post.overview ? post.overview.slice(0, 120) : ""}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RowPost;
