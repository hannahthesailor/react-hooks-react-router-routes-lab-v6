import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from '../pages/Home';
import Directors from '../pages/Directors';
import Actors from '../pages/Actors';
import Movie from '../pages/Movie';
import ErrorPage from './ErrorPage';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/directors" element={<Directors />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/error" element={<ErrorPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
