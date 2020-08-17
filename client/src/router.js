import initCadastro from './componentes/cadastro/componente-cadastro';
import initTabela from './componentes/lista/listagem-cliente';
import initEdicao from './componentes/edita/form-edicao';

const rotas = {
  '/': initTabela,
  '/cadastro': initCadastro,
  '/edita': initEdicao
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

window.navegacao = navegacao;

// evento de retirada de uma sessão do histórico
window.onpopstate = () => {
  rootDiv.innerHTML = '';

  const rota = rotas[window.location.pathname];
  
  rootDiv.appendChild(rota());
};

export default navegacao;
