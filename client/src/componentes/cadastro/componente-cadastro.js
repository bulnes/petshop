import eventoEnvia from "./cadastro-clientes";

const cadastro = `
  <div class="container">
    <div class="form-group">
      <label>CPF</label>
      <input type="number" class="form-control" data-cpf placeholder="Digite seu CPF aqui" />
    </div>
    <div class="form-group">
      <label>Nome</label>
      <input type="text" class="form-control" data-nome placeholder="Digite seu nome aqui" />
    </div>
    <button type="submit" class="btn btn-primary">Enviar</button>
  </div>
`;

const form = document.createElement('form');
form.innerHTML = cadastro;

const initCadastro = () => {
  const container = document.querySelector('[data-container]');
  container.innerHTML = '';
  container.appendChild(form);
  eventoEnvia(form);
  return form;
};

export default initCadastro;
