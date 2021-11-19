import { Produto } from './produto';
//---LIVROS---
export const PRODUTOS: Produto[] = [
  //==ficção científica==
  { id: 1, name: 'Duna' },
  { id: 2, name: 'Flores para Algernon' },
  { id: 3, name:  'Frankstein' },
  { id: 4, name: '1984' },
  { id: 5, name: 'Neuromancer'},
  { id: 6, name:  'O Homem Invisível'},
  { id: 7, name: 'O guia do mochileiro das galáxias'},
  { id: 8, name: 'Eu, robô' },
  { id: 9, name: 'Androides Sonham com Ovelhas Elétricas?' },
  //=======================
  //=======Fantasia========
  { id: 10, name: 'Crônicas do matador de rei: O nome do vento (livro 1)' },
  { id: 11, name: 'O Hobbit' },
  { id: 12, name: 'The Witcher: O último desejo (livro 1)' },
  { id: 13, name: 'Eragon' },
  { id: 14, name: 'Senhor dos Anéis: A sociedade do Anel (livro 1)' },
  { id: 15, name: 'Senhor dos Anéis: As duas Torres (livro 2)' },
  { id: 16, name: 'Senhor dos Anéis: O Retorno do Rei (livro 3)' },
  { id: 17, name: 'As crônicas de gelo e fogo: A Guerra dos Tronos (livro 1)' },
  { id: 18, name: 'As Brumas de avalon' },
  { id: 19, name: 'O Feiticireiro de TerraMar (livro 1)' },
  //=======================
  //Horror
  { id: 20, name: 'o chamado de cthulhu e outros contos' },
  { id: 21, name: 'It: A coisa' },
  { id: 22, name: 'Principais contos de Edgar Allan Poe' },
  { id: 23, name: 'Eu estou pensando em acabar com tudo' },
  { id: 24, name: 'Coraline' },
  { id: 25, name: 'Drácula' },
  { id: 26, name: 'O médico e o Monstro' },
  { id: 27, name: 'Uma casa no fundo de um lago' },
  { id: 28, name: 'Doutor Sono' },
  //=======================
  //Mistério
  { id: 29, name: 'Sherlock Homes: Um estudo em Vermelho' },
  { id: 30, name: 'O Código Da Vinci' },
  { id: 31, name: 'Os homens que não amavam as mulheres' },
  { id: 32, name: 'Não conte a ninguém' },
  { id: 33, name: 'Um Reflexo na escuridão' },
  { id: 34, name: 'As Sombras de Outubro' },
  { id: 35, name: 'Convite para um Homicídio' },
  { id: 36, name: 'A casa do penhasco' },
  { id: 38, name: 'Assassinato no Expresso Oriente' },
   //=======================
   //Computação e Informática
  { id: 39, name: 'Código limpo' },
  { id: 40, name: 'Python Fluente' },
  { id: 41, name: 'Lógica de Programação' },
  { id: 42, name: 'O Design do dia-a-dia' },
  { id: 43, name: 'Não me faça pensar' },
  { id: 44, name: 'Hooked' },
  //=======================
  //Clássicos
      //Literatura Brasileira
  { id: 45, name: 'A Hora da Estrela' },
  { id: 46, name: 'Memórias Póstumas de Brás Cubas' },
  { id: 47, name: 'Capitães de Areia' },
  { id: 48, name: 'O triste fim de Policarpo Quaresma' },
  { id: 49, name: 'Dom Casmurro' },
  { id: 50, name: 'O cortiço' },
  { id: 51, name: 'Iracema' },
  { id: 52, name: 'A escrava Isaura' },
  { id: 53, name: 'Macário' },
      //Literatura Britânica
  { id: 54, name: 'Hamlet' },
  { id: 55, name: 'Alice no país das maravilhas' },
  { id: 56, name: 'Mary Poppins' },
  { id: 57, name: 'Orgulho e Preconceito' },
  { id: 58, name: 'Tempos difíceis' },
  { id: 59, name: 'O Morro dos Ventos Uivantes' },
  { id: 60, name: 'Admirável Mundo Novo' },
  { id: 61, name: 'As Viagens de Gulliver' },
      //Literatura Russa
  { id: 62, name: 'Crime e Castigo' },
  { id: 63, name: 'Irmãos Karamazóv' },
  { id: 64, name: 'Anna Kariênina' },
  { id: 65, name: 'O Mestre e Margarida' },
  { id: 66, name: 'Oblómov' },
  { id: 67, name: 'Almas Mortas' },
  { id: 68, name: 'Guerra e Paz' },
  { id: 69, name: 'Eugênio Oneguin' },
  { id: 70, name: 'Pais e Filhos' },
      //Literatura Asiática
  { id: 71, name: 'A arte da Guerra' },
  { id: 72, name: 'Declínio de um homem' },
  { id: 73, name: 'Kafka à beira-mar' },
  { id: 74, name: 'Não me abandone jamais' },
  { id: 75, name: 'O caçador de pipas' },
  { id: 76, name: 'Histórias de Genji' },
  { id: 77, name: 'O Tigre Branco' },
  { id: 78, name: 'Por favor, cuide da mamãe' },
  //=======================

  //---História em Quadrinhos---
  //DC
  { id: 79, name: 'Batman: O Cavaleiro das Trevas' },
  { id: 80, name: 'Crise nas infinitas terras' },
  { id: 81, name: 'Reino do amanhã' },
    //Selo Vertigo
  { id: 82, name: 'V de Vingança' },
  { id: 83, name: 'Sandman: Os caçadores de sonhos (volume 1)' },
  { id: 84, name: 'Watchmen' },
  { id: 85, name: 'Monstro do pântano' },
  //Marvel
  { id: 86, name: 'Demolidor: A queda de Murdock' },
  { id: 87, name: 'Homem-aranha: A última caçada de Kraven' },
  { id: 88, name: 'Wolverine:Logan' },
  //Graphic Novels
  { id: 89, name: 'Maus' },
  { id: 90, name: 'Moonshadow' },
  { id: 91, name: 'Pílulas azuis' },
  { id: 92, name: 'Retalhos' },
  //Mangás
      //Seinen
  { id: 93, name: 'Berserk (volume 41)' },
  { id: 94, name: 'Vagabond (volume 1)' },
  { id: 95, name: 'One punch-man (volume 7)' },
  { id: 96, name: 'Monster Kanzenban (volume 8)' },
  { id: 97, name: 'NHK Ni Youkoso (volume 4)' },
  { id: 98, name: 'Grand Blue (volume 9)' },
    //Shounen
  { id: 99, name: 'Noragami (volume 7)' },
  { id: 100, name: 'FullMetal Alchemist (volume 10)' },
  { id: 101, name: 'One Piece (volume 100)' },
    //Josei
  { id: 102, name: 'Koe no Katachi (volume 2)' },
  { id: 103, name: 'Paradise Kiss (volume 1)' }
];