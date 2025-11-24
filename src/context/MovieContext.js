import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from './AuthContext';

const MovieContext = createContext();

export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovies deve ser usado dentro de MovieProvider');
  }
  return context;
};

export const MovieProvider = ({ children }) => {
  const { user, isLoggedIn } = useAuth();
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn && user) {
      loadMovieData(user.id);
    } else {
      setFavorites([]);
      setWatchedMovies([]);
      setIsLoading(false);
    }
  }, [isLoggedIn, user]);

  const loadMovieData = async (userId) => {
    if (!userId) {
      setIsLoading(false);
      return;
    }
    
    try {
      const favs = await AsyncStorage.getItem(`favorites_${userId}`);
      const watched = await AsyncStorage.getItem(`watchedMovies_${userId}`);
      
      if (favs) {
        setFavorites(JSON.parse(favs));
      } else {
        setFavorites([]);
      }
      if (watched) {
        setWatchedMovies(JSON.parse(watched));
      } else {
        setWatchedMovies([]);
      }
    } catch (error) {
      console.error('Erro ao carregar dados dos filmes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveFavorites = async (favs, userId) => {
    if (!userId) return;
    try {
      await AsyncStorage.setItem(`favorites_${userId}`, JSON.stringify(favs));
    } catch (error) {
      console.error('Erro ao salvar favoritos:', error);
    }
  };

  const saveWatched = async (watched, userId) => {
    if (!userId) return;
    try {
      await AsyncStorage.setItem(`watchedMovies_${userId}`, JSON.stringify(watched));
    } catch (error) {
      console.error('Erro ao salvar assistidos:', error);
    }
  };

  const addFavorite = (movie) => {
    if (!user) return;
    setFavorites(prev => {
      const exists = prev.find(fav => fav.id === movie.id);
      if (exists) return prev;
      const newFavs = [...prev, { ...movie, isFavorite: true }];
      saveFavorites(newFavs, user.id);
      return newFavs;
    });
  };

  const removeFavorite = (movieId) => {
    if (!user) return;
    setFavorites(prev => {
      const newFavs = prev.filter(fav => fav.id !== movieId);
      saveFavorites(newFavs, user.id);
      return newFavs;
    });
  };

  const addWatched = (movie) => {
    if (!user) return;
    setWatchedMovies(prev => {
      const exists = prev.find(watched => watched.id === movie.id);
      if (exists) return prev;
      const newWatched = [...prev, { ...movie, isWatched: true }];
      saveWatched(newWatched, user.id);
      return newWatched;
    });
  };

  const removeWatched = (movieId) => {
    if (!user) return;
    setWatchedMovies(prev => {
      const newWatched = prev.filter(watched => watched.id !== movieId);
      saveWatched(newWatched, user.id);
      return newWatched;
    });
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
    isLoading,
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