
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './components/ErrorPage';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/directors', element: <Directors /> },
  { path: '/actors', element: <Actors /> },
  { path: '/movie/:id', element: <Movie /> }, // Assuming you have a parameterized route for movies
  { path: '*', element: <ErrorPage /> }, // Fallback for unknown routes
];

export default routes;
