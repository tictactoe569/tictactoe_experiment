# Registros do Participante

Este arquivo é um espaço opcional e de uso livre durante a atividade.

Você pode utilizá-lo da forma que considerar mais útil para o seu trabalho. Por exemplo, ele pode servir como:

documentação própria da solução;

- anotações;

--mudar butões de undo e redo, como fazer eles ficarem desabilitados (pesquisar)
--botão undo duplicado removido
--Adicionei uma class para o undo e redo.
--Tentei um tutorial de javascript, mas não era o que eu esperava, meu pouco conhecimento em javascrpit me impede de fazer mais modificações;
--adicionei um classe aos botões secundarios
-- O que eu preciso fazer:
    -- Salvar um historico da ultima jogada feita, fazendo assim eu saber qual deve ser revertida
    -- Modificar os botões de undo e redo para que eles não possam ser clicados em momentos indevidos. deixar eles desabilitados até o momento certo
    -- O redo so pode ser habilitado depois de undo ser usado, capturando o momento de reiniciar a jogada.
    -- undo pega a jogada que está sendo feita agora e coloca em uma pilha, salvando se preciso, apagando da tela essa jogada, a variavel de jogador atual não é alterada.
    -- Se o redo puder ser usado, ele desenpilha a jogada atual da pilha e escreve ela no tabuleiro. sendo assim, passando a jogada para o proximo, logo a variavel de jogador atual é modificada.
    --Entender como funciona os passos de desenho do programa
    --Algo envolvendo render, sem conhecimento? eventos do mouse.
    --Precisa colocar algo sobre o evento do mouse nessa direção.
    --Funções undo e redo stack para verificar se so tem uma opção no local de pilha.

-- Entendo mais do codigo agora, mas o tempo é pequeno para eu fazer qualquer modificação.
-- Estudo sobre DOM é necessario.
-- Estudo sobre funções em javascript é necessario.


- rascunhos;
--É isso;



- observações;
 --Analisar com cuidado para não quebrar o codigo
 --Existe algumas coisas simples, como botões duplicados, sera que existe coisas mais complexas? averiguar
 -- Tomar cuidado para ver se o desenho está funcionando

- lembretes;

- listas ou checklists;
    -Analisar o codigo (feito)
    -Entender o que precisa se mudado (semi-feito)
    -Entender o que precisa se adicionado (não terminado)
    

- referências;

https://cantwell-tom.medium.com/making-an-undo-button-part-1-834d0cfd4185

https://pt.stackoverflow.com/questions/153524/habilitar-e-desabilitar-um-bot%C3%A3o

qualquer outro registro que você considere útil durante a implementação.

Não existe um formato esperado, nem é necessário preencher este arquivo para concluir a atividade.

Caso utilize este espaço, organize o conteúdo da maneira que preferir.

---

# Registros
## Comentarios
- Ao vasculhar o código, encontrei que a função handleMouseUp é qual preciso modificar para conseguir passar a source para a pilha e assim possibilitar um redo ou undo. Isso fica no script.js
- Com os meus conhecimentos de javascrip, achei o código do game.js meio complicado
- Ao analisar os arquivos .js, aparentemente devo mexer no script.js mesmo.
- Achei um código promissor para undo e redo aqui: https://cantwell-tom.medium.com/making-an-undo-button-part-1-834d0cfd4185
- Ele é muito promissor, mas não é para tictactoe, mas acho que pode ajudar.
- Fiquei muito em duvida sobre o que é "source" que algumas funções recebem, não vou pesquisar tanto a fundo porque acho que não tenho tempo
- Ao analisar os códigos do link e do codepen, percebi que só preciso alterar as funções de undo e redo mesmo, o resto aparecentemente está ok
- Acho que preciso salvar o estado da variavel data.board da função de handleClick, o player em "data.current" antes de chamar "getNextPlayer(data.current);" e acho que só. Mas o problema é que não sei fazer isso direito.
- Preciso agora habilitar o botão de undo, penso que já tenho como mostrar algum resultado, mas não me atentei tanto a essa parte.

## Passos para a solução
Preciso conseguir passar as seguintes informações para a pilha de Undo:
1- Player que acabou de realizar a ação (X ou O)
2- Estado das outras marcações de X ou O no board antes da ação

Observações:
Quando o jogador iniciar um novo jogo a pilha de Undo deve ser limpa
Quando o jogador ainda não fez uma ação ou acabou de fazer uma, não pode ser possivel realizar o Redo

Ao realizar o Undo, preciso guardar o estado dele na pilha de Redo antes de aplicar a ação.
Ao fazer o Redo, devo guardar o estado dele na pilha de Undo antes de aplicar a ação tambem.


## Passos que fiz
1- Entendi o escopo
2- Comecei limpando as listas de undo e redo ao reinciar o jogo
3- Agora na função "handleClick" fiz com que antes do board ir para outro estado, dar push na pilha de undo e tambem dar push antes de verificar o ganhador, assim tenho os estados antes de uma proxima ação guardados.
4- Na função de Undo eu defini que o board e player atuais seriam os que estavam salvos na pilha de Undo e antes disso eu salvei o estado dessa pilha na pilha de Redo.
5- Defini para mudar a mensagem do turno do jogador atual na função de Redo tambem.
6- Preciso agora habilitar o botão de undo para testar.
7- Notei que os botoes de Undo e Redo no game.js nao estão sendo utilizados, muito provavelmente é por isso que nao consegui testar.
Temos isso que não está sendo usado:
let undoBtn = document.getElementById("undo");
let redoBtn = document.getElementById("redo");


## Observações finais
- Percebi que o botão deveria ficar disponivel caso o tamanho da pilha de undo fosse maior que 1, mas por algum motivo isso não esta acontecendo
- Creio que fiz oq era necessário, não fiz refatorações por não saber tanto da linguagem
- Pela minha lógica, fiz tudo que sugeri em "passos para a solução", faltou apenas conseguir de fato testar os botoes. Como dependo do Undo para testar o Redo, fiquei sem ter o que fazer.
