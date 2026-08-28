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

1- O undo só é possível caso ocorra um redo
2- Como regra de negócio, o undo só pode ocorrer uma vez por jogada, logo, não é possível realizar múltiplos undos e redos

Testes feitos:
- Checa se o undo remove a marca da célula correta.
- Checa se o undo não altera o tabuleiro original.
- Checa se o undo salva corretamente o jogador removido.
- Checa se o undo salva corretamente o índice da jogada.
- Checa se o undo retorna nulo ao tentar remover uma célula vazia.
- Checa se o undo retorna nulo para índices inválidos.
- Checa se o undo retorna nulo quando já existe um undoState.
- Checa se as outras células permanecem inalteradas após o undo.
- Checa se o redo restaura a marca na célula correta.
- Checa se o redo não altera o tabuleiro original.
- Checa se o redo retorna nulo quando não existe um undoState.
- Checa se o redo retorna nulo para índices inválidos.
- Checa se o redo retorna nulo ao tentar ocupar uma célula já preenchida.
- Checa se o redo limpa o undoState após restaurar a jogada.
- Checa se o redo restaura o jogador correto.
- Checa se as outras células permanecem inalteradas após o redo.
- Checa se uma jogada desfeita pode ser restaurada pelo redo.