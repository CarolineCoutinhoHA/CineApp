import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovies deve ser usado dentro de MovieProvider');
  }
  return context;
};

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  const addFavorite = (movie) => {
    setFavorites(prev => {
      const exists = prev.find(fav => fav.id === movie.id);
      if (exists) return prev;
      return [...prev, { ...movie, isFavorite: true }];
    });
  };

  const removeFavorite = (movieId) => {
    setFavorites(prev => prev.filter(fav => fav.id !== movieId));
  };

  const addWatched = (movie) => {
    setWatchedMovies(prev => {
      const exists = prev.find(watched => watched.id === movie.id);
      if (exists) return prev;
      return [...prev, { ...movie, isWatched: true }];
    });
  };

  const removeWatched = (movieId) => {
    setWatchedMovies(prev => prev.filter(watched => watched.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some(fav => fav.id === movieId);
  };

  const isWatched = (movieId) => {
    return watchedMovies.some(watched => watched.id === movieId);
  };

  const value = {
    movies,
    setMovies,
    favorites,
    watchedMovies,
    addFavorite,
    removeFavorite,
    addWatched,
    removeWatched,
    isFavorite,
    isWatched
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};