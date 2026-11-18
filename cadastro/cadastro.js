const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoProjeto = document.getElementById("projeto");
const erroNome = document.getElementById("erro-nome");
const erroEmail = document.getElementById("erro-email");
const erroProjeto = document.getElementById("erro-projeto");
const mensagemFinal = document.getElementById("mensagem-final");

function mostrarErro(campo, elementoErro, texto) {
  elementoErro.textContent = texto;
  campo.classList.add("invalido");
}

function limparMensagens() {
  erroNome.textContent = "";
  erroEmail.textContent = "";
  erroProjeto.textContent = "";
  mensagemFinal.textContent = "";
  mensagemFinal.className = "";
  campoNome.classList.remove("invalido");
  campoEmail.classList.remove("invalido");
  campoProjeto.classList.remove("invalido");
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  limparMensagens();

  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const projeto = campoProjeto.value.trim();
  let valido = true;

  if (nome === "") {
    mostrarErro(campoNome, erroNome, "Digite seu nome.");
    valido = false;
  } else if (nome.length < 3) {
    mostrarErro(campoNome, erroNome, "O nome precisa ter pelo menos 3 letras.");
    valido = false;
  }

  if (email === "") {
    mostrarErro(campoEmail, erroEmail, "Digite seu e-mail.");
    valido = false;
  } else if (!email.includes("@") || !email.includes(".") || email.includes(" ")) {
    mostrarErro(campoEmail, erroEmail, "Digite um e-mail válido, como nome@email.com.");
    valido = false;
  }

  if (projeto === "") {
    mostrarErro(campoProjeto, erroProjeto, "Digite o nome do projeto.");
    valido = false;
  } else if (projeto.length < 3) {
    mostrarErro(campoProjeto, erroProjeto, "O nome do projeto precisa ter pelo menos 3 letras.");
    valido = false;
  }

  if (valido) {
    mensagemFinal.textContent = "Cadastro enviado com sucesso, " + nome + "!";
    mensagemFinal.className = "sucesso";
    formulario.reset();
  } else {
    mensagemFinal.textContent = "Corrija os campos em vermelho.";
    mensagemFinal.className = "falha";
  }
});
