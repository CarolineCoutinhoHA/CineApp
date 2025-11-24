import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { useMovies } from '../context/MovieContext';
import { useAuth } from '../context/AuthContext';
import CustomButton from '../components/CustomButton';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;
  const { isLoggedIn } = useAuth();
  const {
    addFavorite,
    removeFavorite,
    addWatched,
    removeWatched,
    isFavorite,
    isWatched,
  } = useMovies();

  const handleFavorite = () => {
    if (!isLoggedIn) {
      Alert.alert('Atenção', 'Faça login para adicionar aos favoritos');
      return;
    }

    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
      Alert.alert('Sucesso', 'Removido dos favoritos');
    } else {
      addFavorite(movie);
      Alert.alert('Sucesso', 'Adicionado aos favoritos');
    }
  };

  const handleWatched = () => {
    if (!isLoggedIn) {
      Alert.alert('Atenção', 'Faça login para marcar como assistido');
      return;
    }

    if (isWatched(movie.id)) {
      removeWatched(movie.id);
      Alert.alert('Sucesso', 'Removido da lista de assistidos');
    } else {
      addWatched(movie);
      Alert.alert('Sucesso', 'Marcado como assistido');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.genre}>{movie.genre}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>

        <Text style={styles.synopsisTitle}>Sinopse</Text>
        <Text style={styles.synopsis}>{movie.synopsis}</Text>

        <View style={styles.buttonsContainer}>
          <CustomButton
            title={isFavorite(movie.id) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            onPress={handleFavorite}
            variant={isFavorite(movie.id) ? 'secondary' : 'primary'}
          />

          <CustomButton
            title={isWatched(movie.id) ? 'Desmarcar como Assistido' : 'Marcar como Assistido'}
            onPress={handleWatched}
            variant={isWatched(movie.id) ? 'secondary' : 'primary'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A2E',
  },
  poster: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  genre: {
    fontSize: 18,
    color: '#FFD700',
    fontWeight: 'bold',
  },
  year: {
    fontSize: 18,
    color: '#CCCCCC',
  },
  synopsisTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  synopsis: {
    fontSize: 16,
    color: '#CCCCCC',
    lineHeight: 24,
    marginBottom: 30,
  },
  buttonsContainer: {
    gap: 10,
  },
});

export default DetailsScreen;