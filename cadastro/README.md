# Atividade 2 - Validação do cadastro

Este projeto foi feito em equipe no SENAI, na disciplina de JavaScript. A ideia era criar um formulário de cadastro que confere os dados antes de aceitar o envio, avisando a pessoa quando algo estiver errado.

## Equipe
- Antony
- Gabriel
- Jadson
- Victor

## Arquivos do projeto
- `cadastro.html`: a página com o formulário
- `cadastro.css`: o visual da página
- `cadastro.js`: o código que valida os campos e mostra as mensagens
- `prints/`: os prints dos testes que fizemos

Os três arquivos precisam ficar na mesma pasta para a página funcionar direito.

## Como abrir o projeto
1. Abra a pasta do projeto no VS Code.
2. Clique com o botão direito no `cadastro.html`.
3. Escolha "Open with Live server"

## O que a gente fez
Quando a pessoa clica em Cadastrar, o evento `submit` do formulário é capturado e usamos o `preventDefault` para a página não recarregar. Depois o código lê o que foi digitado em cada campo (nome, e-mail e nome do projeto) e confere se está tudo certo.

As mensagens aparecem dentro do próprio formulário. Quando tem erro, aparece um texto em vermelho embaixo do campo com o problema. Quando está tudo certo, aparece uma mensagem de sucesso em verde no final.

## Regras de validação
- **Nome:** não pode ficar vazio e precisa ter pelo menos 3 letras.
- **E-mail:** não pode ficar vazio, precisa ter `@` e `.` e não pode ter espaço.
- **Nome do projeto:** não pode ficar vazio e precisa ter pelo menos 3 letras.

## Testes que fizemos
Testamos três situações para ver se o formulário reage do jeito certo.

### Teste 1: dados vazios
Deixamos os três campos em branco e clicamos em Cadastrar. O esperado é aparecer um erro em vermelho em cada campo e a mensagem "Corrija os campos em vermelho."

![Teste 1](prints/cadastro%20vazio.png)

### Teste 2: dados errados
Preenchemos o nome com `ad`, o e-mail com `Gabriel` e o projeto com `gg`. O esperado é aparecer erro nos três campos, porque o nome e o projeto são curtos demais e o e-mail está sem o `@`.

![Teste 2](prints/cadastro%20errado.png)

### Teste 3: dados corretos
Preenchemos o nome com `Gabriel`, o e-mail com `gabriel@gmail.com` e o projeto com `Pedido Interativo`. O esperado é aparecer a mensagem "Cadastro enviado com sucesso, Jadson!" em verde.

![Teste 3](prints/cadastro%20correto.png)
