import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useMovies } from '../context/MovieContext';
import { fetchMovies } from '../api/apiService';
import MovieCard from '../components/MovieCard';

const HomeScreen = () => {
  const { movies, setMovies } = useMovies();
  const [loading, setLoading] = useState(true);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('Todos');
  const [searchText, setSearchText] = useState('');

  const genres = ['Todos', 'Ação', 'Drama', 'Animação', 'Comédia', 'Terror'];

  useEffect(() => {
    loadMovies();
  }, []);

  useEffect(() => {
    filterMovies();
  }, [movies, selectedGenre, searchText]);

  const loadMovies = async () => {
    try {
      setLoading(true);
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    } catch (error) {
      console.error('Erro ao carregar filmes:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterMovies = () => {
    let filtered = movies;

    // Filtro por gênero
    if (selectedGenre !== 'Todos') {
      filtered = filtered.filter(movie => movie.genre === selectedGenre);
    }

    // Filtro por texto de busca
    if (searchText.trim()) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredMovies(filtered);
  };

  const renderMovieCard = ({ item }) => <MovieCard movie={item} />;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFD700" />
        <Text style={styles.loadingText}>Carregando filmes...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Filmes</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar filmes..."
        placeholderTextColor="#CCCCCC"
        value={searchText}
        onChangeText={setSearchText}
      />

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filtrar por gênero:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedGenre}
            onValueChange={setSelectedGenre}
            style={styles.picker}
            dropdownIconColor="#FFFFFF"
          >
            {genres.map(genre => (
              <Picker.Item
                key={genre}
                label={genre}
                value={genre}
                color="#000000"
              />
            ))}
          </Picker>
        </View>
      </View>

      <FlatList
        data={filteredMovies}
        renderItem={renderMovieCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.moviesList}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchInput: {
    backgroundColor: '#16213E',
    color: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  filterContainer: {
    marginBottom: 16,
  },
  filterLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
  },
  pickerContainer: {
    backgroundColor: '#16213E',
    borderRadius: 8,
  },
  picker: {
    color: '#FFFFFF',
    backgroundColor: '#16213E',
  },
  moviesList: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A2E',
  },
  loadingText: {
    color: '#FFFFFF',
    marginTop: 10,
    fontSize: 16,
  },
});

export default HomeScreen;