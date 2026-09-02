# Guia de Execução do Experimento

Este documento contém as instruções necessárias para iniciar, realizar e finalizar o experimento.

A atividade que deverá ser implementada está descrita no `README.md`.

---

## 1. Criando seu Fork

Acesse o repositório do experimento:

```text
https://github.com/IsabelaYabe/tictactoe_experiment
```

No canto superior direito da página, clique em **Fork**.

Na página seguinte:

1. selecione sua conta do GitHub;
2. mantenha o nome sugerido para o repositório;
3. clique em **Create fork**.

Ao final, você terá uma cópia do repositório em sua própria conta.

---

## 2. Clonando o Repositório

No seu fork, clique em **Code** e copie a URL HTTPS.

Ela será semelhante a:

```text
https://github.com/SEU_USUARIO/tictactoe_experiment.git
```

Abra um terminal e execute:

```bash
git clone https://github.com/SEU_USUARIO/tictactoe_experiment.git
cd tictactoe_experiment
```

Antes de continuar, confirme que não existem alterações locais:

```bash
git status
```

Para abrir o VSCode:

```bash
code .
```
---

## 3. Executando o Projeto

Abra:

```text
index.html
```

em um navegador.

Confirme que o jogo está funcionando normalmente antes de iniciar a atividade.

---

## 4. Executando os Testes

Os testes básicos podem ser executados de duas maneiras:

* abra `index.html` e clique no botão **TEST**; ou
* abra `tests.html` diretamente no navegador.

Antes de começar a atividade, confirme que os testes fornecidos estão passando.

Esses testes verificam somente o funcionamento básico já existente do sistema.

Caso considere necessário, você poderá criar testes adicionais durante a atividade.

---

## 5. Realizando a Atividade

Abra o arquivo:

```text
README.md
```

Leia a especificação da atividade e realize a implementação solicitada.

Durante o desenvolvimento:

* execute o jogo sempre que considerar necessário;
* utilize os testes disponíveis para verificar se o comportamento existente continua funcionando.

---

## 6. Finalizando o Trabalho

Quando considerar que terminou, execute:

```bash
git status
```

Se desejar conferir as alterações realizadas:

```bash
git diff
```

Adicione os arquivos modificados:

```bash
git add .
```

Crie o commit:

```bash
git commit -m "Complete experiment task"
```


Envie suas alterações para o seu fork:

```bash
git push 
```

## 7. Conferindo a Entrega

Abra seu fork no GitHub.

Confirme que:

* o commit aparece no histórico;
* as alterações realizadas estão presentes;
* os arquivos modificados foram enviados corretamente.

Após essa conferência, sua participação está finalizada.

Não exclua seu fork após o experimento.

---

# Resumo

### Para começar

```bash
git clone https://github.com/SEU_USUARIO/tictactoe_experiment.git
cd tictactoe_experiment
git status
```

Depois:

```text
1. Execute o jogo
2. Execute os testes
3. Leia o README.md
4. Realize a atividade
```

### Para finalizar

```bash
git status
git add .
git commit -m "Complete experiment task"
git push
```

Depois, abra seu fork no GitHub e confirme que o commit e as alterações foram enviados corretamente.
