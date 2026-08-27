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


O mais importante aqui é manter um registro das ultimas jogadas realizadas para que as funcionalidades de REDO e UNDO consigam acessa-las

meu primeiro passo foi tentar salva o estado das jogadas, mas pela minha falta de conhecimento com JavaScript isso não foi possivel.

Estou tentando entender como funciona a ativação do butão New Game, para ver se consigo implementar alguma lógica com os outros botões

A ideia que gostaria de implementar é a seguinte:
- Montamos uma array que salva o estado da partida sempre que uma jogada é feita. E toda vez que uma nova jogada valida é realizada, essa array é sobescrita. Dessa forma conseguimos guardar sempre o ultimo estado do jogo
- A ativação do botão UNDO faria 2 coisas: guardaria o estado atual da partida em uma segunda array, e retornaria o estado atual do jogo para o valor  salvo na primeira array. Dessa forma nós voltamos uma jogada na partida mas ainda sim guardamos o estado da partida antes do botão ser acionado. E caso a partida tenha resultado em uma vitória/finalização, nós guardamos essa informação em uma variavel e ativariamos uma função que traria as condições do jogo para um estado de não finalizado, revertendo as mudanças que haviam sido aplicadas.
- A ativação do botão REDO, por sua vez, levaria o valor armazenado naquela segunda array que comentamos para o estado atual da partida, e guardaria o valor da jogada que era a atual na primeira array caso o botão de UNDO fosse acionado novamente. E também seria feito uma checagem na variavel que guardaria a informação se o jogo foi finalizado/ganho e traria de volta essas condições para a partida.
- Também teriamos que trocar o Jogador atual da rodada toda vez que qualquer um dos botões fosse acionado. Ou seja, independente do botão acionado, quando se percebe o click em um deles, faria uma checagem onde if jogador_atual = X , então jogador_atual = y. para inverter quem joga na vez.
- Também devemos ter duas variaveis que servem para registrar se algum dos botões foi acionado. Isso serve para imperdirmos que os botões sejam pressionado 2 vezes seguidas, garantir que o Undo só seja pressinado após uma jogada valida ser feita (jogadas que já não tenham sido feitos Undos ou Redos) e para que o Redo só seja possível de ser feito imediatamente após um Redo. Ou seja, o Redo só tem sua variavel como 0 após um Undo ser feito, ela começa como 1 e logo na rodada seguinte ao Undo ser feito ela volta a ser 1. Já o Undo começa como 1, e em toda rodada que não tenha sido feito um Undo ou Redo, sua variavel vira 0. Quando uma nova partida é iniciada, os valores dessas variaveis voltam a ser 1, impedindo que o Redo e o Undo sejam feitos e também deixando as cores dos respectivos botões mais apagadas, para sinalizar que não podem ser usados.
- Seria necessário também a implementação de testes para essas novas funcionalidades, visando garantir que os botões só possam ser pressinados em momentos validos, que o jogador da rodada seja o correto, e que estados de vitória/empate sejam revertidos dependendo da situação. 