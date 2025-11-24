import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useMovies } from '../context/MovieContext';
import { useAuth } from '../context/AuthContext';
import MovieCard from '../components/MovieCard';

const MyListScreen = () => {
  const { favorites, watchedMovies } = useMovies();
  const { isLoggedIn } = useAuth();
  const [activeTab, setActiveTab] = useState('favorites');

  if (!isLoggedIn) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          Faça login para ver sua lista de filmes
        </Text>
      </View>
    );
  }

  const currentList = activeTab === 'favorites' ? favorites : watchedMovies;

  const renderMovieCard = ({ item }) => <MovieCard movie={item} />;

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        {activeTab === 'favorites' 
          ? 'Nenhum filme favoritado ainda' 
          : 'Nenhum filme marcado como assistido'
        }
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Lista</Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'favorites' && styles.activeTab
          ]}
          onPress={() => setActiveTab('favorites')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'favorites' && styles.activeTabText
          ]}>
            Favoritos ({favorites.length})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'watched' && styles.activeTab
          ]}
          onPress={() => setActiveTab('watched')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'watched' && styles.activeTabText
          ]}>
            Assistidos ({watchedMovies.length})
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={currentList}
        renderItem={renderMovieCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.moviesList}
        ListEmptyComponent={renderEmptyList}
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
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#16213E',
    borderRadius: 8,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: '#FFD700',
  },
  tabText: {
    color: '#CCCCCC',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#1A1A2E',
  },
  moviesList: {
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#CCCCCC',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MyListScreen;