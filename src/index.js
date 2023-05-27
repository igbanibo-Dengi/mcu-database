import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/pages/About';
import MovieDetails from './components/pages/MovieDetails';
import { moviesdata } from './components/Moviesdata';
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
    path: '/movies/:chronology',
    element: <MovieDetails movies={moviesdata} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
