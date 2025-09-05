const movies = [
{
    title: 'O Iluminado',
    year: '1980',
    genre: 'Psicológico',
    description: 'Um escritor e sua família se isolam em um hotel sinistro e desolado, onde a sanidade do pai é corroída por forças malignas.',
    rating: '8.4',
    poster: 'https://br.web.img2.acsta.net/r_1280_720/pictures/17/09/21/17/20/1333631.jpg'
  },
  {
    title: 'Hereditário',
    year: '2018',
    genre: 'Sobrenatural',
    description: 'Uma família enlutada desvenda segredos aterrorizantes sobre sua ancestralidade, mergulhando em um pesadelo que se desenrola após a morte da matriarca.',
    rating: '7.3',
    poster: 'https://junkee.com/wp-content/uploads/2018/06/hereditary-1.jpg'
  },
  {
    title: 'Invocação do Mal',
    year: '2013',
    genre: 'Possessão',
    description: 'Baseado em fatos, o filme segue os investigadores paranormais Ed e Lorraine Warren enquanto tentam ajudar uma família aterrorizada por uma entidade sombria.',
    rating: '7.5',
    poster: 'https://th.bing.com/th/id/R.16be21c84fe2552a2f295d357238df5b?rik=07RmMsLq80Snsw&riu=http%3a%2f%2fimages.allocine.fr%2fpictures%2f210%2f156%2f21015611_20130626154441145.jpg&ehk=pb7qoOUfa7G17gm4HfwQshB%2bdYqThzqcKf6FYGUDEsQ%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    title: 'A Bruxa de Blair',
    year: '1999',
    genre: 'Fantasma',
    description: 'Três estudantes de cinema desaparecem em uma floresta enquanto gravam um documentário sobre uma lenda local, deixando para trás apenas a sua filmagem.',
    rating: '6.5',
    poster: 'https://2.bp.blogspot.com/-zhjn2AQ6EKU/Yhwde9D4npI/AAAAAAABRwM/mO3YTBMM9EEW0ptAVDGuiBkWDCzUL6WngCNcBGAsYHQ/s1600/a-viralizacao-de-bruxa-de-blair.jpg'
  },
  {
    title: 'Psicose',
    year: '1960',
    genre: 'Thriller',
    description: 'Uma secretária em fuga se hospeda em um motel isolado, gerenciado por um jovem estranho, e descobre seus segredos sombrios.',
    rating: '8.4',
    poster: 'https://th.bing.com/th/id/R.5e2dddcdb52f89de539385695fe9f80a?rik=VifRR48JVzMDmA&pid=ImgRaw&r=0'
  },
  {
    title: 'Corra!',
    year: '2017',
    genre: 'Psicológico',
    description: 'Um jovem fotógrafo negro visita a família de sua namorada branca e descobre que a cordialidade inicial esconde uma terrível conspiração.',
    rating: '7.7',
    poster: 'https://th.bing.com/th/id/R.cfabc0d25db4849aaae1397cbbd645ce?rik=khEMh7W1G4Jlsw&pid=ImgRaw&r=0'
  },
  {
    title: 'O Exorcista',
    year: '1973',
    genre: 'Possessão',
    description: 'Uma garota é possuída por uma entidade demoníaca, e sua mãe pede ajuda a dois padres para salvá-la.',
    rating: '7.9',
    poster: 'https://image.tmdb.org/t/p/w500/q7V11F9D4wN92XF1a4Kz6xR2Lw.jpg'
  },
  {
    title: 'A Noite dos Mortos-Vivos',
    year: '1968',
    genre: 'Zumbi',
    description: 'Um grupo de pessoas se refugia em uma fazenda para se proteger de uma horda de mortos que subitamente voltaram à vida.',
    rating: '7.6',
    poster: 'https://image.tmdb.org/t/p/w500/aH5L848d701fCg3Q975qF6H4w2s.jpg'
  },
  {
    title: 'O Babadook',
    year: '2014',
    genre: 'Psicológico',
    description: 'Uma mãe viúva enfrenta um monstro sinistro que se manifesta através de um livro de histórias infantis, enquanto lida com a dor e o luto.',
    rating: '6.8',
    poster: 'https://image.tmdb.org/t/p/w500/rC8GkO9b775t7p84Q3vU19r1cQJ.jpg'
  },
  {
    title: 'O Enigma de Outro Mundo',
    year: '1982',
    genre: 'Alien',
    description: 'Cientistas na Antártida descobrem uma criatura alienígena que pode imitar perfeitamente outros organismos, criando uma atmosfera de paranoia.',
    rating: '8.2',
    poster: 'https://image.tmdb.org/t/p/w500/rC8GkO9b775t7p84Q3vU19r1cQJ.jpg'
  },
  {
    title: 'Halloween',
    year: '1978',
    genre: 'Slasher',
    description: 'Na noite de Halloween, um assassino mascarado escapa de uma instituição psiquiátrica e retorna para sua cidade natal em busca de novas vítimas.',
    rating: '7.7',
    poster: 'https://image.tmdb.org/t/p/w500/1X6M6y50sXj801j00T75lJ5t5bQ.jpg'
  },
  {
    title: 'Um Lobisomem Americano em Londres',
    year: '1981',
    genre: 'Body Horror',
    description: 'Dois mochileiros americanos são atacados por uma criatura na Inglaterra. Um sobrevive e passa por uma transformação terrível.',
    rating: '7.5',
    poster: 'https://image.tmdb.org/t/p/w500/lM8Kj3U48oE3sU5aP8W1o8D6h2c.jpg'
  },
  {
    title: 'O Massacre da Serra Elétrica',
    year: '1974',
    genre: 'Slasher',
    description: 'Um grupo de amigos é atacado por uma família de canibais enquanto viaja pelo Texas.',
    rating: '7.5',
    poster: 'https://image.tmdb.org/t/p/w500/aMv2W5Wq1uB8c516J3n51xS995X.jpg'
  },
  {
    title: 'Pânico',
    year: '1996',
    genre: 'Slasher',
    description: 'Um assassino misterioso, obcecado por filmes de terror, começa a caçar um grupo de adolescentes em uma pequena cidade.',
    rating: '7.4',
    poster: 'https://image.tmdb.org/t/p/w500/qj8f244Fq75r1oV8v5lq5w0jQ2v.jpg'
  },
  {
    title: 'A Múmia',
    year: '1932',
    genre: 'Sobrenatural',
    description: 'Uma múmia egípcia é ressuscitada por arqueólogos e busca sua amada perdida, causando terror e destruição.',
    rating: '7.1',
    poster: 'https://image.tmdb.org/t/p/w500/v9Qo5Xq4x5Y40w46q6p9n7l1pXf.jpg'
  },
  {
    title: 'Alien, o Oitavo Passageiro',
    year: '1979',
    genre: 'Alien',
    description: 'A tripulação de uma nave espacial encontra uma forma de vida alienígena em um planeta remoto. Mal sabem que a criatura se infiltrou em sua nave.',
    rating: '8.5',
    poster: 'https://image.tmdb.org/t/p/w500/2Lh20rQ2m1lVd5N1l2w1i9K7d2w.jpg'
  },
  {
    title: 'A Hora do Pesadelo',
    year: '1984',
    genre: 'Slasher',
    description: 'Um grupo de adolescentes é atormentado em seus sonhos por Freddy Krueger, um assassino que usa um tipo de luva com lâminas nas pontas dos dedos.',
    rating: '7.2',
    poster: 'https://image.tmdb.org/t/p/w500/h2mD4d99pM4G4X1Q5s6p5m5D5l5.jpg'
  },
  {
    title: 'Suspiria',
    year: '1977',
    genre: 'Culto',
    description: 'Uma estudante americana de dança viaja para uma prestigiada academia de balé em Berlim, apenas para descobrir que o lugar esconde segredos sombrios de bruxaria.',
    rating: '7.4',
    poster: 'https://image.tmdb.org/t/p/w500/pT85aT5j55K4jP0930n4n5w6g6c.jpg'
  },
  {
    title: 'IT - A Coisa',
    year: '2017',
    genre: 'Sobrenatural',
    description: 'Um grupo de crianças se une para enfrentar uma criatura maligna que se manifesta como o palhaço Pennywise.',
    rating: '7.3',
    poster: 'https://image.tmdb.org/t/p/w500/9J4d6yCq4qS82wSg8dFh9J7Xz7V.jpg'
  },
  {
    title: 'O Chamado',
    year: '2002',
    genre: 'Fantasma',
    description: 'Uma jornalista investiga uma fita de vídeo amaldiçoada que causa a morte de quem a assiste em sete dias.',
    rating: '7.1',
    poster: 'https://image.tmdb.org/t/p/w500/d59yS7jL738zP5p75bK72yY7L1p.jpg'
  },
  {
    title: 'O Silêncio dos Inocentes',
    year: '1991',
    genre: 'Thriller',
    description: 'Uma jovem agente do FBI busca a ajuda de um assassino e psicopata canibal, Hannibal Lecter, para capturar outro serial killer.',
    rating: '8.6',
    poster: 'https://image.tmdb.org/t/p/w500/4F6ZcE86P2aI7Ff7f2t1wX7Q5w2.jpg'
  },
  {
    title: 'Poltergeist',
    year: '1982',
    genre: 'Fantasma',
    description: 'Uma família se muda para uma casa nova, apenas para descobrir que ela é assombrada por espíritos malignos que se comunicam através da televisão.',
    rating: '7.3',
    poster: 'https://image.tmdb.org/t/p/w500/1X6M6y50sXj801j00T75lJ5t5bQ.jpg'
  },
  {
    title: 'Nosferatu',
    year: '1922',
    genre: 'Vampiro',
    description: 'Um agente imobiliário viaja para os Cárpatos para fechar um negócio com um conde recluso, que na verdade é um vampiro ancestral.',
    rating: '7.9',
    poster: 'https://image.tmdb.org/t/p/w500/gW5j3fE5aX3T32N7sL1wN1R3qG.jpg'
  },
  {
    title: 'Carrie, a Estranha',
    year: '1976',
    genre: 'Sobrenatural',
    description: 'Uma adolescente tímida e oprimida descobre que tem poderes telecinéticos, que se manifestam de forma violenta após ser humilhada em seu baile de formatura.',
    rating: '7.4',
    poster: 'https://image.tmdb.org/t/p/w500/uF2c6tXl8d9u55Jp1x8uT2sV2tL.jpg'
  },
  {
    title: 'Madrugada dos Mortos',
    year: '1978',
    genre: 'Zumbi',
    description: 'Um grupo de sobreviventes se esconde em um shopping center para se proteger de uma horda de mortos que subitamente voltaram à vida.',
    rating: '7.8',
    poster: 'https://image.tmdb.org/t/p/w500/7aQz8z0x6o0194Q60X3M5Jb24.jpg'
  },
  {
    title: 'A Mosca',
    year: '1986',
    genre: 'Body Horror',
    description: 'Um cientista se transforma em uma criatura horripilante após um de seus experimentos de teletransporte dar errado.',
    rating: '7.6',
    poster: 'https://image.tmdb.org/t/p/w500/e9N4gJ8l4l8N4v2k0n1w4e892e5.jpg'
  },
  {
    title: 'Uma Noite Alucinante',
    year: '1981',
    genre: 'Possessão',
    description: 'Cinco amigos viajam para uma cabana isolada na floresta, onde acidentalmente libertam demônios que possuíam os mortos.',
    rating: '7.4',
    poster: 'https://image.tmdb.org/t/p/w500/sY6u6q3c4X5xX1v5N4e46q6u8y.jpg'
  },
  {
    title: 'Extermínio',
    year: '2002',
    genre: 'Apocalíptico',
    description: 'Um homem acorda de um coma e descobre que a Grã-Bretanha foi devastada por um vírus que transforma as pessoas em assassinos violentos.',
    rating: '7.6',
    poster: 'https://image.tmdb.org/t/p/w500/uO3p0j5d91x1n8e3w4r50w1t2uL.jpg'
  },
  {
    title: 'Corrente do Mal',
    year: '2014',
    genre: 'Sobrenatural',
    description: 'Uma jovem é perseguida por uma entidade sobrenatural que só pode ser vista por suas vítimas.',
    rating: '6.8',
    poster: 'https://image.tmdb.org/t/p/w500/m8R8g8V8k6hW7l9e3u9n6x4h1p1.jpg'
  },
  {
    title: 'Abismo do Medo',
    year: '2005',
    genre: 'Thriller',
    description: 'Seis amigas exploram um sistema de cavernas inexplorado, mas ficam presas e descobrem que não estão sozinhas lá embaixo.',
    rating: '7.2',
    poster: 'https://image.tmdb.org/t/p/w500/d59yS7jL738zP5p75bK72yY7L1p.jpg'
  },
 
  {
    title: 'Nosferatu',
    year: '2025',
    genre: 'Vampiro',
    description: 'Uma nova adaptação do clássico conto de vampiro, com uma abordagem sombria e gótica.',
    rating: null, // Rating a ser definido após o lançamento
    poster: 'URL_DO_POSTER_NOSFERATU_2024' // Substitua pela URL real do pôster
  },
  {
    title: 'Lobisomem',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Um conto moderno sobre a maldição do lobisomem, explorando os conflitos internos e externos do protagonista.',
    rating: null,
    poster: 'URL_DO_POSTER_LOBISOMEM_2024'
  },
  {
    title: 'O Macaco',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Baseado no conto de Stephen King, o filme explora os horrores que uma antiga entidade pode trazer para uma família.',
    rating: null,
    poster: 'URL_DO_POSTER_O_MACACO_2024'
  },
  {
    title: 'Presença',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Uma família se muda para uma casa onde uma presença sinistra começa a se manifestar de formas aterrorizantes.',
    rating: null,
    poster: 'URL_DO_POSTER_PRESENCA_2024'
  },
  {
    title: 'Pecadores',
    year: '2025',
    genre: 'Culto',
    description: 'Um grupo de indivíduos é atraído para um culto misterioso com promessas de salvação, mas encontra um destino sombrio.',
    rating: null,
    poster: 'URL_DO_POSTER_PECADORES_2024'
  },
  {
    title: 'Until Dawn: Noite de Terror',
    year: '2025',
    genre: 'Slasher',
    description: 'Um grupo de amigos se vê preso em uma cabana isolada, sendo caçados por um assassino implacável.',
    rating: null,
    poster: 'URL_DO_POSTER_UNTIL_DAWN_2024'
  },
  {
    title: 'A Mulher no Jardim',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Uma mulher descobre segredos obscuros e sobrenaturais escondidos em um jardim antigo e misterioso.',
    rating: null,
    poster: 'URL_DO_POSTER_A_MULHER_NO_JARDIM_2024'
  },
  {
    title: 'Premonição 6: Laços de Sangue',
    year: '2025',
    genre: 'Thriller',
    description: 'A mais nova instalação da franquia Premonição, onde um grupo de pessoas escapa da morte, mas a Morte vem atrás deles.',
    rating: null,
    poster: 'URL_DO_POSTER_PREMONICAO_6_2024'
  },
  {
    title: 'Extermínio: A Evolução',
    year: '2025',
    genre: 'Apocalíptico',
    description: 'A saga de sobrevivência em um mundo devastado por um vírus mortal continua, com novos desafios e ameaças.',
    rating: null,
    poster: 'URL_DO_POSTER_EXTERMINIO_EVOLUCAO_2024'
  },
  {
    title: 'M3GAN 2.0',
    year: '2025',
    genre: 'Alien', // Embora M3GAN seja uma IA, a natureza de "outra vida" se encaixa aqui para fins de gênero amplo
    description: 'A boneca assassina M3GAN retorna em uma nova aventura cheia de tecnologia e terror.',
    rating: null,
    poster: 'URL_DO_POSTER_M3GAN_2_0_2024'
  },
  {
    title: 'Eu Sei o Que Vocês Fizeram no Verão Passado',
    year: '2025',
    genre: 'Slasher',
    description: 'Um remake ou continuação da clássica franquia de terror adolescente, com um novo assassino aterrorizando um grupo de jovens.',
    rating: null,
    poster: 'URL_DO_POSTER_EU_SEI_O_QUE_VOCES_FIZERAM_2024'
  },
  {
    title: 'O Ritual',
    year: '2025',
    genre: 'Culto',
    description: 'Um grupo participa de um ritual misterioso que desencadeia forças sombrias e perigosas.',
    rating: null,
    poster: 'URL_DO_POSTER_O_RITUAL_2024'
  },
  {
    title: 'A Hora do Mal',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Uma história de possessão e entidades demoníacas que se intensifica durante um período específico.',
    rating: null,
    poster: 'URL_DO_POSTER_A_HORA_DO_MAL_2024'
  },
  {
    title: 'Os Enforcados',
    year: '202f',
    genre: 'Slasher',
    description: 'Um grupo de amigos é aterrorizado por um assassino que usa métodos cruéis e ligados a um antigo conto folclórico.',
    rating: null,
    poster: 'URL_DO_POSTER_OS_ENFORCADOS_2024'
  },
  {
    title: 'Juntos',
    year: '2025',
    genre: 'Psicológico',
    description: 'O isolamento e a paranoia levam um grupo de pessoas a confrontar seus medos mais profundos.',
    rating: null,
    poster: 'URL_DO_POSTER_JUNTOS_2024'
  },
  {
    title: 'Faça Ela Voltar',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Uma tentativa desesperada de trazer alguém de volta do além desencadeia consequências aterrorizantes.',
    rating: null,
    poster: 'URL_DO_POSTER_FACAE LAVOLTAR_2024'
  },
  {
    title: 'Invocação do Mal 4: O Último Ritual',
    year: '2025',
    genre: 'Possessão',
    description: 'Ed e Lorraine Warren retornam para enfrentar sua mais desafiadora e talvez última investigação paranormal.',
    rating: null,
    poster: 'URL_DO_POSTER_INVOCACAO_DO_MAL_4_2024'
  },

  {
    title: 'O Chamado',
    year: '2002',
    genre: 'Sobrenatural',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'Sobrenatural',
    year: '2010',
    genre: 'Sobrenatural',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'A Entidade',
    year: '2012',
    genre: 'Sobrenatural',
    description: null,
    rating: null,
    poster: null
  },
 

  {
    title: 'Cisne Negro',
    year: '2010',
    genre: 'Psicológico',
    description: null,
    rating: null,
    poster: null
  },
  
 
  {
    title: 'O Homem Invisível',
    year: '2020',
    genre: 'Thriller',
    description: null,
    rating: null,
    poster: null
  },
 
 
  {
    title: 'REC',
    year: '2007',
    genre: 'Zumbi',
    description: null,
    rating: null,
    poster: null
  },
 
  {
    title: 'A Morte do Demônio',
    year: '2013',
    genre: 'Demônio',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'Arraste-me para o Inferno',
    year: '2009',
    genre: 'Demônio',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'Drácula de Bram Stoker',
    year: '1992',
    genre: 'Vampiro',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'Deixe Ela Entrar',
    year: '2008',
    genre: 'Vampiro',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'Entrevista com o Vampiro',
    year: '1994',
    genre: 'Vampiro',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'Os Outros',
    year: '2001',
    genre: 'Fantasma',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'A Maldição da Residência Hill',
    year: '2018',
    genre: 'Fantasma',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'O Orfanato',
    year: '2007',
    genre: 'Fantasma',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'Possessão',
    year: '2012',
    genre: 'Possessão',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'O Ritual',
    year: '2011',
    genre: 'Possessão',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'Verónica',
    year: '2017',
    genre: 'Possessão',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'O Homem de Palha',
    year: '1973',
    genre: 'Culto',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'Midsommar',
    year: '2019',
    genre: 'Culto',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'O Sacrifício do Cervo Sagrado',
    year: '2017',
    genre: 'Culto',
    description: null,
    rating: null,
    poster: null
  },
  
  {
    title: 'Creepshow',
    year: '1982',
    genre: 'Body Horror',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'Raw',
    year: '2016',
    genre: 'Body Horror',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'A Estrada',
    year: '2009',
    genre: 'Apocalíptico',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'Filhos da Esperança',
    year: '2006',
    genre: 'Apocalíptico',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'Bird Box',
    year: '2018',
    genre: 'Apocalíptico',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'Alien: O Oitavo Passageiro',
    year: '1979',
    genre: 'Alien',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'A Coisa',
    year: '1982',
    genre: 'Alien',
    description: null,
    rating: null,
    poster: null
  },
  {
    title: 'Sinais',
    year: '2002',
    genre: 'Alien',
    description: null,
    rating: null,
    poster: null
  }
];

