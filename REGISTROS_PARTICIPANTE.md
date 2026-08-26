# Registros do Participante

Este arquivo é um espaço opcional e de uso livre durante a atividade.

Você pode utilizá-lo da forma que considerar mais útil para o seu trabalho. Por exemplo, ele pode servir como:

documentação própria da solução;

- anotações;

- rascunhos;

- observações;

- lembretes;

- listas ou checklists;

- referências;

qualquer outro registro que você considere útil durante a implementação.

Não existe um formato esperado, nem é necessário preencher este arquivo para concluir a atividade.

Caso utilize este espaço, organize o conteúdo da maneira que preferir.

---

Registros

Hanna Epelboim Assunção 2310289
O que preciso implementar:

Undo:
Desfazer jogada --> provavelmente preciso salvar a ultima jogada para poder refaze-la OU salvar o estado do jogo para voltar a ele
   Somente a ultima jogada.   --> provavelmente alguma flag para mostrar que nao posso refazer o undo
   Voltar ao jogador. Se X moveu, clicou em undo, X joga de novo.

Redo:
Desfaz o undo --> salvar jogada que o undo desfez e tbm alguma flag para verificar se undo foi realizado naquele momento
Passa para o prox jogador : Se X moveu, X clicou em undo, X clicou em redo, Y joga.



Testei o jogo, passa em 31 testes e fala se deu empate ou quem ganhou.

Entendi o game.js e provavelmente terei que adicionar flags para saber quando posso realizar undo e redo

Entendi o script.js

Flags de inicio:

    flag_undo_made: false, se o undo foi realizado
    flag_redo_made: false, se o redo foi realizado

--> get next player atualizado para handle o prox jogador depois do redo/undo

    se NAO realizei o undo OU realizei o redo --> vida normal
    se realizei o undo --> repete jogador

apply move precisa ser refatorado. Daonde vem board.slice? é ela que eu refatoro ou o apply move?
board.slice é do python pelo que entendi
vou refatorar na applymove

Se redo ou undo vou tirar ou botar o last_move. Criei essa variavel também. 

Criei uma auxiliar para desfazer o movimento.

Como o next[index] funciona?  --> applyMove chamado na handleClick
Talvez eu precise tirar a cell da memoria do script tbm... parece que nao é no script.js... Acho que o codigo foi feito para que essa logica estivesse no game.js... Queria refatorar aenas esse arquivo no backend e depois só o html e se precisar o css

Tem um erro na inicializacao das flags e das minhas variaveis, que nao deixa o codigo rodar para eu verificar oq o next move imprime exatamente(oq o apply move retorna)

Supondo que ele retorne exatamente a nova posicao com o player tambem, pois ai ele fala bom na posicao X,Y tem o player A, posso retornar no take off, na posicao X,Y que foi a da ultima jogada nao tem nenhum player... Talvez retornando a string vazia... ''

Gostaria de testar isso para ver se renderizaria certo e se a logica poderia ser essa... Desse modo só faltariam os botoes na ui e conectalos, além de fazer uma ogica para qnd setar e resetar as flags. 

Vou fazer a logica dasd flags para terminar o backend e dps faco o front. Normalmente eu faria o front agora para testar o takeOff, mas como isso vai depender de um erro de sintaxe, vou assumir que ele funciona por conta do tempo. 

  flag_can_make_redo: false,
    flag_can_make_undo:false,

Criei mais duas flags que eu acho que poderia nao utilizar, mas para simplificar a logica, vou usar.


function undo:

    vejo se há algum last_move e se eu posso fazer o undo
    se eu puder seto que posso fazer redo, nao posso refazer undo e que eu fiz o undo

function redo:

    vejo se há algum last_move e se eu posso fazer o redo
    se eu puder seto que nao posso fazer redo, nao posso refazer undo e que eu fiz o redo


no apply move preciso ajeitar a logica de novo

se fiz undo nada preciso atualizar

se fiz o redo vai passar p o prox player ent vou setar que posso ter undo e redo e que eles nao foram realizados

se passou direto eles tbm sao atualizados. 

Talvez ao inves dessa logica grande e confusa posso fazer uma logica de se o last_move for diferente do last_undo_redo move posso voltar. Mas tbm tem erro nessa logica... preisaria zerar o last_undo_redo move. Meu medo é na logica de cima dar u conflito com se eu posso u nn fazer o undo/redo sendo q o X só clica no undo na vez de Y... 

vou com a minha variavel last_undo_redo já que nao consigo testar... eu vou zerar ela sempre que trocar o player... Ou posso fazer uima funcao que reseta minhas flags.

Percebi meu erro... nao passei nas variaveis, agora TALVEZ eu possa testar o codigo

