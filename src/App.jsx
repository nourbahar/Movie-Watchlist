

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// src/App.jsx
import './App.css';

const App = () => {
  const movie = [
    { name: 'Wonderland', watched: true },
    { name: 'Self', watched: false },
    { name: 'Lift', watched: true },
    { name: 'Mother', watched: false },
    { name: 'After', watched: true },
  ];

  return (
    <>
      <h1>Movie Watchlist</h1>
      <ul>
        {movie.map((movie, index) => (
          <li key={index} className={movie.watched ? 'watched' : 'not-watched'}>
            {movie.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;