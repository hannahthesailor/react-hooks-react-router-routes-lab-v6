import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Directors = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/directors");
        const data = await response.json();
        setDirectors(data);
      } catch (error) {
        console.error("Error fetching directors:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
