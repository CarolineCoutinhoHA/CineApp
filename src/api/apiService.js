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
        poster: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
        synopsis: 'Os heróis mais poderosos da Terra enfrentam Thanos.'
      },
      {
        id: '2',
        title: 'Parasita',
        genre: 'Drama',
        year: '2019',
        poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
        synopsis: 'Uma família pobre se infiltra na vida de uma família rica.'
      },
      {
        id: '3',
        title: 'Coringa',
        genre: 'Drama',
        year: '2019',
        poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
        synopsis: 'A origem sombria do icônico vilão de Gotham.'
      },
      {
        id: '4',
        title: 'Toy Story 4',
        genre: 'Animação',
        year: '2019',
        poster: 'https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg',
        synopsis: 'Woody e seus amigos embarcam em uma nova aventura.'
      },
      {
        id: '5',
        title: 'Homem-Aranha: Longe de Casa',
        genre: 'Ação',
        year: '2019',
        poster: 'https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
        synopsis: 'Peter Parker enfrenta novos desafios na Europa.'
      },
      {
        id: '6',
        title: 'It: Capítulo Dois',
        genre: 'Terror',
        year: '2019',
        poster: 'https://image.tmdb.org/t/p/w500/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg',
        synopsis: 'O Clube dos Perdedores retorna para enfrentar Pennywise.'
      },
      {
        id: '7',
        title: 'John Wick 3',
        genre: 'Ação',
        year: '2019',
        poster: 'https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg',
        synopsis: 'John Wick luta pela sobrevivência após ser banido.'
      },
      {
        id: '8',
        title: 'Frozen 2',
        genre: 'Animação',
        year: '2019',
        poster: 'https://image.tmdb.org/t/p/w500/mINJaa34MtknCTFJKwH6d7kxeWN.jpg',
        synopsis: 'Elsa e Anna descobrem a origem dos poderes mágicos.'
      },
      {
        id: '9',
        title: 'Era Uma Vez em Hollywood',
        genre: 'Drama',
        year: '2019',
        poster: 'https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg',
        synopsis: 'Hollywood em 1969 através dos olhos de um ator e seu dublê.'
      },
      {
        id: '10',
        title: 'Jumanji: Próxima Fase',
        genre: 'Comédia',
        year: '2019',
        poster: 'https://image.tmdb.org/t/p/w500/bB42KDdfWkOvmzmYkmK58ZlCa9P.jpg',
        synopsis: 'Os amigos retornam ao perigoso mundo de Jumanji.'
      },
      {
        id: '11',
        title: 'Midsommar',
        genre: 'Terror',
        year: '2019',
        poster: 'https://image.tmdb.org/t/p/w500/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg',
        synopsis: 'Um casal viaja para um festival de verão na Suécia.'
      },
      {
        id: '12',
        title: 'Knives Out',
        genre: 'Comédia',
        year: '2019',
        poster: 'https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg',
        synopsis: 'Um detetive investiga a morte de um escritor famoso.'
      }
    ];
  }
};

// Função POST removida - dados salvos no MovieContext (estado global)