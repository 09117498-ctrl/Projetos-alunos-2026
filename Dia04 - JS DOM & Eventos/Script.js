// ============================================================
// DIA 04: MANIPULAÇÃO DO DOM E EVENTOS NO DEVTASK
// ============================================================

// 1. SELEÇÃO DOS ELEMENTOS DO HTML
const formTarefa = document.getElementById('form-tarefa');
const inputTitulo = document.getElementById('titulo');
const selectCategoria = document.getElementById('categoria');
const listaTarefas = document.getElementById('lista-tarefas');

// 2. ESCUTAR O EVENTO DE SUBMIT DO FORMULÁRIO
formTarefa.addEventListener('submit', function (event) {
  // Impede o comportamento padrão do navegador de recarregar a página
  event.preventDefault();

  // Captura os valores digitados pelo utilizador
  const titulo = inputTitulo.value.trim();
  const categoria = selectCategoria.value;

  // Validação simples
  if (titulo === '') {
    alert('Por favor, digite o título da tarefa!');
    return;
  }

  // 3. CRIAR O NOVO CARD DE TAREFA DINAMICAMENTE
  const novoCard = document.createElement('article');

  novoCard.innerHTML = `
    <div class="info">
      <h3>${titulo}</h3>
      <p><strong>Categoria:</strong> ${categoria}</p>
      <p><strong>Status:</strong> Pendente</p>
    </div>
    <div class="acoes">
      <button type="button" class="btn-concluir">Concluir</button>
      <button type="button" class="btn-excluir">Excluir</button>
    </div>
  `;

  // 4. ADICIONAR O NOVO CARD DENTRO DA LISTA
  listaTarefas.appendChild(novoCard);

  // 5. LIMPAR OS CAMPOS DO FORMULÁRIO E DAR FOCO NO INPUT
  formTarefa.reset();
  inputTitulo.focus();
});