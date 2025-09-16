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
    description: 'O filme segue uma enfermeira americana chamada Karen (interpretada por Sarah Michelle Gellar) que está morando e trabalhando em Tóquio. Ela é exposta a uma maldição misteriosa e violenta que nasce quando uma pessoa morre em um momento de extremo terror ou tristeza. Essa maldição transforma a casa onde a morte ocorreu em um lugar assombrado, onde os espíritos da família morta atacam qualquer um que ouse entrar. A maldição é voraz e não perdoa ninguém, passando a se espalhar para outras vítimas, uma por uma.',
    rating: '5.9',
    poster: 'https://i.pinimg.com/1200x/7d/e6/5c/7de65cc9339e787bc689f152dccda64a.jpg',
    platforms: [
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=IcyoEBGFwWU'
  },
  {
    title: 'Annabelle',
    year: '2014',
    genre: 'Possessão',
    description: 'John presenteia sua esposa grávida, Mia, com uma rara boneca antiga chamada Annabelle. Mas a alegria logo se transforma em horror quando membros de uma seita satânica invadem a casa do casal e realizam um ritual sangrento envolvendo a boneca. A partir daí, eventos sobrenaturais e aterrorizantes passam a assombrar a vida de Mia, revelando que Annabelle é muito mais do que um simples brinquedo. ',
    rating: '5.4',
    poster: 'https://i.pinimg.com/736x/0c/7a/ae/0c7aaeec1fc8a649e17e16a90cb16284.jpg',
    platforms: [
      { name: 'HBO Max', logo: ' https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' },
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=kHl6aU30pIo'
  },
  {
    title: 'O Massacre da Serra Elétrica',
    year: '1974',
    genre: 'Slasher',
    description: 'Cinco jovens viajam pelo interior do Texas para visitar o túmulo de um parente, mas acabam se deparando com uma casa isolada e uma família de canibais liderada por Leatherface, um assassino que usa uma máscara feita de pele humana e uma serra elétrica como arma. O filme é inspirado em crimes reais e se tornou um marco do gênero slasher por seu estilo cru e perturbador. ',
    rating: '7.4',
    poster: 'https://i.pinimg.com/736x/f7/79/fe/f779fe3b824cbcfb5656db6339ca3b75.jpg',
    platforms: [
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' },
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=j0x2MtFNbVQ'
  },
  {
    title: 'A Noite dos Mortos-Vivos',
    year: '1968',
    genre: 'Zumbi',
    description: 'Após a queda de um satélite, uma radiação misteriosa faz com que os mortos comecem a sair de suas covas e atacar os vivos. Um grupo de sobreviventes se refugia em uma casa de fazenda isolada, tentando resistir à crescente horda de zumbis famintos. O filme é uma crítica social disfarçada de horror, abordando temas como racismo, paranoia e desespero coletivo. ',
    rating: '7.8',
    poster: 'https://i.pinimg.com/736x/1a/13/bc/1a13bc2d05bd65534b71a3790518e041.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=pgAKlPrt2rA'
  },
  {
    title: '28 Dias Depois',
    year: '2002',
    genre: 'Zumbi',
    description: 'Um grupo de ativistas invade um laboratório em Cambridge e liberta um chimpanzé infectado com um vírus altamente contagioso que provoca extrema agressividade — o vírus da raiva. Em poucas horas, o surto se espalha por toda a Grã-Bretanha, mergulhando o país no caos. Vinte e oito dias depois, Jim (Cillian Murphy) acorda de um coma em um hospital abandonado e descobre que o mundo que conhecia não existe mais. Ele se junta a outros sobreviventes em busca de abrigo, enfrentando não apenas os infectados, mas também os horrores da própria humanidade. ',
    rating: '7.5',
    poster: 'https://i.pinimg.com/736x/81/54/c9/8154c9e944b9b0c14314a83a68b04192.jpg',
    platforms: [
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' },
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'HBO MAX', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=mWEhfF27O0c'
  },

  {
    title: 'Psicose',
    year: '1960',
    genre: 'Thriller',
    description: 'Marion Crane, uma jovem secretária, rouba uma grande quantia de dinheiro e foge da cidade. Durante sua fuga, ela decide se hospedar no isolado Bates Motel, administrado por Norman Bates, um homem tímido e perturbador que vive com sua mãe. O que parecia apenas uma parada estratégica se transforma em um pesadelo, culminando em uma das cenas mais icônicas da história do cinema — o famoso assassinato no chuveiro. ',
    rating: '8.5',
    poster: 'https://th.bing.com/th/id/R.5e2dddcdb52f89de539385695fe9f80a?rik=VifRR48JVzMDmA&pid=ImgRaw&r=0',
    platforms: [
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' },
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=wfGjWZmyvfo',
  },
  
  {
    title: 'O Enigma de Outro Mundo',
    year: '1982',
    genre: 'Alien',
    description: 'Na vastidão gelada da Antártica, uma equipe de 12 pesquisadores americanos se depara com um mistério mortal: um alienígena capaz de imitar perfeitamente qualquer ser vivo que infecta. Quando um cachorro aparentemente comum chega à base, eventos estranhos começam a acontecer. A paranoia se instala — ninguém sabe quem ainda é humano. A tensão cresce à medida que os cientistas tentam descobrir quem foi "copiado" e como eliminar a criatura antes que ela escape para o mundo exterior. ',
    rating: '8.2',
    poster: 'https://i.pinimg.com/1200x/bd/13/ae/bd13ae04278d64637bd83acd00f12ee1.jpg',
    platforms: [
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' },
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=V0m6YCDzvK0',
  },
  {
    title: 'Halloween',
    year: '1978',
    genre: 'Slasher',
    description: 'Na noite de Halloween de 1963, o jovem Michael Myers, de apenas seis anos, assassina brutalmente sua irmã mais velha. Quinze anos depois, ele escapa de um hospital psiquiátrico e retorna à cidade de Haddonfield, Illinois, para continuar sua onda de assassinatos. A jovem Laurie Strode (Jamie Lee Curtis) se torna seu principal alvo, enquanto o psiquiatra Dr. Sam Loomis tenta impedir o massacre. O filme é conhecido por sua atmosfera tensa, trilha sonora icônica e por ter inaugurado uma nova era no cinema de terror. ',
    rating: '7.7',
    poster: 'https://i.pinimg.com/736x/e4/fe/07/e4fe07e0648bb5a167b3fe7d34b0852b.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=emN1KbD_DxM',
  },
  {
    title: 'Um Lobisomem Americano em Londres',
    year: '1981',
    genre: 'Body Horror',
    description: 'Dois estudantes americanos, David e Jack, estão viajando pela Inglaterra quando são atacados por uma criatura misteriosa em uma estrada deserta. Jack morre, mas David sobrevive — e logo descobre que foi mordido por um lobisomem. Enquanto se recupera em um hospital em Londres, ele começa a ter visões perturbadoras do amigo morto, que o alerta: David está condenado a se transformar na próxima lua cheia. O filme combina horror visceral com momentos de humor ácido e é famoso por sua transformação de lobisomem, feita com efeitos práticos revolucionários para a época. ',
    rating: '7.5',
    poster: 'https://i.pinimg.com/1200x/2e/99/92/2e9992c2fafc6ceec3730c0d2e84050c.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=bTWBw-E_kDM',
  },
  
  {
    title: 'Pânico',
    year: '1996',
    genre: 'Slasher',
    description: 'Na pacata cidade de Woodsboro, a jovem Sidney Prescott começa a receber ligações ameaçadoras de um assassino mascarado que adora fazer perguntas sobre filmes de terror. Quem erra... morre. À medida que os assassinatos aumentam, Sidney e seus amigos precisam desvendar quem está por trás da máscara de Ghostface, enquanto enfrentam seus próprios traumas e segredos. O filme brinca com os clichês do gênero e os subverte de forma inteligente. ',
    rating: '7.4',
    poster: 'https://i.pinimg.com/736x/3c/a9/df/3ca9dfd5a765dc02e67ccd8dcaddc976.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=Xlut875doho',
  },
  {
    title: 'Sorria',
    year: '2022',
    genre: 'Demônio',
    description: 'A Dra. Rose Cotter (Sosie Bacon) é uma psiquiatra que presencia o suicídio brutal de uma paciente em seu consultório. Após o evento, Rose começa a vivenciar aparições bizarras e visões de pessoas com sorrisos perturbadores. À medida que mergulha em uma investigação para entender o fenômeno, ela descobre uma entidade maligna que se propaga por meio de traumas e mortes violentas. Para sobreviver, Rose precisa enfrentar seu passado e desvendar o ciclo macabro antes que seja tarde demais. ',
    rating: '6.5',
    poster: 'https://i.pinimg.com/736x/ef/c0/01/efc0018a5a3290b96a2ba1898f4b42b7.jpg',
    platforms: [
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'},
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=lztr0VOb-_s',
  },
  {
    title: 'Alien, o Oitavo Passageiro',
    year: '1979',
    genre: 'Alien',
    description: 'A nave comercial Nostromo recebe um sinal de socorro vindo de um planeta desconhecido. Ao investigar, a tripulação encontra uma criatura alienígena que se aloja no corpo de um dos tripulantes. O que parecia um incidente isolado se transforma em um pesadelo claustrofóbico: o alien cresce rapidamente e começa a caçar os membros da equipe um a um. A protagonista Ripley (Sigourney Weaver) emerge como uma das heroínas mais icônicas do cinema, enfrentando o horror em meio ao vazio do espaço. ',
    rating: '8.5',
    poster: 'https://i.pinimg.com/736x/e9/df/cb/e9dfcbb9bab4ce2b06ea365448a4b8ef.jpg',
    platforms: [
      { name: 'Disney', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=nvGCVfw8QlY',
  },
  {
    title: 'A Hora do Pesadelo',
    year: '1984',
    genre: 'Slasher',
    description: 'Na cidade de Springwood, adolescentes começam a ter pesadelos com um homem desfigurado que usa uma luva com lâminas afiadas. Quando um deles morre durante o sono, os outros percebem que o sonho é real — e que dormir pode ser fatal. O assassino é Freddy Krueger, um espírito vingativo que ataca suas vítimas nos sonhos, onde ele é mais poderoso. ',
    rating: '5.2',
    poster: 'https://i.pinimg.com/1200x/4c/10/fb/4c10fbd837821e4087be3b483c133499.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'HBO MAX', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg'},
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
      
    ],
    trailer: 'https://www.bing.com/videos/riverview/relatedvideo?q=a+hora+do+pesadelo+1984+trailer&&mid=D613F49A863D14646D9ED613F49A863D14646D9E&FORM=VAMGZC',
  },
  {
    title: 'Suspiria',
    year: '1977',
    genre: 'Culto',
    description: 'A jovem bailarina americana Susie Bannion (Dakota Johnson) chega à prestigiada Markos Tanz Company, em Berlim, logo após o misterioso desaparecimento de outra dançarina. À medida que se destaca na companhia, Susie começa a perceber que há algo sinistro por trás das coreografias e da liderança da enigmática Madame Blanc (Tilda Swinton). O que parecia ser uma escola de dança se revela como o centro de um culto de bruxas ancestrais, envolto em rituais, possessões e sacrifícios.',
    rating: '6.7',
    poster: 'https://i.pinimg.com/736x/70/0b/2b/700b2b36ce38e5532c13d77c8db8b29f.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=5Y0EEqtWrJI',
  },
  {
    title: 'IT - A Coisa',
    year: '2017',
    genre: 'Sobrenatural',
    description: 'Na cidade de Derry, no estado do Maine, crianças começam a desaparecer misteriosamente. Um grupo de sete adolescentes — o Clube dos Perdedores — se une para enfrentar o responsável: Pennywise, um palhaço demoníaco que se alimenta dos medos mais profundos de suas vítimas. A história mistura terror sobrenatural com temas de amizade, trauma e amadurecimento, criando uma narrativa envolvente e assustadora. ',
    rating: '7.3',
    poster: 'https://i.pinimg.com/736x/f3/80/58/f38058b1a34ede5900444dc5937d7250.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=dD264ZjfKlk',
  },
  {
    title: 'O Chamado 2',
    year: '2005',
    genre: 'Fantasma',
    description: 'Seis meses após os eventos do primeiro filme, Rachel Keller (Naomi Watts) e seu filho Aidan tentam recomeçar a vida na cidade litorânea de Astoria, Oregon. Mas quando uma nova morte misteriosa envolve uma fita de vídeo, Rachel percebe que Samara está de volta — e mais determinada do que nunca a se manifestar no mundo real. A maldição evolui, e agora não basta apenas copiar a fita para escapar: Samara quer uma mãe... e escolheu Rachel. ',
    rating: '5.4',
    poster: 'https://i.pinimg.com/736x/61/37/0c/61370c6f605eb1738ea325fe2fdba219.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=L9JMGCtNFkE',
  },
  {
    title: 'O Silêncio dos Inocentes',
    year: '1991',
    genre: 'Thriller',
    description: 'jovem agente do FBI Clarice Starling (Jodie Foster) é designada para entrevistar o brilhante, porém perigoso, Dr. Hannibal Lecter (Anthony Hopkins), um psiquiatra encarcerado por assassinato e canibalismo. Ela precisa da ajuda dele para capturar outro serial killer conhecido como Buffalo Bill, que arranca a pele de suas vítimas. O jogo psicológico entre Clarice e Lecter se torna cada vez mais intenso, revelando traumas, manipulações e segredos sombrios. ',
    rating: '8.6',
    poster: 'https://i.pinimg.com/1200x/54/c5/06/54c506983fa4efb5fc71af49810b8f55.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=8Qsq6DrYDxE',
  },
  {
    title: 'Poltergeist',
    year: '1982',
    genre: 'Fantasma',
    description: 'A família Freeling vive tranquilamente em uma casa no subúrbio da Califórnia até que fenômenos estranhos começam a acontecer. A filha mais nova, Carol Anne, começa a se comunicar com vozes vindas da televisão. Logo, forças invisíveis passam a se manifestar, culminando no desaparecimento da menina para uma dimensão espiritual. Desesperados, os pais recorrem a parapsicólogos e médiuns para tentar resgatá-la — enfrentando uma entidade maligna que habita a casa. ',
    rating: '7.3',
    poster: 'https://i.pinimg.com/736x/67/46/1a/67461aafc0b7fcde90ad343cfa0656b9.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'},
      { name: 'HBO MAX', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=9eZgEKjYJqA',
  },
  {
    title: 'Longlegs',
    year: '2024',
    genre: 'Psicológico',
    description: 'A agente do FBI Lee Harker (Maika Monroe) é designada para investigar uma série de assassinatos brutais que parecem estar ligados por um padrão oculto. À medida que ela mergulha no caso, descobre que o responsável — conhecido como Longlegs (Nicolas Cage) — pode estar usando forças sobrenaturais para cometer os crimes. O que começa como uma investigação policial se transforma em uma jornada sombria e pessoal, revelando conexões perturbadoras entre Harker e o assassino. ',
    rating: '6.6',
    poster: 'https://image.tmdb.org/t/p/original/jpTxtwM1AXzEwYghzF06zsSF0pc.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=OG7wOTE8NhE',
  },
  {
    title: 'Carrie, a Estranha',
    year: '2013',
    genre: 'Sobrenatural',
    description: 'Carrie White (interpretada por Chloë Grace Moretz) é uma adolescente tímida e excluída, constantemente humilhada pelos colegas de escola e oprimida por sua mãe, Margaret (Julianne Moore), uma fanática religiosa. Vivendo em isolamento e sofrimento, Carrie descobre que possui poderes telecinéticos — a capacidade de mover objetos com a mente. Quando uma brincadeira cruel durante o baile de formatura ultrapassa todos os limites, Carrie libera sua fúria e seus poderes de forma devastadora.',
    rating: '7,4',
    poster: 'https://i.pinimg.com/1200x/02/b3/fe/02b3fed5fa3fe2f1c8d64ca23cfe041a.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=1TaYCap3nok',
  },
  {
    title: 'Madrugada dos Mortos',
    year: '2004',
    genre: 'Zumbi',
    description: 'Após um surto inexplicável transformar pessoas em zumbis vorazes, a enfermeira Ana (Sarah Polley) escapa do caos inicial e se junta a outros sobreviventes — incluindo o policial Kenneth (Ving Rhames) — em um shopping center. Lá, eles tentam resistir ao apocalipse, mas à medida que os suprimentos acabam e os mortos se acumulam, o grupo precisa decidir entre ficar ou arriscar tudo para fugir. O filme é conhecido por seus zumbis rápidos, atmosfera de tensão constante e cenas de ação brutais. ',
    rating: '7.2',
    poster: 'https://i.pinimg.com/1200x/6e/fc/10/6efc10fb89724072dfc2a6da9ddd24b3.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=ci7K5LKgsWM',
  },
  {
    title: 'A Mosca',
    year: '1986',
    genre: 'Body Horror',
    description: 'O cientista excêntrico Seth Brundle (interpretado por Jeff Goldblum) desenvolve uma máquina de teletransporte de matéria. Ao testar o dispositivo em si mesmo, uma mosca entra na câmara sem que ele perceba. O resultado? Uma fusão genética entre homem e inseto, que inicia uma mutação aterrorizante e irreversível. A jornalista Veronica Quaife (Geena Davis) acompanha de perto essa transformação grotesca e emocional.',
    rating: '7.6',
    poster: 'https://i.pinimg.com/736x/48/02/81/48028120c3185a69614ee2fc1c9955ec.jpg',
    platforms: [
      { name: 'Disney', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
    ],
    trailer: 'https://www.youtube.com/watch?v=K7SNZpm2k6c',
  },
  {
    title: 'A Morte Do Demônio: A Ascenção',
    year: '2023',
    genre: 'Demônio',
    description: 'O filme se passa em Los Angeles, onde Beth (Lily Sullivan) visita sua irmã Ellie (Alyssa Sutherland), mãe solo de três filhos, que vive em um prédio decadente. Após um terremoto, o filho Danny encontra um livro antigo e discos amaldiçoados em um cofre subterrâneo. Ao reproduzir os áudios, uma entidade demoníaca é libertada, possuindo Ellie e transformando o apartamento em um pesadelo sangrento. Beth precisa lutar para proteger os sobrinhos e sobreviver à noite. ',
    rating: '6.5',
    poster: 'https://i.pinimg.com/1200x/e2/77/23/e27723f80ff94c19c112bef9a9ea5eb7.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'},
      { name: 'HBO MAX', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=5n9v35xgRpw',
  },
  {
    title: 'Extermínio',
    year: '2002',
    genre: 'Apocalíptico',
    description: 'Após ativistas libertarem macacos infectados de um laboratório, um vírus altamente contagioso se espalha pelo Reino Unido, transformando pessoas em criaturas violentas e irracionais. 28 dias depois, Jim (Cillian Murphy) acorda de um coma em um hospital abandonado e encontra Londres deserta e devastada. Ao lado de outros sobreviventes, ele tenta entender o que aconteceu e encontrar abrigo, enfrentando não apenas os infectados, mas também os horrores humanos que surgem em tempos de colapso. ',
    rating: '7.5',
    poster: 'https://i.pinimg.com/736x/4f/59/6d/4f596d2f9f5fef4b2b57b51f04e836aa.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'},
      { name: 'HBO MAX', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=at4JIc_vyUY',
  },
 
  {
    title: 'Abismo do Medo',
    year: '2005',
    genre: 'Thriller',
    description: 'Um ano após um acidente traumático, seis amigas se reúnem para explorar uma caverna remota nos Apalaches. Sem saber, foram levadas por Juno a um sistema de cavernas não mapeado, o que rapidamente se transforma em um pesadelo. Após um desabamento, elas ficam presas e descobrem que não estão sozinhas: criaturas humanoides e carnívoras habitam a escuridão. O grupo precisa lutar pela sobrevivência enquanto enfrenta medos primordiais, conflitos internos e horrores sobrenaturais. ',
    rating: '7.2',
    poster: 'https://i.pinimg.com/736x/a8/5e/ea/a85eea4b74be033625155cc65eab9c10.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=sqQNAe8U5VU',
  },
  {
    title: 'Nosferatu',
    year: '2025',
    genre: 'Vampiro',
    description: 'Dirigido por Robert Eggers (de A Bruxa e O Farol), esta versão de Nosferatu é um conto gótico sobre obsessão, morte e desejo sobrenatural. A história se passa na Alemanha do século XIX e acompanha o misterioso Conde Orlok (Bill Skarsgård), um vampiro que se apaixona por Ellen Hutter (Lily-Rose Depp), esposa de um corretor de imóveis. Conforme Orlok se aproxima, uma série de eventos sombrios e aterrorizantes se desenrola, envolvendo sonhos perturbadores, doenças inexplicáveis e uma atmosfera de puro horror. ',
    rating: '7.2',
    poster: 'https://tse3.mm.bing.net/th/id/OIP.hHRHKSqaFMwfiQ-K4ndvRQHaK-?cb=thfvnextucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=moIrYMjS0nI',
  },
  {
    title: 'Lobisomem',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Dirigido por Leigh Whannell (O Homem Invisível), o filme acompanha Blake Lovell (Christopher Abbott), um homem que tenta proteger sua esposa Charlotte (Julia Garner) e sua filha Ginger após se mudarem para uma casa isolada nas montanhas. Quando uma criatura misteriosa os ataca, Blake descobre que está infectado por uma maldição ancestral, e começa a se transformar em um lobisomem. A tensão cresce à medida que ele luta contra sua natureza monstruosa e tenta salvar sua família de si mesmo. ',
    rating: '6.8',
    poster: 'https://m.media-amazon.com/images/M/MV5BZDc0OWYzYzQtNDlkMi00OTE2LWI1ZTUtMDIwZDg2MDY4MWFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=4e414vW9gFs',
  },
  {
    title: 'O Macaco',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Baseado no conto The Monkey de Stephen King, o filme acompanha os gêmeos Hal e Bill (interpretados por Theo James), que descobrem um macaco de brinquedo amaldiçoado no sótão do pai. Toda vez que o brinquedo é ativado, alguém morre de forma violenta. Mesmo tentando destruí-lo, o objeto reaparece, trazendo tragédias e desenterrando traumas familiares. A história se desenrola ao longo de décadas, com os irmãos tentando escapar da maldição que os persegue. ',
    rating: '5.9',
    poster: 'https://br.web.img2.acsta.net/img/d2/e5/d2e517612de9e1db2463aeec34dc6d29.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=EHs_4zZFfYU',
  },
  {
    title: 'Presença',
    year: '2025',
    genre: 'Sobrenatural',
    description: '"Presença" é um suspense sobrenatural contado inteiramente do ponto de vista de um fantasma. A trama acompanha Rebekah (Lucy Liu), seu marido Chris (Chris Sullivan) e seus filhos Chloe (Callina Liang) e Tyler, que se mudam para uma casa isolada após uma perda traumática. O que parece ser um recomeço logo se transforma em um pesadelo silencioso, quando uma entidade invisível começa a observar e interferir na vida da família — especialmente em Chloe, que ainda lida com o luto pela melhor amiga. A narrativa mergulha em temas como luto, obsessão, conflitos familiares e presença sobrenatural, com uma abordagem visual única e inquietante. ',
    rating: '6.1',
    poster: 'https://br.web.img3.acsta.net/img/6b/ea/6beac990070ef019623145592b64d981.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=QbXOCYU1dQc',
  },
  {
    title: 'O Exorcista: O Devoto',
    year: '2023',
    genre: 'Psicológico',
    description: 'Após perder sua esposa grávida em um terremoto no Haiti, Victor Fielding (Leslie Odom Jr.) cria sozinho sua filha Angela. Doze anos depois, Angela e sua amiga Katherine desaparecem na floresta e retornam três dias depois — sem memória do que aconteceu. A partir daí, eventos sobrenaturais começam a se intensificar, levando Victor a buscar ajuda de Chris MacNeil (Ellen Burstyn), a única pessoa viva que enfrentou algo semelhante no passado.',
    rating: '4,8',
    poster: 'https://cinebreak.com.br/wp-content/uploads/2023/07/o-exorcista-o-devoto-ganha-trailer-com-sequencia-para-2025-veja.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=96RCGOaNuCM',
  },
  {
    title: 'Until Dawn: Noite de Terror',
    year: '2025',
    genre: 'Slasher',
    description: 'Inspirado no jogo Until Dawn (2015), o filme acompanha um grupo de adolescentes que decide passar um fim de semana em uma cabana isolada em Blackwood Mountain, no Canadá — um ano após o desaparecimento misterioso de duas irmãs gêmeas do grupo. O que começa como uma reunião descontraída se transforma em um pesadelo sangrento, quando um serial killer começa a persegui-los. A narrativa mistura terror slasher, decisões morais e mistério sobrenatural, recriando a tensão interativa do jogo em uma experiência cinematográfica. ',
    rating: '5.7',
    poster: 'https://static.claquete.com.br/fotos/filmes/poster/16295_medio.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'},
      { name: 'HBO MAX', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=W--kUNMg1-E',
  },
  {
    title: 'A Mulher no Jardim',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Após perder o marido em um acidente de carro, Ramona (Danielle Deadwyler) vive isolada com seus dois filhos em uma casa inacabada. Com a perna ferida e emocionalmente devastada, ela começa a notar a presença de uma mulher vestida de preto, sentada no jardim — imóvel, silenciosa, mas cada vez mais ameaçadora. Essa figura passa a emitir mensagens enigmáticas e assustadoras, desestabilizando a rotina da família. O filme mergulha em temas como luto, culpa, alucinação e forças sobrenaturais, com uma atmosfera tensa e intimista. ',
    rating: '5.1',
    poster: 'https://br.web.img2.acsta.net/img/18/ca/18ca405e8d949e0cdd4c0b80aaf4db99.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: 'https://www.youtube.com/watch?v=ZMRTDkW0q6w',
  },
  {
    title: 'Premonição 6: Laços de Sangue',
    year: '2025',
    genre: 'Thriller',
    description: 'A trama acompanha Stefanie (Kaitlyn Santa Juana), uma universitária atormentada por pesadelos recorrentes em que vê seus familiares morrendo de forma brutal. Ao retornar à cidade natal, ela busca respostas com sua avó Iris (Gabrielle Rose/Brec Bassinger), que décadas atrás teve uma premonição e salvou dezenas de pessoas de uma tragédia nos anos 60. Mas ao interferir no plano da Morte, Iris desencadeou uma maldição que agora ameaça toda a linhagem familiar. ',
    rating: '6.8',
    poster: 'https://nouse.com.br/wp-content/uploads/2025/03/Premonicao-6-Lacos-de-Sangue-ganha-novo-trailer-inedito.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=TTwbsctteuw',
  },
  {
    title: 'Extermínio: A Evolução',
    year: '2025',
    genre: 'Terror, Suspense',
    description: '28 Years Later se passa três décadas após o surto do vírus da raiva que transformou grande parte da humanidade em criaturas violentas. A trama acompanha um grupo de sobreviventes que vive isolado em uma ilha protegida por um istmo fortemente vigiado. Quando um deles parte em missão ao continente, descobre mutações assustadoras — não só nos infectados, mas também nos humanos que sobreviveram.',
    rating: null,
    poster: 'https://tse1.mm.bing.net/th/id/OIP.BG510tAxW2Inbtw4X4MEkwHaK-?cb=thfvnextucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: 'https://youtu.be/mcvLKldPM08',
  },
  {
    title: 'A Babá',
    year: '2017',
    genre: 'Culto',
    description: 'Cole, um garoto tímido de 12 anos, é apaixonado por sua babá Bee — linda, divertida e aparentemente perfeita. Mas tudo muda quando ele decide espioná-la após ir para a cama e descobre que ela lidera um culto satânico com seus amigos adolescentes. A partir daí, Cole precisa lutar pela própria vida enquanto tenta escapar dos assassinos, usando criatividade, coragem e muita sorte.',
    rating: null,
    poster: 'https://i.ytimg.com/vi/XRujdNZVWUU/maxresdefault.jpg',
    platforms: [
      { name: 'Netflix' , logo: 'https://i.pinimg.com/1200x/b6/3c/86/b63c861466a49f4a296806069be7f097.jpg'},
    ],
    trailer: 'https://www.youtube.com/watch?v=MDs572zB9v8',
  },
  {
    title: 'Eu Sei o Que Vocês Fizeram no Verão Passado',
    year: '2025',
    genre: 'Suspense',
    description: 'Cinco amigos causam um acidente de carro fatal e encobrem seu envolvimento mantendo segredo em vez de enfrentar as consequências. Um ano depois, eles se veem perseguidos por um assassino misterioso que sabe o que eles fizeram no verão passado.',
    rating: null,
    poster: 'https://api.claquete.com.br/uploads/poster/16065_medio.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
    ],
    trailer: 'https://youtu.be/RTIhJksrx34',
  },
  {
    title: 'O Ritual',
    year: '2025',
    genre: 'Culto',
    description: 'Dois padres, um questionando sua fé e outro lidando com um passado problemático, devem deixar suas diferenças de lado para realizar um exorcismo difícil e perigoso em uma mulher possuída.',
    rating: null,
    poster: 'https://horrorfuel.com/wp-content/uploads/2025/03/the-ritual-2025.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
    ],
    trailer: 'https://youtu.be/Y8zUTpO3JAo',
  },
  {
    title: 'A Hora do Mal',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Todas as crianças da mesma sala de aula, exceto uma, desaparecem misteriosamente na mesma noite e exatamente no mesmo horário. A comunidade fica se perguntando quem ou o que está por trás do desaparecimento.',
    rating: null,
    poster: 'https://live.staticflickr.com/65535/54485707676_9495b1c07e_o.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: 'https://youtu.be/Sx_iYTfehN0',

  },
  {
    title: 'Os Enforcados',
    year: '202f',
    genre: 'Slasher',
    description: 'Um grupo de amigos é aterrorizado por um assassino que usa métodos cruéis e ligados a um antigo conto folclórico.',
    rating: null,
    poster: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/6x3670ZuV4v7YUome28WSGlSblv.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: '',
  },
  {
    title: 'Juntos',
    year: '2025',
    genre: 'Psicológico',
    description: 'O isolamento e a paranoia levam um grupo de pessoas a confrontar seus medos mais profundos.',
    rating: null,
    poster: 'https://m.media-amazon.com/images/M/MV5BNzA4YjY5ZjEtMWU5NC00MWFmLWFkOGItZDBhMzBjNWMyNzE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    platforms: [
      { name: 'Amazon Prime Video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple Tv', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg'}
    ],
    trailer: '',
  },
  {
    title: 'Faça Ela Voltar',
    year: '2025',
    genre: 'Sobrenatural',
    description: 'Uma tentativa desesperada de trazer alguém de volta do além desencadeia consequências aterrorizantes.',
    rating: null,
    poster: 'https://tse1.mm.bing.net/th/id/OIF.PGSgn8yyy91jvrrFkNQmZg?cb=thfvnextucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    trailer: '',
  },
  {
    title: 'Invocação do Mal 2',
    year: '2016',
    genre: 'Possessão',
    description: 'Ed e Lorraine Warren retornam para enfrentar sua mais desafiadora e talvez última investigação paranormal.',
    rating: null,
    poster: 'https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/5985/filme_5985.jpg',
    trailer: '',
  },

  {
    title: 'Annabelle 2 - A Criação do Mal',
    year: '2017',
    genre: 'Possessão',
    description: null,
    rating: null,
    poster: 'https://tse1.mm.bing.net/th/id/OIP.vwqPWnEeHIGdu1C57EBh7AHaK_?cb=thfvnextucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    trailer: '',
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
    poster: 'https://www.kinonews.ru/insimgs/poster/poster47670_2.jpg',
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
    poster: 'https://images.justwatch.com/poster/174792418/s718/a-morte-do-demonio.jpg',
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
    poster: 'https://i.ytimg.com/vi/i6SJdrMRkxo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGH8gOSghMA8=&rs=AOn4CLCCpiOlgS_qKzo1nckrM82Uk0FilQ',
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
    poster: 'https://br.web.img3.acsta.net/medias/nmedia/18/93/17/90/20240211.jpg',
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
    poster: 'https://i.ytimg.com/vi/6Y2PhP29tyk/maxresdefault.jpg',
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
    description: 'Em São Francisco, nos anos 1990, um jornalista entrevista Louis de Pointe du Lac (Brad Pitt), que afirma ser um vampiro. Através de flashbacks, Louis narra sua transformação pelas mãos de Lestat de Lioncourt (Tom Cruise), após perder a esposa. A história mergulha em temas como imortalidade, solidão e moralidade, acompanhando os dois vampiros por mais de dois séculos.',
    rating: '7,5',
    poster: 'https://tse1.explicit.bing.net/th/id/OIP.ylR25eXxQpPc2tIPquuwEwHaLH?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    platforms: [
      { name: 'Amazon Prime', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple TV', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=NUrgBxBsaas'
  },
  {
    title: 'Os Outros',
    year: '2001',
    genre: 'Fantasma',
    description: 'Durante a Segunda Guerra Mundial, Grace (Nicole Kidman) vive com seus dois filhos em uma mansão isolada na ilha de Jersey. As crianças sofrem de uma doença rara que os impede de serem expostos à luz solar, obrigando a família a viver em constante escuridão. Quando novos empregados chegam à casa, eventos estranhos começam a acontecer, desafiando as rígidas regras da casa e revelando segredos perturbadores.',
    rating: '7,6',
    poster: 'https://th.bing.com/th/id/R.c17ae6ecf53fa6a723057245ecd79129?rik=jau6V6RlzDHCBg&riu=http%3a%2f%2fcinematologia.com.br%2fcine%2fwp-content%2fuploads%2f2017%2f07%2fOs-Outros-2001-4.jpg&ehk=v09YUwurx%2bal8hutqN5KuyqfvFzn8HIBsIghGp08jYM%3d&risl=&pid=ImgRaw&r=0',
    platforms: [
      { name: 'Amazon Prime', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=iZmV5gOwHRI'
  },
  {
    title: 'A Maldição da Residência Hill',
    year: '2018',
    genre: 'Fantasma',
    description: 'A série acompanha os irmãos Crain — Steven, Shirley, Theo, Luke e Nell — que cresceram na misteriosa Residência Hill, uma mansão assombrada onde eventos sobrenaturais marcaram suas vidas para sempre. Anos depois, já adultos e emocionalmente devastados, eles são forçados a confrontar os traumas do passado após uma tragédia familiar. Alternando entre presente e passado, a narrativa revela lentamente os segredos sombrios da casa e das próprias memórias dos personagens.',
    rating: '8,5',
    poster: 'https://th.bing.com/th/id/R.0af3a63d0ada170266a307a60dd50567?rik=QG2JavCTolo6JA&riu=http%3a%2f%2fbr.web.img2.acsta.net%2fc_300_300%2fpictures%2f18%2f09%2f19%2f18%2f09%2f2669292.jpg&ehk=72lYv9p%2fDYU4jkonJ50xfvNSmo5oaEH%2fxi5YKu5gp%2b8%3d&risl=&pid=ImgRaw&r=0',
    platforms: [
      { name: 'Netflix', logo: 'https://i.pinimg.com/1200x/b6/3c/86/b63c861466a49f4a296806069be7f097.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=OJCbEude3_E&t=1s'
  },
  {
    title: 'O Orfanato',
    year: '2007',
    genre: 'Fantasma',
    description: 'Laura (Belén Rueda) retorna ao orfanato onde cresceu, agora abandonado, com o plano de transformá-lo em um lar para crianças com deficiência. Ela se muda para o local com seu marido Carlos e o filho Simón. Quando Simón começa a interagir com "amigos imaginários" e desaparece misteriosamente, Laura mergulha em uma busca desesperada que revela segredos sombrios do passado da casa.',
    rating: '7,4',
    poster: 'https://www.cafecomfilme.com.br/media/k2/items/cache/044f5e2581f803ef74e3e67dcc235a32_M.jpg?t=20210628_211418',
    platforms: [
      { name: 'Amazon Prime', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=SG9fCQvo_5k'
  },
  {
    title: 'Possessão',
    year: '2012',
    genre: 'Possessão',
    description: 'Clyde (Jeffrey Dean Morgan) e Stephanie (Kyra Sedgwick) são um casal separado que tenta manter uma boa relação por causa das filhas. Durante uma visita a um brechó, a filha mais nova, Em (Natasha Calis), encontra uma misteriosa caixa de madeira e insiste em levá-la para casa. O que ninguém sabe é que o objeto abriga um espírito maligno da mitologia judaica — um dybbuk — que começa a influenciar o comportamento da menina. A família entra em uma corrida contra o tempo para salvar Em, recorrendo a um exorcismo nada convencional.',
    rating: '5,9',
    poster: 'https://i.pinimg.com/originals/45/cc/8e/45cc8e518e642f09dd94f09c15094888.jpg',
    platforms: [
      { name: 'Amazon Prime', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=lEV1OsjETc8'
  },
  {
    title: 'O Ritual',
    year: '2011',
    genre: 'Possessão',
    description: 'Michael Kovak é um seminarista cético que decide abandonar sua vocação religiosa. Antes disso, é enviado ao Vaticano para estudar rituais de exorcismo. Lá, ele conhece o enigmático Padre Lucas (Anthony Hopkins), um exorcista veterano que o confronta com casos perturbadores e inexplicáveis. À medida que Michael se envolve com os mistérios da possessão demoníaca, sua fé é colocada à prova.',
    rating: '6,0',
    poster: 'https://www.cafecomfilme.com.br/media/k2/items/cache/dc9e231f652301f80ea8e901bd9ec18a_XL.jpg?t=20181025_221839',
    platforms: [
      { name: 'HBO Max', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' },
      { name: 'Amazon Prime', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=IER3g4pBpHA'
  },
  {
    title: 'Verónica',
    year: '2017',
    genre: 'Possessão',
    description: 'Ambientado em Madri, nos anos 1990, o filme acompanha Verónica, uma adolescente de 15 anos que cuida dos três irmãos enquanto a mãe trabalha em turnos exaustivos. Durante um eclipse solar, ela e duas amigas realizam uma sessão com uma tábua ouija na escola para tentar se comunicar com o pai falecido. A partir daí, eventos sobrenaturais começam a atormentá-la, colocando em risco sua sanidade e a segurança da família. O filme é inspirado em um caso real registrado pela polícia espanhola — o único em que autoridades afirmaram ter presenciado fenômenos paranormais',
    rating: '6,2',
    poster: 'https://image.tmdb.org/t/p/original/3j0YAhy7rkgK8PMzG9MdncxgDDf.jpg',
    platforms: [
      { name: 'Netflix', logo: 'https://i.pinimg.com/1200x/b6/3c/86/b63c861466a49f4a296806069be7f097.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=s-PdfZ9a6oI'
  },
  {
    title: 'O Homem de Palha',
    year: '1973',
    genre: 'Culto',
    description: "O sargento Neil Howie (Edward Woodward), um cristão devoto, é enviado a uma ilha escocesa isolada chamada Summerisle para investigar o desaparecimento de uma jovem. Ao chegar, ele encontra uma comunidade que abandonou o cristianismo e pratica rituais pagãos celtas, liderados pelo enigmático Lord Summerisle (Christopher Lee). Conforme se aprofunda na investigação, Howie percebe que está envolvido em algo muito mais sombrio e ritualístico do que imaginava. ",
    rating: '7.5',
    poster: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5cir5m5vGhVJQdYGsCtJ0Xp9gkbl5QXXpx2MgaATFjurCNAXilGdPHMSBTfTmX6W1DmunTW8VDxD-0jNOoBboTbTe7k3DlzIvxzrNN60J0ZO0bbx0WiEGi9mQKIxy8Vl1C6rH0tdJwYbphQDwWYfJxQHB2XhkPTtDRKVAn6YIaoewple-cCmXS56YS_qp/s450/o-homem-de-palha-filme-poster.jpg',
    platforms: [
      { name: 'Prime video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=MXq-NuS24fg'
  },
  {
    title: 'Midsommar',
    year: '2019',
    genre: 'Culto',
    description: "Após uma tragédia familiar devastadora, Dani (Florence Pugh) embarca com seu namorado Christian (Jack Reynor) e um grupo de amigos para um remoto vilarejo sueco chamado Hårga, onde acontece um festival de solstício de verão que ocorre a cada 90 anos. O que começa como uma viagem cultural se transforma em um pesadelo ritualístico, com práticas pagãs, sacrifícios e alucinações. O filme explora temas como luto, dependência emocional, manipulação e renascimento, tudo sob a luz do dia — o que torna o horror ainda mais desconcertante. ",
    rating: '7.1',
    poster: 'https://th.bing.com/th/id/R.ace4a5dcd333bbc917656fdba3cbb3eb?rik=JZu6LAig0giFaw&pid=ImgRaw&r=0',
    platforms: [
      { name: 'Prime video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple TV', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=1Vnghdsjmd0'
  },
  {
    title: 'O Sacrifício do Cervo Sagrado',
    year: '2017',
    genre: 'Culto',
    description: "Steven Murphy (Colin Farrell) é um cardiologista renomado que vive com sua esposa Anna (Nicole Kidman) e seus dois filhos. Ele mantém uma relação estranha com Martin (Barry Keoghan), um adolescente cujo pai morreu durante uma cirurgia realizada por Steven. Quando Martin se sente rejeitado, ele revela um plano sombrio: a família de Steven será punida, a menos que ele faça um sacrifício impensável. O filme mergulha em temas como culpa, justiça divina, moralidade e punição, com uma narrativa fria e inquietante. ",
    rating: '7.0',
    poster: 'https://woomagazine.com.br/wp-content/uploads/2017/12/o-sacrificio-do-cervo-sagrado-nicole-kidman.jpg',
    platforms: [
      { name: 'Prime video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple TV', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=LAjbBOYGokY'
  },
  {
    title: 'Creepshow',
    year: '1982',
    genre: 'Body Horror',
    description: "Inspirado nos quadrinhos de terror da EC Comics dos anos 1950, Creepshow é uma antologia dirigida por George A. Romero e escrita por Stephen King, que também atua em um dos segmentos. O filme apresenta cinco histórias macabras, todas interligadas por um garoto que lê uma revista de terror proibida. ",
    rating: '6.8',
    poster: 'https://i.pinimg.com/originals/02/c9/55/02c9558cd355e6d4e9f0a169d53584c8.jpg',
    platforms: [
      { name: 'Prime video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple TV', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=owdnnaNs2RI'
  },
  {
    title: 'Raw',
    year: '2016',
    genre: 'Body Horror',
    description: "Justine (Garance Marillier) é uma jovem tímida e vegetariana que ingressa na faculdade de veterinária, onde sua irmã mais velha também estuda. Durante os trotes universitários, ela é forçada a comer carne crua pela primeira vez — e esse momento desperta nela impulsos canibais incontroláveis. À medida que sua fome cresce, Justine mergulha em uma jornada de descoberta corporal, desejo, violência e identidade, transformando o canibalismo em uma metáfora para o amadurecimento e a libertação sexual. Dirigido por Julia Ducournau, o filme mistura terror corporal, drama psicológico e crítica social, com uma estética intensa e desconfortante. ",
    rating: '6.9',
    poster: 'https://th.bing.com/th/id/R.dd206dd70a50eab968305f38e61843c0?rik=sASWxV%2fKN7C4FQ&riu=http%3a%2f%2ffocusmicrosites.s3.amazonaws.com%2fassets%2fuploads%2f1481055737_rawos_59_m5.0v3.0.jpg&ehk=G7wqYuMsYMkw4aW4L9xe2AIU8PbY2Jwqai2XIm8CsCI%3d&risl=1&pid=ImgRaw&r=0',
    platforms: [
      { name: 'Prime video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple TV', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' },
      { name: 'Netflix', logo: 'https://i.pinimg.com/1200x/b6/3c/86/b63c861466a49f4a296806069be7f097.jpg' }

    ],
    trailer: 'https://www.youtube.com/watch?v=gFlXVX2af_Y'
  },
  {
    title: 'A Estrada',
    year: '2009',
    genre: 'Apocalíptico',
    description: "Após um cataclismo misterioso que destruiu o mundo como o conhecemos, um pai (Viggo Mortensen) e seu filho (Kodi Smit-McPhee) percorrem uma estrada desolada rumo à costa, em busca de abrigo e esperança. Sem vegetação, sem animais, sem civilização — apenas cinzas, fome e o medo constante de canibais e saqueadores. A jornada é marcada por silêncio, desespero e amor incondicional, enquanto o pai tenta proteger o filho em meio ao colapso da humanidade. O filme é uma meditação sobre sobrevivência, moralidade e vínculo familiar, com uma atmosfera fria e melancólica. ",
    rating: '7.2',
    poster: 'https://tse2.mm.bing.net/th/id/OIP.XFKFMXZ1fKy4fBCBRkT3TAHaKX?cb=ucfimg2ucfimg=1&w=844&h=1181&rs=1&pid=ImgDetMain&o=7&rm=3',
    platforms: [
      { name: 'HBO Max', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' },
      { name: 'Prime video', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=2Cjl6HHDNi4'
  },
     {
    title: 'Filhos da Esperança',
    year: '2006',
    genre: 'Apocalíptico',
    description: 'Em um futuro distópico, o ano é 2027 e a humanidade enfrenta a extinção: as mulheres tornaram-se inférteis e o último bebê nasceu há 18 anos. O mundo mergulha no caos, com governos autoritários e refugiados sendo perseguidos. Theo Faron (Clive Owen), um ex-ativista desiludido, é recrutado por sua ex-esposa Julian (Julianne Moore) para proteger uma jovem misteriosamente grávida — a única esperança de sobrevivência da espécie humana.',
    rating: '7,9',
    poster: 'https://br.web.img2.acsta.net/medias/nmedia/18/94/25/76/20314404.jpg',
    platforms: [
      { name: 'Amazon Prime', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple TV', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=9jisy5XHAC0'
  },
  {
    title: 'Bird Box',
    year: '2018',
    genre: 'Apocalíptico',
    description: 'Uma força misteriosa dizima a população mundial: ao vê-la, as pessoas enlouquecem e cometem suicídio. Para sobreviver, Malorie (Sandra Bullock) e seus dois filhos precisam atravessar um rio vendados em busca de um refúgio seguro. O filme alterna entre o presente e flashbacks, revelando como o mundo chegou ao colapso e como Malorie se tornou uma sobrevivente implacável.',
    rating: '6,6',
    poster: 'https://tse1.mm.bing.net/th/id/OIP.aznuVvcNLfXmgt-2gZEsawHaK-?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    platforms: [
      { name: 'Netflix', logo: 'https://i.pinimg.com/1200x/b6/3c/86/b63c861466a49f4a296806069be7f097.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=JeGdtrLQoiY'
  },
  {
    title: 'Alien: Romulus',
    year: '2024',
    genre: 'Alien',
    description: 'Dirigido por Fede Álvarez e produzido por Ridley Scott, Alien: Romulus se passa entre os eventos de Alien, o 8º Passageiro (1979) e Aliens, O Resgate (1986). A trama acompanha um grupo de jovens colonizadores espaciais que explora uma estação abandonada em busca de recursos para escapar de seu planeta condenado. No entanto, eles acabam despertando a criatura mais letal do universo: o Xenomorfo.',
    rating: '7,1',
    poster: 'https://th.bing.com/th/id/R.1a2d3fb3ba43d2a28865f751f28c9dc2?rik=eNrq5aMVJ76aQQ&riu=http%3a%2f%2fwww.scified.com%2fu%2fsecond-official-alien--romulus-poster-55722.jpg&ehk=UUanXdb4oFU%2bCslKr8hwf9Cuy47ipao5IDGyFo1INgg%3d&risl=&pid=ImgRaw&r=0',
    platforms: [
      { name: 'Disney+', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=IPMxNH2sz7E'
  },
  {
    title: 'A Coisa',
    year: '2011',
    genre: 'Alien',
    description: 'A paleontóloga Kate Lloyd (Mary Elizabeth Winstead) é convocada para uma expedição na Antártida, onde uma equipe norueguesa descobriu uma nave alienígena enterrada no gelo. Dentro dela, há uma criatura aparentemente morta — mas que logo desperta e revela a capacidade de imitar perfeitamente qualquer ser vivo. O grupo entra em uma corrida desesperada para identificar quem ainda é humano e impedir que o alienígena escape para o mundo',
    rating: '6,2',
    poster: 'https://images.justwatch.com/poster/177736643/s718/the-thing-2011.%7Bformat%7D',
    platforms: [
      { name: 'Amazon Prime', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
      { name: 'Apple TV', logo: 'https://i.pinimg.com/1200x/5e/0c/42/5e0c423458b017f4f2d3598ab9f8a33f.jpg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=The2FvGVmkI'
  },
  {
    title: 'Sinais',
    year: '2002',
    genre: 'Alien',
    description: 'Graham Hess (Mel Gibson), um ex-pastor que perdeu a fé após a morte da esposa, vive com seus dois filhos e o irmão Merrill (Joaquin Phoenix) em uma fazenda na Pensilvânia. Quando misteriosos círculos aparecem nas plantações, a família se vê no centro de uma possível invasão alienígena. O filme explora temas como fé, luto, redenção e sobrevivência, com uma narrativa tensa e emocional.',
    rating: '6,7',
    poster: 'https://media.fstatic.com/gVnPUs8nfyjfsmcP5tJnaA_lUcI=/290x478/smart/media/movies/covers/2017/11/Sinais-2002-5.jpg',
    platforms: [
      { name: 'Disney+', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' }
    ],
    trailer: 'https://www.youtube.com/watch?v=pstPzJjStOE'
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




