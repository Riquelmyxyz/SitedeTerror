const movies = [
  {
    title: 'O Iluminado',
    year: '1980',
    genre: 'Psicológico',
    description: 'Jack Torrance, um escritor em crise e alcoólatra em recuperação, aceita o trabalho de zelador de inverno no isolado Hotel Overlook, nas montanhas do Colorado. Ele se muda para lá com sua esposa Wendy e seu filho Danny, que possui habilidades psíquicas chamadas de “iluminação”, capazes de revelar horrores do passado e prever eventos futuros. Com o isolamento e a influência sobrenatural do hotel, Jack começa a perder a sanidade, colocando sua família em perigo.',
    rating: '8.4',
    poster: 'https://br.web.img2.acsta.net/r_1280_720/pictures/17/09/21/17/20/1333631.jpg',
    platforms: [
      { name: 'HBO Max', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' },
      { name: 'Apple TV', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=3g6P0-n_7_o'
  },
  {
    title: 'Hereditário',
    year: '2018',
    genre: 'Sobrenatural',
    description: 'Após a morte da matriarca da família Graham, segredos obscuros começam a emergir. Annie (Toni Collette) e seus filhos enfrentam eventos sobrenaturais e perturbadores que revelam um legado sombrio. O luto se transforma em terror à medida que forças misteriosas tomam conta da casa e da mente dos personagens.',
    rating: '7.3',
    poster: 'https://junkee.com/wp-content/uploads/2018/06/hereditary-1.jpg',
    platforms: [
      { name: 'HBO Max', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' },
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Netflix', logo: 'https://i.pinimg.com/1200x/b6/3c/86/b63c861466a49f4a296806069be7f097.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=Ui13PlmyZhQ'
  },
  {
    title: 'Invocação do Mal',
    year: '2013',
    genre: 'Possessão',
    description: 'Carolyn e Roger Perron se mudam com suas cinco filhas para uma casa de fazenda em Harrisville. Logo, eventos paranormais começam a atormentar a família. Desesperados, eles recorrem aos renomados investigadores Ed e Lorraine Warren. O que parecia apenas mais um caso se revela uma batalha contra uma entidade demoníaca poderosa, com raízes profundas no passado da casa.',
    rating: '7.5',
    poster: 'https://is2-ssl.mzstatic.com/image/thumb/o8NAEIryYsVwJpRwj1UbKw/1200x675.jpg',
    platforms: [
      { name: 'HBO Max', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' },
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple TV', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=GQrrXceHn2E'
  },
  {
    title: 'O Exorcista',
    year: '1973',
    genre: 'Possessão',
    description: 'Em Georgetown, Washington, a atriz Chris MacNeil começa a notar comportamentos estranhos e perturbadores em sua filha de 12 anos, Regan. Após tentativas frustradas com médicos, ela recorre à Igreja. Dois padres — Damien Karras e Lankester Merrin — são convocados para realizar um exorcismo, enfrentando uma força demoníaca aterradora que desafia a fé e a razão',
    rating: '8.1',
    poster: 'https://tse4.mm.bing.net/th/id/OIP.pe1ZsH3Bggu66SIVGOdsTwHaLS?cb=thfvnextucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    platforms: [
      { name: 'HBO Max', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/HBO_Max_Logo.svg' },
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple TV', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=BU2eYAO31Cc'
  },
  {
    title: 'A Bruxa de Blair',
    year: '1999',
    genre: 'Sobrenatural',
    description: 'Três estudantes de cinema desaparecem enquanto filmam um documentário sobre uma lenda local, deixando para trás apenas sua câmera.',
    rating: '6.5',
    poster: 'https://th.bing.com/th/id/R.e48ff98006e88d8b8941f17387dd5e4f?rik=v9tB0W50D02lFA&riu=http%3a%2f%2fbr.web.img3.acsta.net%2fr_1280_720%2fpictures%2f18%2f03%2f13%2f20%2f08%2f3033501.jpg&ehk=pYcE5M7K8iQz1fD0T%2b%2fw7%2fU6f8%2f3y00r8JmPqFj5sKk%3d&risl=&pid=ImgRaw&r=0',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=e6VvEaI29vI'
  },
  {
    title: 'O Chamado',
    year: '2002',
    genre: 'Fantasma',
    description: 'Uma jornalista investiga uma misteriosa fita de vídeo que mata quem a assiste em sete dias.',
    rating: '7.1',
    poster: 'https://th.bing.com/th/id/R.52427a1c3e34b159f8c1482f349c8949?rik=E3q%2bB1f3v9gWUg&riu=http%3a%2f%2fbr.web.img3.acsta.net%2fr_1280_720%2fpictures%2f14%2f03%2f20%2f19%2f59%2f418516.jpg&ehk=Q532V5E6B7W23x4M9w2hE8qg4D1eA5gK1pL6E7mF5G4%3d&risl=&pid=ImgRaw&r=0',
    platforms: [
      { name: 'Netflix', logo: 'https://i.pinimg.com/1200x/b6/3c/86/b63c861466a49f4a296806069be7f097.jpghttps://i.pinimg.com/1200x/b6/3c/86/b63c861466a49f4a296806069be7f097.j' },
      { name: 'Google Play', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Play_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=Qh_t1uR4T6Y'
  },
  {
    title: 'Um Lugar Silencioso',
    year: '2018',
    genre: 'Alien',
    description: 'Uma família tenta sobreviver em um mundo pós-apocalíptico habitado por criaturas que caçam pelo som.',
    rating: '7.5',
    poster: 'https://th.bing.com/th/id/R.73775f0f353a39e7019124446b77e8a3?rik=sI%2bM3P92f9t78g&riu=http%3a%2f%2fbr.web.img1.acsta.net%2fr_1280_720%2fpictures%2f18%2f01%2f25%2f16%2f05%2f5043868.jpg&ehk=Xp0t9vO6f5l8qgYh0mS0M1b5G4p0E8gR6e6w7a5sYqU%3d&risl=&pid=ImgRaw&r=0',
    platforms: [
      { name: 'Star+', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Star%2B_logo.svg' }, // Link corrigido
      { name: 'Apple TV', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_gray_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=F1Ebp4w-1Sg'
  },
  {
    title: 'Corra!',
    year: '2017',
    genre: 'Psicológico',
    description: 'Um jovem negro visita a família da sua namorada branca e descobre um segredo perturbador que ameaça sua vida.',
    rating: '7.7',
    poster: 'https://th.bing.com/th/id/R.8a0651666874457ac06f470559648943?rik=G1eK477R946n4g&riu=http%3a%2f%2fbr.web.img1.acsta.net%2fr_1280_720%2fpictures%2f17%2f04%2f06%2f23%2f11%2f411853.jpg&ehk=L%2fe1WbFqT8D7n7B2t8Q6yP8Y6K3rM5i3e7a6Q2y1v5o%3d&risl=&pid=ImgRaw&r=0',
    platforms: [
      { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Netflix_logo.svg' },
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=D6s2p4Xz7-o'
  },
  {
    title: 'O Babadook',
    year: '2014',
    genre: 'Psicológico',
    description: 'Uma mãe viúva, atormentada pela morte do marido, encontra um livro infantil assustador que faz com que uma criatura se manifeste em sua casa.',
    rating: '6.8',
    poster: 'https://th.bing.com/th/id/R.6a19f6a73844f80cf75a109a25b3408a?rik=4G64fW31e8V2Wg&riu=http%3a%2f%2fbr.web.img3.acsta.net%2fr_1280_720%2fpictures%2f14%2f09%2f17%2f10%2f35%2f540707.jpg&ehk=6y3gW5%2bS4L6h6L5p6m4T6q0t3j6D9d0j9aK4n1k6f1g%3d&risl=&pid=ImgRaw&r=0',
    platforms: [
      { name: 'HBO Max', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/HBO_Max_Logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=kY7-D844l4o'
  },
  {
    title: 'A Corrente do Mal',
    year: '2014',
    genre: 'Sobrenatural',
    description: 'Uma adolescente é perseguida por uma entidade maligna após uma experiência sexual, e a única forma de se livrar dela é passando-a adiante.',
    rating: '6.8',
    poster: 'https://th.bing.com/th/id/R.459d2a6a655761a2958f00030613e144?rik=3g1T5sB0b7eB3w&riu=http%3a%2f%2fbr.web.img2.acsta.net%2fr_1280_720%2fpictures%2f14%2f09%2f24%2f18%2f08%2f088484.jpg&ehk=7u3b4x4F7q5N1J5m7n6O7k4L3g4D8p2t8n0o9k7g6e%3d&risl=&pid=ImgRaw&r=0',
    platforms: [
      { name: 'HBO Max', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/HBO_Max_Logo.svg' },
      { name: 'Apple TV', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Apple_TV_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=Yf1e40wN51g'
  },
  {
    title: 'O Grito',
    year: '2004',
    genre: 'Fantasma',
    description: 'Um espírito vingativo e assustador assombra uma casa no Japão e infecta todos que entram nela com uma maldição mortal.',
    rating: '5.9',
    poster: 'https://th.bing.com/th/id/R.a8c432d96924b22c027b4e99f57d6e66?rik=zW9Yc0K8r3M1%2fQ&riu=http%3a%2f%2fbr.web.img1.acsta.net%2fr_1280_720%2fpictures%2f14%2f03%2f20%2f21%2f09%2f039433.jpg&ehk=F6w5W6K8w3d3S4e5w6o2K4m8Q3h6R7g7w8k6K3f8h5g%3d&risl=&pid=ImgRaw&r=0',
    platforms: [
      { name: 'HBO Max', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/HBO_Max_Logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=FjI1gP88T3U'
  },
  {
    title: 'Annabelle',
    year: '2014',
    genre: 'Possessão',
    description: 'Um casal encontra uma boneca antiga para sua filha, mas logo descobrem que ela está possuída por uma entidade demoníaca.',
    rating: '5.4',
    poster: 'https://th.bing.com/th/id/R.a7428c0c8b329c3686d6347101869e92?rik=M6p3Y5q8f4C6Q6g&riu=http%3a%2f%2fbr.web.img3.acsta.net%2fr_1280_720%2fpictures%2f14%2f08%2f14%2f11%2f41%2f260404.jpg&ehk=4n8j9h7g6e7f8k5l8m0h6j5k2l9j4k5l0o9k7g6e%3d&risl=&pid=ImgRaw&r=0',
    platforms: [
      { name: 'HBO Max', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/HBO_Max_Logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=t-qE8VwG4uI'
  },
  {
    title: 'O Massacre da Serra Elétrica',
    year: '1974',
    genre: 'Slasher',
    description: 'Cinco amigos que viajam pelo Texas são atacados por uma família de canibais, incluindo um serial killer mascarado com uma serra elétrica.',
    rating: '7.5',
    poster: 'https://th.bing.com/th/id/R.6d214c77d4c7b8053f317b3d3f1d8e12?rik=w54z9j9x1k5y6g&riu=http%3a%2f%2fbr.web.img1.acsta.net%2fr_1280_720%2fpictures%2f18%2f08%2f28%2f17%2f17%2f5053158.jpg&ehk=k3j7h8g6h6l6m8k9j0p2l9h7g6d4e2f9j8k7h6g%3d&risl=&pid=ImgRaw&r=0',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=T_S27R_8X3A'
  },
  {
    title: 'A Noite dos Mortos-Vivos',
    year: '1968',
    genre: 'Zumbi',
    description: 'Um grupo de sobreviventes se refugia em uma fazenda isolada para se proteger de uma horda de zumbis sedentos por carne humana.',
    rating: '7.9',
    poster: 'https://th.bing.com/th/id/R.2435e2194b15d2a297e289c0255b8981?rik=8y3k8l4h5l6j9g&riu=http%3a%2f%2fbr.web.img3.acsta.net%2fr_1280_720%2fpictures%2f14%2f03%2f20%2f19%2f54%2f173872.jpg&ehk=S3e3v4n5m6p7o8k4j5l6h4f8g7h2i6k7l0m9j2g%3d&risl=&pid=ImgRaw&r=0',
    platforms: [
      { name: 'Apple TV', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Apple_TV_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=nE5n2T5oU-4'
  },
  {
    title: '28 Dias Depois',
    year: '2002',
    genre: 'Zumbi',
    description: 'Um grupo de ativistas libera macacos infectados com um vírus que transforma as pessoas em monstros sedentos por violência.',
    rating: '7.6',
    poster: 'https://th.bing.com/th/id/R.a70b201f9e2f9b871c82823058a5c2d3?rik=sI%2bM3P92f9t78g&riu=http%3a%2f%2fbr.web.img2.acsta.net%2fr_1280_720%2fpictures%2f14%2f03%2f20%2f20%2f57%2f114441.jpg&ehk=v5j2j9k3l8h5g6i2j7m4k9l4o0p9k5j4l2h7f8d%3d&risl=&pid=ImgRaw&r=0',
    platforms: [
      { name: 'Disney+', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=e_wK5gLgR_4'
  },

  {
    title: 'Psicose',
    year: '1960',
    genre: 'Thriller',
    description: 'Uma secretária em fuga se hospeda em um motel isolado, gerenciado por um jovem estranho, e descobre seus segredos sombrios.',
    rating: '8.4',
    poster: 'https://th.bing.com/th/id/R.5e2dddcdb52f89de539385695fe9f80a?rik=VifRR48JVzMDmA&pid=ImgRaw&r=0',
    trailer: 'https://www.youtube.com/watch?v=NG3-jpK_6yE',
    whereToWatch: [
      { name: 'Globoplay', url: 'https://globoplay.globo.com/psicose/t/Vf0m7wW6d6m6wL1s1t4p4x4y7d4s5f6e8d1q7d8f5d/assistir/' },
      { name: 'Apple TV', url: 'https://tv.apple.com/br/movie/psicose/umc.cmc.2b2p5a7o9m8b2w7c6c4f3f4c6b6b6c2c' }
    ]
  },
  
  {
    title: 'O Enigma de Outro Mundo',
    year: '1982',
    genre: 'Alien',
    description: 'Cientistas na Antártida descobrem uma criatura alienígena que pode imitar perfeitamente outros organismos, criando uma atmosfera de paranoia.',
    rating: '8.2',
    poster: 'https://image.tmdb.org/t/p/w500/rC8GkO9b775t7p84Q3vU19r1cQJ.jpg',
    trailer: 'https://www.youtube.com/watch?v=Gj9c9t6C8iI',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Halloween',
    year: '1978',
    genre: 'Slasher',
    description: 'Na noite de Halloween, um assassino mascarado escapa de uma instituição psiquiátrica e retorna para sua cidade natal em busca de novas vítimas.',
    rating: '7.7',
    poster: 'https://image.tmdb.org/t/p/w500/1X6M6y50sXj801j00T75lJ5t5bQ.jpg',
    trailer: 'https://www.youtube.com/watch?v=T5KEoX43jW0',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Um Lobisomem Americano em Londres',
    year: '1981',
    genre: 'Body Horror',
    description: 'Dois mochileiros americanos são atacados por uma criatura na Inglaterra. Um sobrevive e passa por uma transformação terrível.',
    rating: '7.5',
    poster: 'https://image.tmdb.org/t/p/w500/lM8Kj3U48oE3sU5aP8W1o8D6h2c.jpg',
    trailer: 'https://www.youtube.com/watch?v=Qc1-1eXk8Xo',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  
  {
    title: 'Pânico',
    year: '1996',
    genre: 'Slasher',
    description: 'Um assassino misterioso, obcecado por filmes de terror, começa a caçar um grupo de adolescentes em uma pequena cidade.',
    rating: '7.4',
    poster: 'https://image.tmdb.org/t/p/w500/qj8f244Fq75r1oV8v5lq5w0jQ2v.jpg',
    trailer: 'https://www.youtube.com/watch?v=lU6qR-683a4',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'A Múmia',
    year: '1932',
    genre: 'Sobrenatural',
    description: 'Uma múmia egípcia é ressuscitada por arqueólogos e busca sua amada perdida, causando terror e destruição.',
    rating: '7.1',
    poster: 'https://image.tmdb.org/t/p/w500/v9Qo5Xq4x5Y40w46q6p9n7l1pXf.jpg',
    trailer: 'https://www.youtube.com/watch?v=64nNq1B3_gA',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Alien, o Oitavo Passageiro',
    year: '1979',
    genre: 'Alien',
    description: 'A tripulação de uma nave espacial encontra uma forma de vida alienígena em um planeta remoto. Mal sabem que a criatura se infiltrou em sua nave.',
    rating: '8.5',
    poster: 'https://image.tmdb.org/t/p/w500/2Lh20rQ2m1lVd5N1l2w1i9K7d2w.jpg',
    trailer: 'https://www.youtube.com/watch?v=Sy6S0wV_Xm4',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'A Hora do Pesadelo',
    year: '1984',
    genre: 'Slasher',
    description: 'Um grupo de adolescentes é atormentado em seus sonhos por Freddy Krueger, um assassino que usa um tipo de luva com lâminas nas pontas dos dedos.',
    rating: '7.2',
    poster: 'https://image.tmdb.org/t/p/w500/h2mD4d99pM4G4X1Q5s6p5m5D5l5.jpg',
    trailer: 'https://www.youtube.com/watch?v=d_kR3n2610A',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Suspiria',
    year: '1977',
    genre: 'Culto',
    description: 'Uma estudante americana de dança viaja para uma prestigiada academia de balé em Berlim, apenas para descobrir que o lugar esconde segredos sombrios de bruxaria.',
    rating: '7.4',
    poster: 'https://image.tmdb.org/t/p/w500/pT85aT5j55K4jP0930n4n5w6g6c.jpg',
    trailer: 'https://www.youtube.com/watch?v=3P3s0g1P6vQ',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'IT - A Coisa',
    year: '2017',
    genre: 'Sobrenatural',
    description: 'Um grupo de crianças se une para enfrentar uma criatura maligna que se manifesta como o palhaço Pennywise.',
    rating: '7.3',
    poster: 'https://image.tmdb.org/t/p/w500/9J4d6yCq4qS82wSg8dFh9J7Xz7V.jpg',
    trailer: 'https://www.youtube.com/watch?v=j3d6FmO3h_c',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'O Chamado 2',
    year: '2005',
    genre: 'Fantasma',
    description: 'Uma jornalista investiga uma fita de vídeo amaldiçoada que causa a morte de quem a assiste em sete dias.',
    rating: '7.1',
    poster: 'https://image.tmdb.org/t/p/w500/d59yS7jL738zP5p75bK72yY7L1p.jpg',
    trailer: 'https://www.youtube.com/watch?v=q0iB65j_S0E',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'O Silêncio dos Inocentes',
    year: '1991',
    genre: 'Thriller',
    description: 'Uma jovem agente do FBI busca a ajuda de um assassino e psicopata canibal, Hannibal Lecter, para capturar outro serial killer.',
    rating: '8.6',
    poster: 'https://image.tmdb.org/t/p/w500/4F6ZcE86P2aI7Ff7f2t1wX7Q5w2.jpg',
    trailer: 'https://www.youtube.com/watch?v=W6Mm8gBL7pI',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Poltergeist',
    year: '1982',
    genre: 'Fantasma',
    description: 'Uma família se muda para uma casa nova, apenas para descobrir que ela é assombrada por espíritos malignos que se comunicam através da televisão.',
    rating: '7.3',
    poster: 'https://image.tmdb.org/t/p/w500/1X6M6y50sXj801j00T75lJ5t5bQ.jpg',
    trailer: 'https://www.youtube.com/watch?v=F_f0j7x9p3c',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Nosferatu',
    year: '1922',
    genre: 'Vampiro',
    description: 'Um agente imobiliário viaja para os Cárpatos para fechar um negócio com um conde recluso, que na verdade é um vampiro ancestral.',
    rating: '7.9',
    poster: 'https://image.tmdb.org/t/p/w500/gW5j3fE5aX3T32N7sL1wN1R3qG.jpg',
    trailer: 'https://www.youtube.com/watch?v=FC6rD_K7wB4',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Carrie, a Estranha',
    year: '1976',
    genre: 'Sobrenatural',
    description: 'Uma adolescente tímida e oprimida descobre que tem poderes telecinéticos, que se manifestam de forma violenta após ser humilhada em seu baile de formatura.',
    rating: '7.4',
    poster: 'https://image.tmdb.org/t/p/w500/uF2c6tXl8d9u55Jp1x8uT2sV2tL.jpg',
    trailer: 'https://www.youtube.com/watch?v=aG0K9j3mGjY',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Madrugada dos Mortos',
    year: '1978',
    genre: 'Zumbi',
    description: 'Um grupo de sobreviventes se esconde em um shopping center para se proteger de uma horda de mortos que subitamente voltaram à vida.',
    rating: '7.8',
    poster: 'https://image.tmdb.org/t/p/w500/7aQz8z0x6o0194Q60X3M5Jb24.jpg',
    trailer: 'https://www.youtube.com/watch?v=mYm64g6m1t0',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'A Mosca',
    year: '1986',
    genre: 'Body Horror',
    description: 'Um cientista se transforma em uma criatura horripilante após um de seus experimentos de teletransporte dar errado.',
    rating: '7.6',
    poster: 'https://image.tmdb.org/t/p/w500/e9N4gJ8l4l8N4v2k0n1w4e892e5.jpg',
    trailer: 'https://www.youtube.com/watch?v=Fj-y55Qk-9g',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Uma Noite Alucinante',
    year: '1981',
    genre: 'Possessão',
    description: 'Cinco amigos viajam para uma cabana isolada na floresta, onde acidentalmente libertam demônios que possuíam os mortos.',
    rating: '7.4',
    poster: 'https://image.tmdb.org/t/p/w500/sY6u6q3c4X5xX1v5N4e46q6u8y.jpg',
    trailer: 'https://www.youtube.com/watch?v=coj331q3L2A',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Extermínio',
    year: '2002',
    genre: 'Apocalíptico',
    description: 'Um homem acorda de um coma e descobre que a Grã-Bretanha foi devastada por um vírus que transforma as pessoas em assassinos violentos.',
    rating: '7.6',
    poster: 'https://image.tmdb.org/t/p/w500/uO3p0j5d91x1n8e3w4r50w1t2uL.jpg',
    trailer: 'https://www.youtube.com/watch?v=l_xH3W2g8vQ',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
 
  {
    title: 'Abismo do Medo',
    year: '2005',
    genre: 'Thriller',
    description: 'Seis amigas exploram um sistema de cavernas inexplorado, mas ficam presas e descobrem que não estão sozinhas lá embaixo.',
    rating: '7.2',
    poster: 'https://image.tmdb.org/t/p/w500/d59yS7jL738zP5p75bK72yY7L1p.jpg',
    trailer: 'https://www.youtube.com/watch?v=0k7b3N26_pU',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Nosferatu',
    year: '2025',
    genre: 'Vampiro',
    description: 'Uma nova adaptação do clássico conto de vampiro, com uma abordagem sombria e gótica.',
    rating: null,
    poster: 'URL_DO_POSTER_NOSFERATU_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Lobisomem',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Um conto moderno sobre a maldição do lobisomem, explorando os conflitos internos e externos do protagonista.',
    rating: null,
    poster: 'URL_DO_POSTER_LOBISOMEM_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'O Macaco',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Baseado no conto de Stephen King, o filme explora os horrores que uma antiga entidade pode trazer para uma família.',
    rating: null,
    poster: 'URL_DO_POSTER_O_MACACO_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Presença',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Uma família se muda para uma casa onde uma presença sinistra começa a se manifestar de formas aterrorizantes.',
    rating: null,
    poster: 'URL_DO_POSTER_PRESENCA_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Pecadores',
    year: '2025',
    genre: 'Culto',
    description: 'Um grupo de indivíduos é atraído para um culto misterioso com promessas de salvação, mas encontra um destino sombrio.',
    rating: null,
    poster: 'URL_DO_POSTER_PECADORES_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Until Dawn: Noite de Terror',
    year: '2025',
    genre: 'Slasher',
    description: 'Um grupo de amigos se vê preso em uma cabana isolada, sendo caçados por um assassino implacável.',
    rating: null,
    poster: 'URL_DO_POSTER_UNTIL_DAWN_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'A Mulher no Jardim',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Uma mulher descobre segredos obscuros e sobrenaturais escondidos em um jardim antigo e misterioso.',
    rating: null,
    poster: 'URL_DO_POSTER_A_MULHER_NO_JARDIM_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Premonição 6: Laços de Sangue',
    year: '2025',
    genre: 'Thriller',
    description: 'A mais nova instalação da franquia Premonição, onde um grupo de pessoas escapa da morte, mas a Morte vem atrás deles.',
    rating: null,
    poster: 'URL_DO_POSTER_PREMONICAO_6_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Extermínio: A Evolução',
    year: '2025',
    genre: 'Apocalíptico',
    description: 'A saga de sobrevivência em um mundo devastado por um vírus mortal continua, com novos desafios e ameaças.',
    rating: null,
    poster: 'URL_DO_POSTER_EXTERMINIO_EVOLUCAO_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'M3GAN 2.0',
    year: '2025',
    genre: 'Alien',
    description: 'A boneca assassina M3GAN retorna em uma nova aventura cheia de tecnologia e terror.',
    rating: null,
    poster: 'URL_DO_POSTER_M3GAN_2_0_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Eu Sei o Que Vocês Fizeram no Verão Passado',
    year: '2025',
    genre: 'Slasher',
    description: 'Um remake ou continuação da clássica franquia de terror adolescente, com um novo assassino aterrorizando um grupo de jovens.',
    rating: null,
    poster: 'URL_DO_POSTER_EU_SEI_O_QUE_VOCES_FIZERAM_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'O Ritual',
    year: '2025',
    genre: 'Culto',
    description: 'Um grupo participa de um ritual misterioso que desencadeia forças sombrias e perigosas.',
    rating: null,
    poster: 'URL_DO_POSTER_O_RITUAL_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'A Hora do Mal',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Uma história de possessão e entidades demoníacas que se intensifica durante um período específico.',
    rating: null,
    poster: 'URL_DO_POSTER_A_HORA_DO_MAL_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Os Enforcados',
    year: '202f',
    genre: 'Slasher',
    description: 'Um grupo de amigos é aterrorizado por um assassino que usa métodos cruéis e ligados a um antigo conto folclórico.',
    rating: null,
    poster: 'URL_DO_POSTER_OS_ENFORCADOS_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Juntos',
    year: '2025',
    genre: 'Psicológico',
    description: 'O isolamento e a paranoia levam um grupo de pessoas a confrontar seus medos mais profundos.',
    rating: null,
    poster: 'URL_DO_POSTER_JUNTOS_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Faça Ela Voltar',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Uma tentativa desesperada de trazer alguém de volta do além desencadeia consequências aterrorizantes.',
    rating: null,
    poster: 'URL_DO_POSTER_FACAE LAVOLTAR_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Invocação do Mal 4: O Último Ritual',
    year: '2025',
    genre: 'Possessão',
    description: 'Ed e Lorraine Warren retornam para enfrentar sua mais desafiadora e talvez última investigação paranormal.',
    rating: null,
    poster: 'URL_DO_POSTER_INVOCACAO_DO_MAL_4_2024',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },

  {
    title: 'Sobrenatural',
    year: '2010',
    genre: 'Sobrenatural',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'A Entidade',
    year: '2012',
    genre: 'Sobrenatural',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Cisne Negro',
    year: '2010',
    genre: 'Psicológico',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'O Homem Invisível',
    year: '2020',
    genre: 'Thriller',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'REC',
    year: '2007',
    genre: 'Zumbi',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'A Morte do Demônio',
    year: '2013',
    genre: 'Demônio',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Arraste-me para o Inferno',
    year: '2009',
    genre: 'Demônio',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Drácula de Bram Stoker',
    year: '1992',
    genre: 'Vampiro',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Deixe Ela Entrar',
    year: '2008',
    genre: 'Vampiro',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Entrevista com o Vampiro',
    year: '1994',
    genre: 'Vampiro',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Os Outros',
    year: '2001',
    genre: 'Fantasma',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'A Maldição da Residência Hill',
    year: '2018',
    genre: 'Fantasma',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'O Orfanato',
    year: '2007',
    genre: 'Fantasma',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Possessão',
    year: '2012',
    genre: 'Possessão',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'O Ritual',
    year: '2011',
    genre: 'Possessão',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Verónica',
    year: '2017',
    genre: 'Possessão',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'O Homem de Palha',
    year: '1973',
    genre: 'Culto',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Midsommar',
    year: '2019',
    genre: 'Culto',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'O Sacrifício do Cervo Sagrado',
    year: '2017',
    genre: 'Culto',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Creepshow',
    year: '1982',
    genre: 'Body Horror',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Raw',
    year: '2016',
    genre: 'Body Horror',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'A Estrada',
    year: '2009',
    genre: 'Apocalíptico',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Filhos da Esperança',
    year: '2006',
    genre: 'Apocalíptico',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Bird Box',
    year: '2018',
    genre: 'Apocalíptico',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Alien: O Oitavo Passageiro',
    year: '1979',
    genre: 'Alien',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'A Coisa',
    year: '1982',
    genre: 'Alien',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Sinais',
    year: '2002',
    genre: 'Alien',
    description: null,
    rating: null,
    poster: null,
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  }
];

const moviesGrid = document.querySelector(".movies-grid");
const genreDropdownBtn = document.getElementById("genreDropdownBtn");
const genreDropdownMenu = document.getElementById("genreDropdownMenu");
const selectedGenre = document.getElementById("selectedGenre");
const currentGenreTitle = document.getElementById("currentGenreTitle");

document.addEventListener("DOMContentLoaded", () => {
  renderMovies();
});

function renderMovies(filter = "all") {
  moviesGrid.innerHTML = "";
  const filtered = filter === "all" ? movies : movies.filter(m => m.genre === filter);
  
  if (filtered.length === 0) {
    moviesGrid.innerHTML = '<p class="no-movies-message">Nenhum filme encontrado para este gênero, mas continue explorando... se tiver coragem!</p>';
    return;
  }

  filtered.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    const platformsHTML = movie.platforms && movie.platforms.length > 0 ?
      `<div class="platforms-container">
        <button class="watch-on-btn">
          <span class="btn-text">Onde Assistir</span>
          <span class="arrow-icon">▼</span>
        </button>
        <div class="platforms-dropdown">
          <div class="platform-logos">
            ${movie.platforms.map(platform => `
              <img src="${platform.logo}" alt="${platform.name}" class="platform-logo">
            `).join('')}
          </div>
        </div>
      </div>` : '';

    const trailerHTML = movie.trailer ? `<a href="${movie.trailer}" target="_blank" class="trailer-btn">Ver Trailer</a>` : '';

    card.innerHTML = `
      <div class="movie-poster" style="background-image: url('${movie.poster}');">
        ${movie.rating ? `<div class="movie-rating-overlay">${movie.rating}</div>` : ''}
      </div>
      <div class="movie-content">
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-year-genre">
          <span>${movie.year}</span>
          <span>${movie.genre}</span>
        </div>
        <p class="movie-description">${movie.description}</p>
        <div class="movie-buttons-container">
          ${trailerHTML}
          ${platformsHTML}
        </div>
      </div>
    `;
    moviesGrid.appendChild(card);
  });
  
  // Adiciona o evento de clique após a renderização dos filmes
  document.querySelectorAll(".watch-on-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const dropdown = btn.nextElementSibling;
      btn.classList.toggle("active");
      dropdown.classList.toggle("show");
    });
  });
}

// Dropdown de gênero
genreDropdownBtn.addEventListener("click", () => {
  genreDropdownMenu.classList.toggle("show");
  genreDropdownBtn.classList.toggle("active");
});

// Dropdown e filtro de filmes
const genreDropdownItems = document.querySelectorAll(".dropdown-item");

genreDropdownItems.forEach(item => {
  item.addEventListener("click", () => {
    genreDropdownItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    const genre = item.dataset.genre;
    selectedGenre.textContent = item.textContent;
    currentGenreTitle.textContent = genre === "all" ? "🔥 Todos os Clássicos Aterrorizantes 🔥" : `🎬 Filmes de ${genre} 🎬`;
    renderMovies(genre);
    genreDropdownMenu.classList.remove("show");
    genreDropdownBtn.classList.remove("active");
  });
});
