// components/MovieCard.js
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ title, id }) => (
  <div>
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
  </div>
);

export default MovieCard;
