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

###SEGUE ABAIXO MEUS REGISTROS ################

------------- OBSERVACAO IMPORTANTE  ------------
Nao tenho experiencia com javascript, todo meu codigo que fiz foi seguindo padroes e sintaxes parecidas com python, por isso nao consegui acabar todo o desafio

Porem para finalizar ele, o que faltou foi apenas a as celulas ativarem depois de fazer o undo/redo depois do jogo terminar, o que eu faria rodando o loop de ativas as celulas caso o checkgame desse true ao apertar o undo/redo (antes deles atualizarem os boards) assim as celulas manteriam ativadas

----REFATORACOES FEITAS E PLANEJADAS ----------------
Criei um helper checkEndgame que verifica se o jogo terminou ou nao, pois eu repetiria o codigo nas funcoes do redo e undo.

Tambem deixei alguns comentarios no codigo, entre eles em uma funcao que utiliza metodos depreciados que para melhores praticas deveria ser trocado por outro (nao troquei pois nao tive tempo)

function setStatus(msg, cls = '') {
  status.textContent = msg;
  status.className   = 'status' + (cls ? ` ${cls}` : ''); // METODO status DEPRECEADO
}

eu tambem refatoraria o css juntando os elementos que tem mudancas iguais e refatoraria o html para nao usar css inline, pois é melhor pratica juntar todo o css

eu tambem adicionaria mais comentarios ao codigo existente e caso tivesse mais tempo revisaria o codigo dos testes pois ate quando meu codigo tinha falhas visiveis todos os testes ainda passavam, o que contradiz seus propositos.



--------REFERENCIAS---------

Por mais que eu nao saiba muito javascript, ja mexi um pouco antes com eventhandlers de botoes dele, e boa parte da sintaxe desse trabalho eram similares a python e C. entao consegui fazer boa parte dele, apenas nao tive tempo de reativar as cedulas depois de um redo/undo depois de terminar o jogo