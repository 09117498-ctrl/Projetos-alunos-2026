// Mural da Turma - script.js

const form = document.getElementById('form-recado');
const inputNome = document.getElementById('nome');
const selectHumor = document.getElementById('humor');
const textoMensagem = document.getElementById('mensagem');
const mural = document.getElementById('mural');
const contador = document.getElementById('contador');
const btnLimpar = document.getElementById('btn-limpar');
const btnTema = document.getElementById('btn-tema');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = inputNome.value.trim();
  const mensagem = textoMensagem.value.trim();
  const humor = selectHumor.value;

  if (nome === '' || mensagem === '') {
    alert('Preencha o nome e o recado!');
    return;
  }

  const card = document.createElement('article');
  card.classList.add('card', 'humor-' + humor);

  const info = document.createElement('div');
  info.classList.add('info');

  const titulo = document.createElement('h3');
  titulo.textContent = nome;

  const texto = document.createElement('p');
  texto.textContent = mensagem;

  const detalhe = document.createElement('small');
  detalhe.textContent = 'Humor: ' + humor;

  info.appendChild(titulo);
  info.appendChild(texto);
  info.appendChild(detalhe);

  const btnRemover = document.createElement('button');
  btnRemover.type = 'button';
  btnRemover.textContent = 'Remover';
  btnRemover.classList.add('btn-remover');
  btnRemover.addEventListener('click', function () {
    card.remove();
    contador.textContent = mural.children.length;
  });

  card.appendChild(info);
  card.appendChild(btnRemover);
  mural.appendChild(card);
  contador.textContent = mural.children.length;
  form.reset();
  inputNome.focus();
});

btnLimpar.addEventListener('click', function () {
  mural.innerHTML = '';
  contador.textContent = mural.children.length;
});

btnTema.addEventListener('click', function () {
  document.body.classList.toggle('escuro');
});
