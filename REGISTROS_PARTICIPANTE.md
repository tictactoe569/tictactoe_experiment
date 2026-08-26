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

Primeiramente, precisei criar duas variáveis globais pra armazenar:
    SE um undo foi feito recentemente (undoneRecenlty), iniciado em false
    Uma dupla [index, player] (mostRecentMove, inicializado em [10,'']) indicando quem jogou aonde na última jogada

Depois, as funções Undo e Redo.

Undo verifica se o jogador atual é diferente do que fez a última jogada, se não é a dupla default e se não foi refeita alguma jogada recentemente. Passando pelo if, chama applyMove passando como parâmetro mostRecentMove[0] e '' (minha intenção aqui era forçar applyMove a printar E renderizar um quadrado vazio, porque não consegui encontrar outro(s) meio(s) de trocar VISUALMENTE o conteúdo dos quadrados).

Redo verifica se undoneRecently === true e tenta, por meio de applyMove, re-aplicar a jogada salva em mostRecentMove, desfazendo o Undo.

Como não encontrei uma forma de renderizar as mudanças de Undo e Redo no tabuleiro, minha esperança era que applyMove pudesse cuidar disso para mim, já que a função já veio implementada e funciona plenamente para clicks nas células do tabuleiro.

Por meio do console, verifiquei que de fato as alterações mais recentes estavam funcionando "por debaixo dos panos", realmente só não mudou o tabuleiro visualmente.