CONSERTEI 
(9) ['X', '', '', '', '', '', '', '', '']
script.js:31 (9) ['X', 'O', '', '', '', '', '', '', '']
script.js:31 (9) ['X', 'O', '', 'X', '', '', '', '', '']
script.js:31 (9) ['X', 'O', '', 'X', '', '', 'O', '', '']
script.js:31 (9) ['X', 'O', '', 'X', 'X', '', 'O', '', '']
script.js:31 (9) ['X', 'O', '', 'X', 'X', '', 'O', 'O', '']
script.js:31 (9) ['X', 'O', '', 'X', 'X', '', 'O', 'O', 'X']
Agora sei que estava certa e minha logica vai funcionar. 
Acho que o back end está feito, vou criar os btns no front para testar

Criei os btns no index.html

agora faltar linkar eles as suas funcoes. Nao sei como fazer vou ver no script.js

const restartBtn     = document.getElementById('restart');
restartBtn.addEventListener('click', restartGame);
 essas linhas tem semelhanca... criei linhas iguais para as minhas funcoes

Como linko agora? Linkei certo... realmente me basear no codigo já escrito funcionou...mas a lgica precisa de ajuste

Preciso de uma logica que agora com as flags setadas chamo o proximo movimento...

Refatorei a handle click... é a logica que preciso sem o click. 

Move Game 
script.js:40 (9) ['X', '', '', '', '', '', '', '', '']
script.js:38 Move Game 
script.js:40 (9) ['X', 'O', '', '', '', '', '', '', '']0: "X"1: "O"2: ""3: ""4: ""5: ""6: ""7: ""8: ""length: 9[[Prototype]]: Array(0)
script.js:74 undo clicked
game.js:107 undo called
script.js:38 Move Game 
script.js:40 null
script.js:74 undo clicked
game.js:107 undo called
script.js:38 Move Game 

O fluxo tá certo porem ela nn printa mais o board com o undo...

Minha logica parece ter erros. 

Talvez na verdade eu esteja manipulando errado as variaveis... altero elas nas funcoes mas nao consigo envialas.

Minhas flags dão null ou undefined...

undo called
script.js:38 Move Game 
script.js:40 null
script.js:38 Move Game 
script.js:40 (9) ['X', 'O', 'X', 'O', '', '', '', '', '']
game.js:31 undefined
script.js:74 undo clicked
game.js:108 undo called
script.js:38 Move Game 
script.js:40 null


Pesquisei e nao posso retornar 2 valores numa funcao js.... mas posso com array.

Vou criar essa variavel agora como um array flags[flag_can_make_redo, flag_can_make_undo, flag_undo_made, flag_redo_made]

como eu faco data.flags? 

talvez trocar isso:
function createInitialState() {
  return {
    board:   Array(9).fill(''),
    current: 'X',
    gameOver: false,
    flag_undo_made: false,
    flag_redo_made: false,
    flag_can_make_redo: false,
    flag_can_make_undo:false,
    last_move: [],
  };
}

por isso: 
function createInitialState() {
  return {
    board:   Array(9).fill(''),
    current: 'X',
    gameOver: false,
    flags: [false, false, false, false],
    last_move: [],
  };
}

Fica melhor e mais facil

preciso refatorar as funcoes que eu fiz agora.

function undo(last_move, flag_undo_made, flag_can_make_redo,flag_can_make_undo){

  console.log("undo called")

  if (!last_move){
    return
  }
  if(!flag_can_make_undo){
    return
  }

  flags[0] = true
  flags[1] = false
  flags[2] = true
  return flags


}

ficou ruim de entender com flags[0] e assim... se tivesse mais tempo escreveria comentarios ou nomearia de outro jeito.... talvez usasse enum ou dicionario 


Existem algumas coisas que eu faria diferente se tivesse mais tempo: 
Li o codigo antes de implementar(não mudaria isso), mas se eu tivesse mais tempo talvez implementasse o front primeiro para ir testando devagar cada passo. Não achei a forma que eu fiz ruim, porque para o tempo qe tive, prefiro comecar pelo back, para não fazer nada correndo... Se começasse pelo front ficaria nervosa por nao saber quanto tempo levaria no back e não iria fazer nenhum deles com qualidade. Porém idealmente, com mais tempo iria fazendo e testando cada pedacinho e refinando 100%... Como nessa atividade era mais a logica de como refatorar, preferi comecar pela logica do back e ir voltando, testando as minhas modificações em blocos maiores, uma vez que foi explicado que o codigo não precisava rodar 100%. Assim, acho que estruturei a logica da maneira que quero, sabendo que os erros que estão aparcenedo são da linguagem... passagem de parametro, retorno de parametro e como armazeno as variaveis. O codigo nao funciona 100% mas agora só precisa chamar o clear flags na parte certa e fazer uns ajustes de sintaxe (que nao priorizei por não ser o foco da atividade, se fosse num codigo que a funcionalidade fosse a prioridade, isso seria priorizado, assim como o script de testes, que num codigo onde a funcionalidade fosse priorizada eu jamais deixara um teste nao passar apos alguma alteração completa - implementar um pedaco de codigo que já nao deveria mais dar erro... no dia a dia rodaria o script de testes com mais frequencia).
 