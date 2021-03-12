/**
 * Atualiza os números das linhas da folha de papel.
 */
function atualizarNumeroLinhas() {
  const linhaNumeros = document.getElementsByClassName('linha-numero')

  for (let i = 0; i < linhaNumeros.length; i++) {
    const linhaNumero = linhaNumeros[i]
    linhaNumero.innerText = (i + 1).toString(10)
  }
}

/**
 * Criar uma linha para ser adicionada a folha de papel.
 * @param {String} texto - o conteúdo da linha.
 * @returns {Node} Um elemento html que representa a linha.
 */
function criarLinha(texto) {
  const linha = document.createElement('div')
  linha.classList.add('linha')

  const linhaNumero = document.createElement('div')
  linhaNumero.classList.add('linha-numero')

  const linhaConteudo = document.createElement('div')
  linhaConteudo.classList.add('linha-conteudo')
  linhaConteudo.innerText = texto

  linha.appendChild(linhaNumero)
  linha.appendChild(linhaConteudo)

  return linha
}

/**
 * Escreve o texto na tela.
 * @param {...any} informacoes - As informações para serem escritas na tela.
 */
function escrever() {
  const folhaPapel = document.getElementById('folha-papel')

  let novoTexto = ''
  for (let i = 0; i < arguments.length; i++) {
    novoTexto += arguments[i]
  }

  const linhasTexto = novoTexto.split('\n')

  linhasTexto.map(criarLinha).forEach(linha => {
    folhaPapel.appendChild(linha)
  })

  atualizarNumeroLinhas()
}

// sobreescreve o `console.log` para que apareça na folha de papel.
console.log = escrever

/**
 * Define o título da página na aba do navegador e também no cabeçalho da página.
 * @param {String} titulo - O título da página
 */
function definirTitulo(titulo) {
  document.title = titulo
  document.getElementById('titulo-pagina').innerText = titulo
}

/*
 * Alterna entre linhas visíveis e ocultas.
 * @param {MouseEvent} event - this
 */
function alternarVisibilidadeLinhas(event) {
  const folhaPapel = document.getElementById('folha-papel')
  if (event.target.dataset.visivel === 'true') {
    folhaPapel.classList.remove('linha-visivel')
    event.target.innerText = 'Mostrar linhas do caderno'
    event.target.dataset.visivel = 'false'
  } else {
    folhaPapel.classList.add('linha-visivel')
    event.target.innerText = 'Ocultar linhas do caderno'
    event.target.dataset.visivel = 'true'
  }
}

/*
 * Alterna a visibilidade dos numeros de linha do caderno
 * @param {MouseEvent} event - this
 */
function alternarVisibilidateNumeroLinhas(event) {
  const folhaPapel = document.getElementById('folha-papel')
  if (event.target.dataset.visivel === 'true') {
    folhaPapel.classList.remove('linha-numero-visivel')
    event.target.innerText = 'Mostrar número de linhas'
    event.target.dataset.visivel = 'false'
  } else {
    folhaPapel.classList.add('linha-numero-visivel')
    event.target.innerText = 'Ocultar número de linhas'
    event.target.dataset.visivel = 'true'
  }
}


