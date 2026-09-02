# Atividade — Jogo da Velha

## Antes de começar

Antes de iniciar o experimento, leia o Termo de Consentimento Livre e Esclarecido (TCLE - https://forms.gle/yKGLiZDrLrdE98wD9) e, caso deseje autorizar o uso anonimizado dos seus dados para fins de pesquisa acadêmica, assine o termo.

Leia atentamente os arquivos **`GUIA_EXECUCAO_EXPERIMENTO.md`** e **`CONFIG_GOOGLE.md`** e siga as orientações descritas neles. 

Caso considere útil durante a atividade, você pode utilizar o arquivo **`REGISTROS_PARTICIPANTE.md`** para fazer anotações, refatorações, rascunhos ou outros registros relacionados à sua implementação.

Após concluir essas etapas, continue com as instruções deste `README.md`.

## Objetivo

Implemente individualmente as funcionalidades de **Undo** e **Redo**, preservando o funcionamento existente do jogo da velha.

A atividade descreve o comportamento esperado dessas funcionalidades. A organização interna da solução fica a seu critério.

## Uso de IA

Não é permitido utilizar ferramentas de IA generativa ou assistentes de programação durante a atividade. Isso inclui GitHub Copilot, ChatGPT, Codex, Claude, Gemini, Cursor, agentes de programação e ferramentas equivalentes de geração, explicação ou modificação automática de código por IA.

## Uso da internet

É permitido utilizar um navegador para realizar pesquisas na internet durante a atividade.

Você pode consultar, por exemplo, documentação de linguagens e tecnologias, fóruns, tutoriais e mecanismos de busca convencionais.

O uso da internet não altera a restrição sobre ferramentas de IA: não é permitido utilizar assistentes de IA generativa ou recursos equivalentes para gerar, explicar ou modificar código.

## Undo e Redo

Adicione ao jogo as funcionalidades de **Undo** e **Redo**.

O **Undo** deve desfazer a última jogada realizada.

O **Redo** deve refazer a jogada que foi desfeita pelo Undo.

As funcionalidades devem atender aos seguintes comportamentos:

* o Undo deve desfazer somente a última jogada realizada;
* após um Undo, o tabuleiro deve voltar à situação anterior àquela jogada e o turno deve retornar ao jogador que a realizou;
* após realizar um Undo, não deve ser possível desfazer uma segunda jogada consecutivamente;
* o Redo deve refazer a jogada desfeita pelo Undo, restaurando o tabuleiro e o jogador da vez correspondentes;
* ao desfazer uma jogada que resultou em vitória ou empate, a partida deve voltar a permitir novas jogadas;
* ao refazer uma jogada que resulte em vitória ou empate, o resultado correspondente deve voltar a ser reconhecido e a partida deve permanecer encerrada;
* se uma nova jogada for realizada após um Undo, a jogada anteriormente disponível para Redo não deve mais poder ser refeita;
* o controle de Undo deve ficar indisponível quando não houver uma jogada que possa ser desfeita;
* o controle de Redo deve ficar indisponível quando não houver uma jogada que possa ser refeita;
* ao iniciar uma nova partida, não deve ser possível desfazer ou refazer jogadas da partida anterior.

## Como executar o jogo

Abra `index.html` em um navegador.

## Testes básicos

Use o botão **TEST** do jogo ou abra `tests.html` em um navegador.

Os testes fornecidos verificam somente o funcionamento básico já existente do jogo e não necessariamente verificam as funcionalidades de Undo e Redo.

## Critério de conclusão

A atividade estará concluída quando:

* o jogo continuar funcionando normalmente;
* Undo e Redo apresentarem todos os comportamentos descritos acima.
