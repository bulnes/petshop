import initCadastro from './componentes/cadastro/componente-cadastro';

const rotas = {
  '/cadastro': initCadastro
};

const rootDiv = document.querySelector('[data-container]');

const navegacao = (pathname) => {
  // pushState adiciona mais uma sessão no histórico do navegador
  // origin informa de onde viemos, qual a nossa página de origem
  window.history.pushState({}, pathname, window.location.origin + pathname);

  rootDiv.innerHTML = '';

  const iniciarRota = rotas[window.location.pathname];

  rootDiv.appendChild(iniciarRota());
};

export default navegacao;
