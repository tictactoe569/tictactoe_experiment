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

 o Undo deve desfazer somente a última jogada realizada;
 após um Undo, o tabuleiro deve voltar à situação anterior àquela jogada e o turno deve retornar ao jogador que a realizou;
 após realizar um Undo, não deve ser possível desfazer uma segunda jogada consecutivamente;
 o Redo deve refazer a jogada desfeita pelo Undo, restaurando o tabuleiro e o jogador da vez correspondentes;
# ao desfazer uma jogada que resultou em vitória ou empate, a partida deve voltar a permitir novas jogadas;
# ao refazer uma jogada que resulte em vitória ou empate, o resultado correspondente deve voltar a ser reconhecido e a partida deve permanecer encerrada;
 se uma nova jogada for realizada após um Undo, a jogada anteriormente disponível para Redo não deve mais poder ser refeita;
* o controle(?) de Undo deve ficar indisponível quando não houver uma jogada que possa ser desfeita;
* o controle(?) de Redo deve ficar indisponível quando não houver uma jogada que possa ser refeita;
 ao iniciar uma nova partida, não deve ser possível desfazer ou refazer jogadas da partida anterior. // game restarta o old, entao só checar

ideis:
-- data tambem armazena board antigo, assim como o jogador anterior e um boleano que indica se foi usado o undo.
-- HANDLECLICK atualiza old board e j ant.
-- fazer func undo para trocar board old com new e troaar bol.
-- alterar handle click para nao deixar fazer mesma jogada.
?

-----
na tenho ideia de proque os botoes nao funcionam... ;-;
F