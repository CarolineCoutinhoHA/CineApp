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
        poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
        synopsis: 'Os heróis mais poderosos da Terra enfrentam Thanos.'
      },
      {
        id: '2',
        title: 'Parasita',
        genre: 'Drama',
        year: '2019',
        poster: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
        synopsis: 'Uma família pobre se infiltra na vida de uma família rica.'
      },
      {
        id: '3',
        title: 'Coringa',
        genre: 'Drama',
        year: '2019',
        poster: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        synopsis: 'A origem sombria do icônico vilão de Gotham.'
      },
      {
        id: '4',
        title: 'Toy Story 4',
        genre: 'Animação',
        year: '2019',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_.jpg',
        synopsis: 'Woody e seus amigos embarcam em uma nova aventura.'
      },
      {
        id: '5',
        title: 'Homem-Aranha: Longe de Casa',
        genre: 'Ação',
        year: '2019',
        poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
        synopsis: 'Peter Parker enfrenta novos desafios na Europa.'
      },
      {
        id: '6',
        title: 'It: Capítulo Dois',
        genre: 'Terror',
        year: '2019',
        poster: 'https://m.media-amazon.com/images/M/MV5BYTJlNjlkZTktNjEwOS00NzI5LTlkNDAtZmEzZDFiMGI2MjhhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg',
        synopsis: 'O Clube dos Perdedores retorna para enfrentar Pennywise.'
      },
      {
        id: '7',
        title: 'John Wick 3',
        genre: 'Ação',
        year: '2019',
        poster: 'https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg',
        synopsis: 'John Wick luta pela sobrevivência após ser banido.'
      },
      {
        id: '8',
        title: 'Frozen 2',
        genre: 'Animação',
        year: '2019',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg',
        synopsis: 'Elsa e Anna descobrem a origem dos poderes mágicos.'
      },
      {
        id: '9',
        title: 'Era Uma Vez em Hollywood',
        genre: 'Drama',
        year: '2019',
        poster: 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg',
        synopsis: 'Hollywood em 1969 através dos olhos de um ator e seu dublê.'
      },
      {
        id: '10',
        title: 'Jumanji: Próxima Fase',
        genre: 'Comédia',
        year: '2019',
        poster: 'https://m.media-amazon.com/images/M/MV5BYTVlMDg4NTEtNzBhZi00NzBkLTllYTgtMDUzN2NlMWI0NWEyXkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg',
        synopsis: 'Os amigos retornam ao perigoso mundo de Jumanji.'
      },
      {
        id: '11',
        title: 'Midsommar',
        genre: 'Terror',
        year: '2019',
        poster: 'https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_.jpg',
        synopsis: 'Um casal viaja para um festival de verão na Suécia.'
      },
      {
        id: '12',
        title: 'Knives Out',
        genre: 'Comédia',
        year: '2019',
        poster: 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg',
        synopsis: 'Um detetive investiga a morte de um escritor famoso.'
      },
      {
        id: '13',
        title: 'Pantera Negra',
        genre: 'Ação',
        year: '2018',
        poster: 'https://via.placeholder.com/300x450/1A1A2E/FFD700?text=Pantera+Negra',
        synopsis: 'T\'Challa retorna para casa para ser coroado rei de Wakanda.'
      },
      {
        id: '14',
        title: 'A Forma da Água',
        genre: 'Drama',
        year: '2017',
        poster: 'https://via.placeholder.com/300x450/1A1A2E/FFD700?text=Forma+da+Agua',
        synopsis: 'Uma mulher muda se apaixona por uma criatura aquática.'
      },
      {
        id: '15',
        title: 'Coco',
        genre: 'Animação',
        year: '2017',
        poster: 'https://via.placeholder.com/300x450/1A1A2E/FFD700?text=Coco',
        synopsis: 'Miguel viaja para a Terra dos Mortos para descobrir sua família.'
      },
      {
        id: '16',
        title: 'Hereditary',
        genre: 'Terror',
        year: '2018',
        poster: 'https://via.placeholder.com/300x450/1A1A2E/FFD700?text=Hereditary',
        synopsis: 'Uma família enfrenta segredos sombrios após a morte da avó.'
      },
      {
        id: '17',
        title: 'Deadpool 2',
        genre: 'Comédia',
        year: '2018',
        poster: 'https://via.placeholder.com/300x450/1A1A2E/FFD700?text=Deadpool+2',
        synopsis: 'Wade Wilson forma uma equipe para proteger um jovem mutante.'
      },
      {
        id: '18',
        title: 'Bohemian Rhapsody',
        genre: 'Drama',
        year: '2018',
        poster: 'https://via.placeholder.com/300x450/1A1A2E/FFD700?text=Bohemian+Rhapsody',
        synopsis: 'A história da lendária banda Queen e seu vocalista Freddie Mercury.'
      },
      {
        id: '19',
        title: 'Aquaman',
        genre: 'Ação',
        year: '2018',
        poster: 'https://via.placeholder.com/300x450/1A1A2E/FFD700?text=Aquaman',
        synopsis: 'Arthur Curry descobre que é herdeiro do reino subaquático de Atlântida.'
      },
      {
        id: '20',
        title: 'Homem-Aranha no Aranhaverso',
        genre: 'Animação',
        year: '2018',
        poster: 'https://via.placeholder.com/300x450/1A1A2E/FFD700?text=Homem+Aranha+Aranhaverso',
        synopsis: 'Miles Morales se torna o novo Homem-Aranha em seu universo.'
      },
      {
        id: '21',
        title: 'A Quiet Place',
        genre: 'Terror',
        year: '2018',
        poster: 'https://via.placeholder.com/300x450/1A1A2E/FFD700?text=A+Quiet+Place',
        synopsis: 'Uma família vive em silêncio para evitar criaturas que caçam pelo som.'
      },
      {
        id: '22',
        title: 'Capitã Marvel',
        genre: 'Ação',
        year: '2019',
        poster: 'https://via.placeholder.com/300x450/1A1A2E/FFD700?text=Capita+Marvel',
        synopsis: 'Carol Danvers se torna uma das heroínas mais poderosas do universo.'
      },
      {
        id: '23',
        title: 'Green Book',
        genre: 'Drama',
        year: '2018',
        poster: 'https://via.placeholder.com/300x450/1A1A2E/FFD700?text=Green+Book',
        synopsis: 'Um pianista negro e seu motorista branco viajam pelo sul dos EUA.'
      },
      {
        id: '24',
        title: 'Os Incríveis 2',
        genre: 'Animação',
        year: '2018',
        poster: 'https://via.placeholder.com/300x450/1A1A2E/FFD700?text=Os+Incriveis+2',
        synopsis: 'A família Pêra enfrenta novos desafios enquanto Helen trabalha como heroína.'
      },
      {
        id: '25',
        title: 'Halloween',
        genre: 'Terror',
        year: '2018',
        poster: 'https://image.tmdb.org/t/p/w500/bXs0zkv2iGVViZEy78teg2ycDBm.jpg',
        synopsis: 'Michael Myers retorna para aterrorizar Haddonfield mais uma vez.'
      },
      {
        id: '26',
        title: 'Crazy Rich Asians',
        genre: 'Comédia',
        year: '2018',
        poster: 'https://image.tmdb.org/t/p/w500/1XxL8LWwxOk4QVPsQz2GHe6McQZ.jpg',
        synopsis: 'Uma mulher descobre que seu namorado é um dos solteiros mais cobiçados da Ásia.'
      },
      {
        id: '27',
        title: 'Venom',
        genre: 'Ação',
        year: '2018',
        poster: 'https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
        synopsis: 'Eddie Brock se torna hospedeiro de um simbionte alienígena.'
      },
      {
        id: '28',
        title: 'Roma',
        genre: 'Drama',
        year: '2018',
        poster: 'https://image.tmdb.org/t/p/w500/1V2dqNFejJW8Pzh8MA1Gx5mGPNc.jpg',
        synopsis: 'A vida de uma empregada doméstica na Cidade do México dos anos 70.'
      },
      {
        id: '29',
        title: 'Ralph Breaks the Internet',
        genre: 'Animação',
        year: '2018',
        poster: 'https://image.tmdb.org/t/p/w500/qEnH5meR381iMpmCQVylsswYBJ2.jpg',
        synopsis: 'Ralph e Vanellope descobrem a internet em busca de uma peça para o jogo dela.'
      },
      {
        id: '30',
        title: 'The Nun',
        genre: 'Terror',
        year: '2018',
        poster: 'https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg',
        synopsis: 'Um padre e uma noviça investigam o suicídio de uma freira na Romênia.'
      },
      {
        id: '31',
        title: 'Bumblebee',
        genre: 'Ação',
        year: '2018',
        poster: 'https://image.tmdb.org/t/p/w500/fw02ONlDhrYjTSoc0RneaNL6k3g.jpg',
        synopsis: 'Uma adolescente encontra e faz amizade com o Autobot Bumblebee.'
      },
      {
        id: '32',
        title: 'Vice',
        genre: 'Drama',
        year: '2018',
        poster: 'https://image.tmdb.org/t/p/w500/1gCab6rNv1r6V64cwsU4oEr649Y.jpg',
        synopsis: 'A história de Dick Cheney, o vice-presidente mais poderoso da história.'
      },
      {
        id: '33',
        title: 'Moana',
        genre: 'Animação',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/4q2hz2m8hubgGF0DkQgg0mtE9BM.jpg',
        synopsis: 'Uma jovem polinésia navega pelo oceano para salvar sua ilha.'
      },
      {
        id: '34',
        title: 'The Conjuring 2',
        genre: 'Terror',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg',
        synopsis: 'Ed e Lorraine Warren investigam atividade paranormal em Londres.'
      },
      {
        id: '35',
        title: 'Zootopia',
        genre: 'Animação',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg',
        synopsis: 'Uma coelha policial e uma raposa vigarista resolvem um mistério.'
      },
      {
        id: '36',
        title: 'Doutor Estranho',
        genre: 'Ação',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg',
        synopsis: 'Um cirurgião descobre o mundo místico e se torna o Mago Supremo.'
      },
      {
        id: '37',
        title: 'La La Land',
        genre: 'Drama',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
        synopsis: 'Um pianista de jazz e uma atriz aspirante se apaixonam em Los Angeles.'
      },
      {
        id: '38',
        title: 'Lights Out',
        genre: 'Terror',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/6EjKC0pANKjRuCOBhZCxBmLJkZs.jpg',
        synopsis: 'Uma entidade sobrenatural só aparece no escuro.'
      },
      {
        id: '39',
        title: 'Deadpool',
        genre: 'Comédia',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/yGSxMiF0cYuAiyuve5DA6bnWEOI.jpg',
        synopsis: 'Wade Wilson se torna o anti-herói Deadpool após um experimento.'
      },
      {
        id: '40',
        title: 'Capitão América: Guerra Civil',
        genre: 'Ação',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg',
        synopsis: 'Os Vingadores se dividem em duas facções opostas.'
      },
      {
        id: '41',
        title: 'Moonlight',
        genre: 'Drama',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/4911T5FbJ9eD2Faz5Z8cT3SUhU.jpg',
        synopsis: 'A jornada de autodescoberta de um jovem negro em três fases da vida.'
      },
      {
        id: '42',
        title: 'Procurando Dory',
        genre: 'Animação',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/yFjVlsJmEMacU0BNUwdGZlo2ixq.jpg',
        synopsis: 'Dory parte em uma jornada para encontrar sua família.'
      },
      {
        id: '43',
        title: 'Don\'t Breathe',
        genre: 'Terror',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/76daH7qjOPWaJMRyBVaqFWjlClo.jpg',
        synopsis: 'Três ladrões invadem a casa de um veterano cego.'
      },
      {
        id: '44',
        title: 'Esquadrão Suicida',
        genre: 'Ação',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg',
        synopsis: 'Vilões são recrutados para uma missão secreta do governo.'
      },
      {
        id: '45',
        title: 'Arrival',
        genre: 'Drama',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/yImmxRokQ48PD49ughXdpKTAsQU.jpg',
        synopsis: 'Uma linguista tenta se comunicar com alienígenas que chegaram à Terra.'
      },
      {
        id: '46',
        title: 'Pets - A Vida Secreta dos Bichos',
        genre: 'Animação',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/uiVw6UqLKtqtVAMwQbZAi8fTMot.jpg',
        synopsis: 'A vida secreta dos animais de estimação quando seus donos saem.'
      },
      {
        id: '47',
        title: 'The Purge: Election Year',
        genre: 'Terror',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/hdSSf5u8XF4n2hotQ7tgYu7YDIA.jpg',
        synopsis: 'Uma senadora tenta sobreviver à noite do expurgo.'
      },
      {
        id: '48',
        title: 'X-Men: Apocalipse',
        genre: 'Ação',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/2mtQwJKVKQrZgTz49Dizb25eOQQ.jpg',
        synopsis: 'Os X-Men enfrentam o primeiro e mais poderoso mutante, Apocalipse.'
      },
      {
        id: '49',
        title: 'Manchester by the Sea',
        genre: 'Drama',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/e8daDzP0vFOnGyKmve95Yv0D0io.jpg',
        synopsis: 'Um homem deve cuidar do sobrinho após a morte de seu irmão.'
      },
      {
        id: '50',
        title: 'Sing',
        genre: 'Animação',
        year: '2016',
        poster: 'https://image.tmdb.org/t/p/w500/zc8FqPNqh6Da0BmfM8bZuBTdVhH.jpg',
        synopsis: 'Um coala organiza uma competição de canto para salvar seu teatro.'
      }
    ];
  }
};

// Função POST removida - dados salvos no MovieContext (estado global)