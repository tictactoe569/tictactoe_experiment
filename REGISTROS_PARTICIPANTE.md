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


apos a chamada do clique eu habilitei o botao de desfazer e guardei o index numa variavel global para que pudesse ser acessado pela função que iria desfazer o clique, ai ela sobrescreve o campo com a string vazia e redesenha, apos o clique na função de desfazer o botao de refazer é habilitado e ele novamente acessa a variavel do index, mas escreve no campo a figura correspondente ao jogador corrente que foi quem fez o desfazer e ai passa para o proximo participante, ao final da undo ela é desabilitada e ao final do redo ele é desabilitado também, não permitindo que faça dois "redo" pois o jogador so pode desfazer a sua jogada e nao a anterior.

também desativei o redo assim que é clicado em alguma area (ele so é ativado quando clicamos em desfazer), pois percebi que se o movimento fosse desfeito e nao clicassemos em redo e sim no campo do jogo, ele nao entrava na função redo para desativar o botao (que so era desativado ao final do redo) e assim o botao ficava ativado para o proximo participante que nem tinha jogado ainda, o que nao faz sentido. 