import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:4000/movies");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <MovieCard title={movie.title} id={movie.id} />
              <Link to={`/movie/${movie.id}`}>View Info</Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
