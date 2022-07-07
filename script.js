// Requisito 3
const botao = document.getElementById('button');

const email = document.getElementById('login');

const senha = document.getElementById('senha');

function alerta() {
  const usuario = 'tryber@teste.com';
  const senhaDeAcesso = '123456';
  if (email.value === usuario && senha.value === senhaDeAcesso) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botao.addEventListener('click', alerta);

// Requisito 18
const submitB = document.getElementById('submit-btn');

const agreedCheck = document.getElementById('agreement');

submitB.disabled = true;

function habilitarBotao() {
  if (agreedCheck.checked === true) {
    submitB.disabled = false;
  } else {
    submitB.disabled = true;
  }
}
agreedCheck.addEventListener('click', habilitarBotao);

// Requisito 20
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');

function contadorDeCaracteres() {
  const tamanhoArea = textArea.value.length;
  counter.innerHTML = 500 - tamanhoArea;
}

textArea.addEventListener('input', contadorDeCaracteres); // ref.: https://www.w3schools.com/jsref/event_oninput.asp

// questão 21
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const section = document.getElementById('relatorio');
const email2 = document.getElementById('input-email');
const casa = document.getElementById('house');

function gerarNome() {
  const p = document.createElement('p');
  section.appendChild(p);
  p.innerText = `Nome: ${nome.value} ${sobrenome.value}`;
}

function gerarEmail() {
  const p = document.createElement('p');
  section.appendChild(p);
  p.innerText = `Email: ${email2.value}`;
}

function gerarCasa() {
  const p = document.createElement('p');
  section.appendChild(p);
  p.innerText = `Casa: ${casa.value}`;
}

function gerarFamilia() {
  const p = document.createElement('p');
  section.appendChild(p);
  const front = document.getElementById('front');
  const back = document.getElementById('back');
  const full = document.getElementById('full');
  let checked;
  if (front.checked) {
    checked = front.value;
  }
  if (back.checked) {
    checked = back.value;
  }
  if (full.checked) {
    checked = full.value;
  }
  p.innerText = `Família: ${checked}`;
}

function gerarMateria() {
  const p = document.createElement('p');
  section.appendChild(p);
  const materia = document.getElementsByClassName('subject');
  const conteudo = [];
  for (let i = 0; i < materia.length; i += 1) {
    if (materia[i].checked) {
      const salvarMareria = ` ${materia[i].value}`;
      conteudo.push(salvarMareria);
    }
  }
  p.innerText = `Matérias: ${conteudo}`;
}

function gerarNota() {
  const nota = document.getElementsByClassName('nota');
  const p = document.createElement('p');
  section.appendChild(p);
  for (let i = 0; i < nota.length; i += 1) {
    const numero = nota[i];
    if (numero.checked) {
      p.innerText = `Avaliação: ${numero.value}`;
    }
  }
}

function gerarObservacao() {
  const p = document.createElement('p');
  section.appendChild(p);
  p.innerText = `Observações: ${textArea.value}`;
}

function salvarForm() {
  localStorage.setItem('salvar-form', JSON.stringify(section.innerHTML));
}
function gerarRelatorio() {
  gerarNome();
  gerarEmail();
  gerarCasa();
  gerarFamilia();
  gerarMateria();
  gerarNota();
  gerarObservacao();
  salvarForm();
}

submitB.addEventListener('click', gerarRelatorio);

window.onload = function form() {
  const lista = JSON.parse(localStorage.getItem('salvar-form', section.innerHTML));
  if (lista) {
    section.innerHTML = lista;
  }
};
