// pages/Movie.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://localhost:4000/movies/${id}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {movie ? (
          <>
            <h1>{movie.title}</h1>
            <p>Time: {movie.time} minutes</p>
            <div>
              Genres:{" "}
              {movie.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
};

export default Movie;
