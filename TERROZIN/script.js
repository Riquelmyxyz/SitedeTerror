const movies = [
  {
    title: 'O Iluminado',
    year: '1980',
    genre: 'Psicológico',
    description: 'Jack Torrance, um escritor em crise e alcoólatra em recuperação, aceita o trabalho de zelador de inverno no isolado Hotel Overlook, nas montanhas do Colorado. Ele se muda para lá com sua esposa Wendy e seu filho Danny, que possui habilidades psíquicas chamadas de “iluminação”, capazes de revelar horrores do passado e prever eventos futuros. Com o isolamento e a influência sobrenatural do hotel, Jack começa a perder a sanidade, colocando sua família em perigo.',
    rating: '8.4',
    poster: 'https://i.pinimg.com/736x/a2/0e/70/a20e700f99b4391d83031c9f12a8ed8e.jpg',
    platforms: [
      { name: 'HBO Max', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' },
      { name: 'Apple TV', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=dSQ3yN5yJ0g'
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
    description: 'O filme segue três estudantes de cinema — Heather Donahue, Michael C. Williams e Joshua Leonard — que desaparecem enquanto gravavam um documentário sobre a lenda da Bruxa de Blair em Burkittsville, Maryland. O filme é apresentado como a gravação que foi encontrada um ano depois do desaparecimento. O trio se perde na floresta, e eventos bizarros e assustadores começam a acontecer, levando-os a um estado de terror crescente.',
    rating: '6.5',
    poster: 'https://m.media-amazon.com/images/S/pv-target-images/55c94bd94a5a91e7cac3d69b704c2d538d5913c00f99f1954ec8673be8f251d1.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple TV', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=VRL1-TxOqKk'
  },
  {
    title: 'O Chamado',
    year: '2002',
    genre: 'Fantasma',
    description: 'Rachel Keller (interpretada por Naomi Watts) é uma jornalista que investiga a misteriosa morte de sua sobrinha. Ela descobre que a tragédia está ligada a um vídeo amaldiçoado: quem o assiste morre exatamente sete dias depois. Quando Rachel e seu filho assistem ao vídeo, ela precisa correr contra o tempo para desvendar o mistério e impedir que a profecia se cumpra.',
    rating: '7.0',
    poster: 'https://tse3.mm.bing.net/th/id/OIP.4lh78bOZQc_2RKcstEln-AHaLH?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=sVjDYHcmRqQ'
  },
  {
    title: 'Um Lugar Silencioso',
    year: '2018',
    genre: 'Alien',
    description: 'Em um mundo pós-apocalíptico, criaturas alienígenas com audição extremamente sensível dizimaram grande parte da humanidade. Elas atacam ao menor sinal de som. A história acompanha a família Abbott, que vive em silêncio absoluto para sobreviver. Eles se comunicam por linguagem de sinais, caminham descalços e tomam medidas rigorosas para evitar qualquer ruído. Mas quando Evelyn (Emily Blunt) está prestes a dar à luz, manter o silêncio se torna quase impossível.',
    rating: '7.5',
    poster: 'https://dicasdecinema.net/wp-content/uploads/2019/01/um-lugar-silencioso.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }, 
      { name: 'Netflix', logo: 'https://i.pinimg.com/1200x/b6/3c/86/b63c861466a49f4a296806069be7f097.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=8W6iMmhVDgE'
  },
  {
    title: 'Corra!',
    year: '2017',
    genre: 'Psicológico',
    description: 'Chris (Daniel Kaluuya), um jovem negro, está prestes a conhecer a família de sua namorada branca, Rose (Allison Williams). A princípio, o comportamento excessivamente cordial da família parece apenas desconfortável. Mas à medida que o fim de semana avança, Chris percebe que há algo muito mais sinistro por trás da fachada amigável — e precisa encontrar uma forma de escapar.',
    rating: '7.7',
    poster: 'https://tse2.mm.bing.net/th/id/OIP.30Vg7xhjM1RUE8k7L64FhwHaLH?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=mDGV5UucTu8'
  },
  {
    title: 'O Babadook',
    year: '2014',
    genre: 'Psicológico',
    description: 'Amelia (Essie Davis) é uma mãe viúva que luta para lidar com a perda do marido e os comportamentos inquietantes de seu filho, Samuel. A tensão aumenta quando um misterioso livro infantil chamado "O Senhor Babadook" aparece em casa. A história do livro fala sobre uma criatura sombria que se infiltra na vida de quem o conhece. À medida que eventos estranhos começam a acontecer, Amelia precisa enfrentar seus próprios traumas — e o monstro que pode ser mais real do que ela imagina. ',
    rating: '6.8',
    poster: 'https://br.web.img2.acsta.net/pictures/14/01/23/02/58/013133.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=uLdqc4SFVsA'
  },
  {
    title: 'A Corrente do Mal',
    year: '2014',
    genre: 'Sobrenatural',
    description: 'Jay (Maika Monroe) é uma jovem que, após uma relação sexual, descobre que foi amaldiçoada por uma entidade sobrenatural que a persegue lentamente — e só ela pode vê-la. A única forma de se livrar da maldição é transmiti-la para outra pessoa por meio do sexo. Mas se a nova vítima morrer, a entidade volta a perseguir o anterior. Jay precisa decidir entre fugir, lutar ou passar adiante essa corrente maligna. ',
    rating: '6.8',
    poster: 'https://i.pinimg.com/736x/62/1f/3f/621f3f9f9b62a0e67b35a45c5b1c8584.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=s8EE554SvpI'
  },
  {
    title: 'O Grito',
    year: '2004',
    genre: 'Fantasma',
    description: 'Um espírito vingativo e assustador assombra uma casa no Japão e infecta todos que entram nela com uma maldição mortal.',
    rating: '5.9',
    poster: 'https://i.pinimg.com/1200x/7d/e6/5c/7de65cc9339e787bc689f152dccda64a.jpg',
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
    poster: 'https://i.pinimg.com/736x/0c/7a/ae/0c7aaeec1fc8a649e17e16a90cb16284.jpg',
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
    poster: 'https://i.pinimg.com/736x/f7/79/fe/f779fe3b824cbcfb5656db6339ca3b75.jpg',
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
    poster: 'https://i.pinimg.com/736x/1a/13/bc/1a13bc2d05bd65534b71a3790518e041.jpg',
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
    poster: 'https://i.pinimg.com/736x/81/54/c9/8154c9e944b9b0c14314a83a68b04192.jpg',
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
    poster: 'https://i.pinimg.com/1200x/bd/13/ae/bd13ae04278d64637bd83acd00f12ee1.jpg',
    trailer: 'https://www.youtube.com/watch?v=Gj9c9t6C8iI',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Halloween',
    year: '1978',
    genre: 'Slasher',
    description: 'Na noite de Halloween, um assassino mascarado escapa de uma instituição psiquiátrica e retorna para sua cidade natal em busca de novas vítimas.',
    rating: '7.7',
    poster: 'https://i.pinimg.com/736x/e4/fe/07/e4fe07e0648bb5a167b3fe7d34b0852b.jpg',
    trailer: 'https://www.youtube.com/watch?v=T5KEoX43jW0',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Um Lobisomem Americano em Londres',
    year: '1981',
    genre: 'Body Horror',
    description: 'Dois mochileiros americanos são atacados por uma criatura na Inglaterra. Um sobrevive e passa por uma transformação terrível.',
    rating: '7.5',
    poster: 'https://i.pinimg.com/1200x/2e/99/92/2e9992c2fafc6ceec3730c0d2e84050c.jpg',
    trailer: 'https://www.youtube.com/watch?v=Qc1-1eXk8Xo',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  
  {
    title: 'Pânico',
    year: '1996',
    genre: 'Slasher',
    description: 'Um assassino misterioso, obcecado por filmes de terror, começa a caçar um grupo de adolescentes em uma pequena cidade.',
    rating: '7.4',
    poster: 'https://i.pinimg.com/736x/3c/a9/df/3ca9dfd5a765dc02e67ccd8dcaddc976.jpg',
    trailer: 'https://www.youtube.com/watch?v=lU6qR-683a4',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Sorria',
    year: '1932',
    genre: 'Demônio',
    description: 'Uma múmia egípcia é ressuscitada por arqueólogos e busca sua amada perdida, causando terror e destruição.',
    rating: '7.1',
    poster: 'https://i.pinimg.com/736x/ef/c0/01/efc0018a5a3290b96a2ba1898f4b42b7.jpg',
    trailer: 'https://www.youtube.com/watch?v=64nNq1B3_gA',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Alien, o Oitavo Passageiro',
    year: '1979',
    genre: 'Alien',
    description: 'A tripulação de uma nave espacial encontra uma forma de vida alienígena em um planeta remoto. Mal sabem que a criatura se infiltrou em sua nave.',
    rating: '8.5',
    poster: 'https://i.pinimg.com/736x/e9/df/cb/e9dfcbb9bab4ce2b06ea365448a4b8ef.jpg',
    trailer: 'https://www.youtube.com/watch?v=Sy6S0wV_Xm4',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'A Hora do Pesadelo',
    year: '1984',
    genre: 'Slasher',
    description: 'Um grupo de adolescentes é atormentado em seus sonhos por Freddy Krueger, um assassino que usa um tipo de luva com lâminas nas pontas dos dedos.',
    rating: '7.2',
    poster: 'https://i.pinimg.com/1200x/4c/10/fb/4c10fbd837821e4087be3b483c133499.jpg',
    trailer: 'https://www.youtube.com/watch?v=d_kR3n2610A',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Suspiria',
    year: '1977',
    genre: 'Culto',
    description: 'Uma estudante americana de dança viaja para uma prestigiada academia de balé em Berlim, apenas para descobrir que o lugar esconde segredos sombrios de bruxaria.',
    rating: '7.4',
    poster: 'https://i.pinimg.com/736x/70/0b/2b/700b2b36ce38e5532c13d77c8db8b29f.jpg',
    trailer: 'https://www.youtube.com/watch?v=3P3s0g1P6vQ',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'IT - A Coisa',
    year: '2017',
    genre: 'Sobrenatural',
    description: 'Um grupo de crianças se une para enfrentar uma criatura maligna que se manifesta como o palhaço Pennywise.',
    rating: '7.3',
    poster: 'https://i.pinimg.com/736x/f3/80/58/f38058b1a34ede5900444dc5937d7250.jpg',
    trailer: 'https://www.youtube.com/watch?v=j3d6FmO3h_c',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'O Chamado 2',
    year: '2005',
    genre: 'Fantasma',
    description: 'Uma jornalista investiga uma fita de vídeo amaldiçoada que causa a morte de quem a assiste em sete dias.',
    rating: '7.1',
    poster: 'https://i.pinimg.com/736x/61/37/0c/61370c6f605eb1738ea325fe2fdba219.jpg',
    trailer: 'https://www.youtube.com/watch?v=q0iB65j_S0E',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'O Silêncio dos Inocentes',
    year: '1991',
    genre: 'Thriller',
    description: 'Uma jovem agente do FBI busca a ajuda de um assassino e psicopata canibal, Hannibal Lecter, para capturar outro serial killer.',
    rating: '8.6',
    poster: 'https://i.pinimg.com/1200x/54/c5/06/54c506983fa4efb5fc71af49810b8f55.jpg',
    trailer: 'https://www.youtube.com/watch?v=W6Mm8gBL7pI',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Poltergeist',
    year: '1982',
    genre: 'Fantasma',
    description: 'Uma família se muda para uma casa nova, apenas para descobrir que ela é assombrada por espíritos malignos que se comunicam através da televisão.',
    rating: '7.3',
    poster: 'https://i.pinimg.com/736x/67/46/1a/67461aafc0b7fcde90ad343cfa0656b9.jpg',
    trailer: 'https://www.youtube.com/watch?v=F_f0j7x9p3c',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Longlegs',
    year: '2024',
    genre: 'Psicológico',
    description: 'A trama acompanha Lee Harker (Maika Monroe), uma jovem agente do FBI convocada para investigar uma série de assassinatos arquivados. Conforme ela mergulha no caso, descobre que os crimes estão ligados a rituais ocultistas e que há uma conexão pessoal perturbadora entre ela e o assassino — interpretado por Nicolas Cage, em uma performance intensa e enigmática',
    rating: '7.0',
    poster: 'https://image.tmdb.org/t/p/original/jpTxtwM1AXzEwYghzF06zsSF0pc.jpg',
    trailer: 'https://www.youtube.com/watch?v=FC6rD_K7wB4',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Carrie, a Estranha',
    year: '2013',
    genre: 'Sobrenatural',
    description: 'Uma adolescente tímida e oprimida descobre que tem poderes telecinéticos, que se manifestam de forma violenta após ser humilhada em seu baile de formatura.',
    rating: '6,0',
    poster: 'https://i.pinimg.com/1200x/02/b3/fe/02b3fed5fa3fe2f1c8d64ca23cfe041a.jpg',
    trailer: 'https://www.youtube.com/watch?v=aG0K9j3mGjY',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Madrugada dos Mortos',
    year: '1978',
    genre: 'Zumbi',
    description: 'Um grupo de sobreviventes se esconde em um shopping center para se proteger de uma horda de mortos que subitamente voltaram à vida.',
    rating: '7.8',
    poster: 'https://i.pinimg.com/1200x/6e/fc/10/6efc10fb89724072dfc2a6da9ddd24b3.jpg',
    trailer: 'https://www.youtube.com/watch?v=mYm64g6m1t0',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'A Mosca',
    year: '1986',
    genre: 'Body Horror',
    description: 'Um cientista se transforma em uma criatura horripilante após um de seus experimentos de teletransporte dar errado.',
    rating: '7.6',
    poster: 'https://i.pinimg.com/736x/48/02/81/48028120c3185a69614ee2fc1c9955ec.jpg',
    trailer: 'https://www.youtube.com/watch?v=Fj-y55Qk-9g',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'A Morte Do Demônio: A Ascenção',
    year: '2023',
    genre: 'Demônio',
    description: 'Cinco amigos viajam para uma cabana isolada na floresta, onde acidentalmente libertam demônios que possuíam os mortos.',
    rating: '6,5',
    poster: 'https://i.pinimg.com/1200x/e2/77/23/e27723f80ff94c19c112bef9a9ea5eb7.jpg',
    trailer: 'https://www.youtube.com/watch?v=coj331q3L2A',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Extermínio',
    year: '2002',
    genre: 'Apocalíptico',
    description: 'Um homem acorda de um coma e descobre que a Grã-Bretanha foi devastada por um vírus que transforma as pessoas em assassinos violentos.',
    rating: '7.6',
    poster: 'https://i.pinimg.com/736x/4f/59/6d/4f596d2f9f5fef4b2b57b51f04e836aa.jpg',
    trailer: 'https://www.youtube.com/watch?v=l_xH3W2g8vQ',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
 
  {
    title: 'Abismo do Medo',
    year: '2005',
    genre: 'Thriller',
    description: 'Seis amigas exploram um sistema de cavernas inexplorado, mas ficam presas e descobrem que não estão sozinhas lá embaixo.',
    rating: '7.2',
    poster: 'https://i.pinimg.com/736x/a8/5e/ea/a85eea4b74be033625155cc65eab9c10.jpg',
    trailer: 'https://www.youtube.com/watch?v=0k7b3N26_pU',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Nosferatu',
    year: '2025',
    genre: 'Vampiro',
    description: 'Uma nova adaptação do clássico conto de vampiro, com uma abordagem sombria e gótica.',
    rating: null,
    poster: 'https://tse3.mm.bing.net/th/id/OIP.hHRHKSqaFMwfiQ-K4ndvRQHaK-?cb=thfvnextucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Lobisomem',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Um conto moderno sobre a maldição do lobisomem, explorando os conflitos internos e externos do protagonista.',
    rating: null,
    poster: 'https://m.media-amazon.com/images/M/MV5BZDc0OWYzYzQtNDlkMi00OTE2LWI1ZTUtMDIwZDg2MDY4MWFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'O Macaco',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Baseado no conto de Stephen King, o filme explora os horrores que uma antiga entidade pode trazer para uma família.',
    rating: null,
    poster: 'https://br.web.img2.acsta.net/img/d2/e5/d2e517612de9e1db2463aeec34dc6d29.jpg',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Presença',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Uma família se muda para uma casa onde uma presença sinistra começa a se manifestar de formas aterrorizantes.',
    rating: null,
    poster: 'https://br.web.img3.acsta.net/img/6b/ea/6beac990070ef019623145592b64d981.jpg',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'O Exorcista: O Devoto',
    year: '2023',
    genre: 'Psicológico',
    description: 'Após perder sua esposa grávida em um terremoto no Haiti, Victor Fielding (Leslie Odom Jr.) cria sozinho sua filha Angela. Doze anos depois, Angela e sua amiga Katherine desaparecem na floresta e retornam três dias depois — sem memória do que aconteceu. A partir daí, eventos sobrenaturais começam a se intensificar, levando Victor a buscar ajuda de Chris MacNeil (Ellen Burstyn), a única pessoa viva que enfrentou algo semelhante no passado.',
    rating: '4,8',
    poster: 'https://cinebreak.com.br/wp-content/uploads/2023/07/o-exorcista-o-devoto-ganha-trailer-com-sequencia-para-2025-veja.jpg',
    trailer: 'https://www.youtube.com/watch?v=96RCGOaNuCM',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Until Dawn: Noite de Terror',
    year: '2025',
    genre: 'Slasher',
    description: 'Um grupo de amigos se vê preso em uma cabana isolada, sendo caçados por um assassino implacável.',
    rating: null,
    poster: 'https://static.claquete.com.br/fotos/filmes/poster/16295_medio.jpg',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'A Mulher no Jardim',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Uma mulher descobre segredos obscuros e sobrenaturais escondidos em um jardim antigo e misterioso.',
    rating: null,
    poster: 'https://br.web.img2.acsta.net/img/18/ca/18ca405e8d949e0cdd4c0b80aaf4db99.jpg',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Premonição 6: Laços de Sangue',
    year: '2025',
    genre: 'Thriller',
    description: 'A mais nova instalação da franquia Premonição, onde um grupo de pessoas escapa da morte, mas a Morte vem atrás deles.',
    rating: null,
    poster: 'https://nouse.com.br/wp-content/uploads/2025/03/Premonicao-6-Lacos-de-Sangue-ganha-novo-trailer-inedito.jpg',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Extermínio: A Evolução',
    year: '2025',
    genre: 'Apocalíptico',
    description: 'A saga de sobrevivência em um mundo devastado por um vírus mortal continua, com novos desafios e ameaças.',
    rating: null,
    poster: 'https://tse1.mm.bing.net/th/id/OIP.BG510tAxW2Inbtw4X4MEkwHaK-?cb=thfvnextucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'A Babá ',
    year: '2017',
    genre: 'Culto',
    description: 'Cole, um garoto tímido de 12 anos, é apaixonado por sua babá Bee — linda, divertida e aparentemente perfeita. Mas tudo muda quando ele decide espioná-la após ir para a cama e descobre que ela lidera um culto satânico com seus amigos adolescentes. A partir daí, Cole precisa lutar pela própria vida enquanto tenta escapar dos assassinos, usando criatividade, coragem e muita sorte.',
    rating: null,
    poster: 'https://i.ytimg.com/vi/XRujdNZVWUU/maxresdefault.jpg',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Eu Sei o Que Vocês Fizeram no Verão Passado',
    year: '2025',
    genre: 'Slasher',
    description: 'Um remake ou continuação da clássica franquia de terror adolescente, com um novo assassino aterrorizando um grupo de jovens.',
    rating: null,
    poster: 'https://api.claquete.com.br/uploads/poster/16065_medio.jpg',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'O Ritual',
    year: '2025',
    genre: 'Culto',
    description: 'Um grupo participa de um ritual misterioso que desencadeia forças sombrias e perigosas.',
    rating: null,
    poster: 'https://horrorfuel.com/wp-content/uploads/2025/03/the-ritual-2025.jpg',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'A Hora do Mal',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Uma história de possessão e entidades demoníacas que se intensifica durante um período específico.',
    rating: null,
    poster: 'https://live.staticflickr.com/65535/54485707676_9495b1c07e_o.jpg',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Os Enforcados',
    year: '202f',
    genre: 'Slasher',
    description: 'Um grupo de amigos é aterrorizado por um assassino que usa métodos cruéis e ligados a um antigo conto folclórico.',
    rating: null,
    poster: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/6x3670ZuV4v7YUome28WSGlSblv.jpg',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Juntos',
    year: '2025',
    genre: 'Psicológico',
    description: 'O isolamento e a paranoia levam um grupo de pessoas a confrontar seus medos mais profundos.',
    rating: null,
    poster: 'https://m.media-amazon.com/images/M/MV5BNzA4YjY5ZjEtMWU5NC00MWFmLWFkOGItZDBhMzBjNWMyNzE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Faça Ela Voltar',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Uma tentativa desesperada de trazer alguém de volta do além desencadeia consequências aterrorizantes.',
    rating: null,
    poster: 'https://tse1.mm.bing.net/th/id/OIF.PGSgn8yyy91jvrrFkNQmZg?cb=thfvnextucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  {
    title: 'Invocação do Mal 2',
    year: '2016',
    genre: 'Possessão',
    description: 'Ed e Lorraine Warren retornam para enfrentar sua mais desafiadora e talvez última investigação paranormal.',
    rating: null,
    poster: 'https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/5985/filme_5985.jpg',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },

  {
    title: 'Annabelle 2 - A Criação do Mal',
    year: '2017',
    genre: 'Possessão',
    description: null,
    rating: null,
    poster: 'https://tse1.mm.bing.net/th/id/OIP.vwqPWnEeHIGdu1C57EBh7AHaK_?cb=thfvnextucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    trailer: 'URL_DO_TRAILER',
    whereToWatch: 'URL_DA_PLATAFORMA'
  },
  
  {
    title: 'Sobrenatural',
    year: '2010',
    genre: 'Sobrenatural',
    description: 'A história acompanha a família Lambert, que se muda para uma nova casa em busca de recomeço. Tudo parece normal até que o filho Dalton entra em coma inexplicavelmente. A princípio, os pais acreditam que a casa está mal-assombrada, mas logo descobrem que o problema está ligado ao próprio Dalton, que se tornou um canal para entidades sobrenaturais. A trama mergulha em dimensões espirituais e forças ocultas, com muitos sustos e tensão',
    rating: '8,0',
    poster: 'https://tse1.explicit.bing.net/th/id/OIP.AlveF5zfaVT9SeFLhEbroQHaLH?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3',
    platforms: [
      { name: 'HBO Max', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' },
      { name: 'Apple TV', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' },
      { name: 'Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=yHfaQy2vAG0'
  },
  {
    title: 'A Entidade',
    year: '2012',
    genre: 'Sobrenatural',
    description: 'Ellison Oswalt, um escritor de romances policiais, muda-se com a família para uma casa onde ocorreu um assassinato brutal. No sótão, ele encontra rolos de filmes caseiros que mostram assassinatos de diferentes famílias ao longo das décadas. Conforme investiga, descobre a presença de uma entidade maligna chamada Bughuul, que se alimenta de almas humanas — especialmente de crianças. A tensão cresce à medida que eventos sobrenaturais se intensificam.',
    rating: '7,4',
    poster: 'https://th.bing.com/th/id/R.2725d966ce0433bf49d7e5965ce58003?rik=n6750Jseji9Omg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-HOX3efsz71U%2fUeI26UH2k3I%2fAAAAAAAAA7g%2fu1yJnZnu0Og%2fs1600%2f3%2b-%2bA%2bENTIDADE.jpg&ehk=hyfQr3B8QSymUovsUXzPM60Dx0tQruTxAili%2b%2fsVzmI%3d&risl=&pid=ImgRaw&r=0',
    platforms: [
      { name: 'Apple TV', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' },
      { name: 'Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=yv9oGgGDBQE'
  },
  {
    title: 'Cisne Negro',
    year: '2010',
    genre: 'Psicológico',
    description: 'Nina (Natalie Portman) é uma bailarina dedicada que vive sob intensa pressão para alcançar a perfeição. Quando consegue o papel principal na montagem de O Lago dos Cisnes, ela precisa incorporar tanto o Cisne Branco — gracioso e inocente — quanto o Cisne Negro — sedutor e sombrio. À medida que mergulha no papel, Nina começa a perder o controle da realidade, enfrentando delírios, rivalidades e conflitos internos que a levam a uma espiral psicológica perturbadora.',
    rating: '8,0',
    poster: 'https://i.pinimg.com/originals/cb/3d/8d/cb3d8d46085e43599ed973e1aa9c1b58.jpg',
    platforms: [
      { name: 'Disney+', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
      { name: 'Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=5jaI1XOB-bs'
  },
  {
    title: 'O Homem Invisível',
    year: '2020',
    genre: 'Thriller',
    description: 'Cecilia Kass (Elisabeth Moss) foge de um relacionamento abusivo com Adrian Griffin, um cientista brilhante especializado em óptica. Após sua suposta morte, Cecilia começa a ser atormentada por eventos inexplicáveis e acredita que Adrian encontrou uma forma de se tornar invisível. O filme mistura terror psicológico com ficção científica, explorando temas como abuso, manipulação e descrença social',
    rating: '7,1',
    poster: 'https://tse1.explicit.bing.net/th/id/OIP.MPTyzuVLcmE_xnmZcoft8gHaFS?r=0&cb=thfc1&w=700&h=500&rs=1&pid=ImgDetMain&o=7&rm=3',
    platforms: [
      { name: 'Apple TV', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' },
      { name: 'Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=L91CO7wOqVw'
  },
  {
    title: 'REC',
    year: '2007',
    genre: 'Zumbi',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'A Morte do Demônio',
    year: '2013',
    genre: 'Demônio',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'Arraste-me para o Inferno',
    year: '2009',
    genre: 'Demônio',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'Drácula de Bram Stoker',
    year: '1992',
    genre: 'Vampiro',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'Deixe Ela Entrar',
    year: '2008',
    genre: 'Vampiro',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'Entrevista com o Vampiro',
    year: '1994',
    genre: 'Vampiro',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'Os Outros',
    year: '2001',
    genre: 'Fantasma',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'A Maldição da Residência Hill',
    year: '2018',
    genre: 'Fantasma',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'O Orfanato',
    year: '2007',
    genre: 'Fantasma',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'Possessão',
    year: '2012',
    genre: 'Possessão',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'O Ritual',
    year: '2011',
    genre: 'Possessão',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'Verónica',
    year: '2017',
    genre: 'Possessão',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'O Homem de Palha',
    year: '1973',
    genre: 'Culto',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'Midsommar',
    year: '2019',
    genre: 'Culto',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'O Sacrifício do Cervo Sagrado',
    year: '2017',
    genre: 'Culto',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'Creepshow',
    year: '1982',
    genre: 'Body Horror',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'Raw',
    year: '2016',
    genre: 'Body Horror',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'A Estrada',
    year: '2009',
    genre: 'Apocalíptico',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'Filhos da Esperança',
    year: '2006',
    genre: 'Apocalíptico',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'Bird Box',
    year: '2018',
    genre: 'Apocalíptico',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'Alien: O Oitavo Passageiro',
    year: '1979',
    genre: 'Alien',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'A Coisa',
    year: '1982',
    genre: 'Alien',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
  },
  {
    title: 'Sinais',
    year: '2002',
    genre: 'Alien',
    description: null,
    rating: null,
    poster: null,
    platforms: [
      { name: 'HBO Max', logo: '' },
      { name: 'Apple TV', logo: '' }
    ],
    trailer: ''
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


