const API_BASE_URL = 'https://628d0af7a3fd714fd03e1bb6.mockapi.io';

export const fetchMovies = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/movies`);
    if (!response.ok) {
      throw new Error('Erro ao buscar filmes');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na API:', error);
    // Retorna dados mock em caso de erro
    return [
      {
        id: '1',
        title: 'Vingadores: Ultimato',
        genre: 'Ação',
        year: '2019',
        poster: 'https://via.placeholder.com/300x450/E50914/FFFFFF?text=Vingadores',
        synopsis: 'Os heróis mais poderosos da Terra enfrentam Thanos.'
      },
      {
        id: '2',
        title: 'Parasita',
        genre: 'Drama',
        year: '2019',
        poster: 'https://via.placeholder.com/300x450/E50914/FFFFFF?text=Parasita',
        synopsis: 'Uma família pobre se infiltra na vida de uma família rica.'
      },
      {
        id: '3',
        title: 'Coringa',
        genre: 'Drama',
        year: '2019',
        poster: 'https://via.placeholder.com/300x450/E50914/FFFFFF?text=Coringa',
        synopsis: 'A origem sombria do icônico vilão de Gotham.'
      },
      {
        id: '4',
        title: 'Toy Story 4',
        genre: 'Animação',
        year: '2019',
        poster: 'https://via.placeholder.com/300x450/E50914/FFFFFF?text=Toy+Story+4',
        synopsis: 'Woody e seus amigos embarcam em uma nova aventura.'
      }
    ];
  }
};

// Função POST removida - dados salvos no MovieContext (estado global)