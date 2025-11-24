import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

const MovieCard = ({ movie }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Details', { movie });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.genre}>{movie.genre} • {movie.year}</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;