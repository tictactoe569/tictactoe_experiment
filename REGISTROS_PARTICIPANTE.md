# Registros do Participante

Este arquivo é um espaço opcional e de uso livre durante a atividade.

Você pode utilizá-lo da forma que considerar mais útil para o seu trabalho. Por exemplo, ele pode servir como:

documentação própria da solução;

- anotações;

Eu preciso primeiro recordar qual foi o ultimo movimento, depois eu vou precisar usar criar uma função que retorna o tabuleiro aqule estado.Na função undo a ideia seria pegar esse ultimo movimento guardado e modificar o tabuleiro de caordo. Como só é um movimento eu só preciso modificar o ultimo espaço do vetor a ser modificado de volta a "" e como os turnos se alternam para retornar o turno pro jogador certo eu posso só usar a função de passar o turno. A função undo também não pode funcionar no primeiro e turno e não pode funcionar duas vezes, iniciamente eu considero fazer q se o registro da jogada anterior for nula o undo não fucione e esvaziar a tupla depois do undo, porém isso atrapalharia fazer o redo depois já que eu perderia acesso a jogada. Daria pra fazer uma flag que impede dois undo além do vetor nulo,talvez isso funcione melhor

 Para o redo se eu ainda tiver a tupla do movimento anterior acho que se apenas usar a função applymove com os dados da ultima jogada daria certo, só precisa garantir que a ultima jogada foi um undo antes de aplicar o movimento

 Depois de fazer essas funções preciso mudar o script.js e o indexhmtl para haver um botão na interface que chame essas funções

  Coloquei um botão na interface de undo e liguei o id do botão para chamar um função undo. Também troquei para o arquivo certo onde deveria ser guardado o ultimo movimento, porém comecei a ter um erro onde os cliques no tabuleiro não registram então vou ter que lidar com isso agora

  Entendi qual era problema, eu estava constantemente pegando a posição do mouse ao invés de pegar só uma vez para passar pro last move, agora tenho que arranjar uma forma de fazer isso

  Consegui consertar o problema de não pegar a posição, porém existe alguma coisa errada na minha função undoLastMove já que msm ela sendo chamada o ultimo movimento não está sendo refeito


- rascunhos;

 
- observações;

Pela minha certa infamiliaridade com javascript (já que faz bastante tempo desde a ultima vez que utilizei a linguagem), estou me baseando bastante em como eu vejo outras funções sendo implementadas e tento seguir a partir disso

- lembretes;

- listas ou checklists;

- referências;

qualquer outro registro que você considere útil durante a implementação.

Não existe um formato esperado, nem é necessário preencher este arquivo para concluir a atividade.

Caso utilize este espaço, organize o conteúdo da maneira que preferir.

---

Registros
