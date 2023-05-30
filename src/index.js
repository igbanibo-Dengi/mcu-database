import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/pages/About';
import MovieDetails from './components/pages/MovieDetails';
import { moviesdata } from './components/Moviesdata';
import SeriesDetails from './components/pages/SeriesDetails';
import { seriesdata } from './components/Seriesdata';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/moviespage/:chronology',
    element: <MovieDetails movies={moviesdata} />,
  },
  {
    path: '/seriespage/:id',
    element: <SeriesDetails series={seriesdata} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