const moviesGrid = document.getElementById("moviesGrid");
const genreDropdownBtn = document.getElementById("genreDropdownBtn");
const genreDropdownMenu = document.getElementById("genreDropdownMenu");
const selectedGenre = document.getElementById("selectedGenre");
const currentGenreTitle = document.getElementById("currentGenreTitle");

// Mostrar filmes
function renderMovies(filter = "all") {
  moviesGrid.innerHTML = "";
  const filtered = filter === "all" ? movies : movies.filter(m => m.genre === filter);
  filtered.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
      <div class="movie-poster" style="background-image: url('${movie.poster}');">
        <div class="movie-rating-overlay">${movie.rating}</div>
      </div>
      <div class="movie-content">
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-year-genre">
          <span>${movie.year}</span>
          <span>${movie.genre}</span>
        </div>
        <p class="movie-description">${movie.description}</p>
      </div>
    `;
    moviesGrid.appendChild(card);
  });
}

// Dropdown
genreDropdownBtn.addEventListener("click", () => {
  genreDropdownMenu.classList.toggle("show");
  genreDropdownBtn.classList.toggle("active");
});

document.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    const genre = item.dataset.genre;
    selectedGenre.textContent = item.textContent;
    currentGenreTitle.textContent = genre === "all" ? "🔥 Todos os Clássicos Aterrorizantes 🔥" : `🔥 ${genre} 🔥`;
    renderMovies(genre);
    genreDropdownMenu.classList.remove("show");
    genreDropdownBtn.classList.remove("active");
  });
});

renderMovies();
