import { deletaCliente, listarClientes } from "../../api/cliente";

const removeCliente = (id) => {
  if (confirm("Deseja deletar o cliente ?")) {
    debugger;
    deletaCliente(id)
    window.location.reload()
  }
}

const criaCorpoTabela = (tabela) => {
  const corpoTabela = document.createElement('tbody');
  const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement('tr');
  
    const conteudoLinha = `
      <td>${cpf}</td>
      <td>${nome}</td>
      <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
      <a href="./edita/edita-clientes.html?id=${id}">
      <button type=""button class="btn btn-info">Editar</button>
      </a>
    `;
  
    linha.innerHTML = conteudoLinha;
    return linha;
  };
  
  listarClientes().then(exibe => {
    exibe.forEach(indice => {
      corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))
    })
  });
  
  tabela.appendChild(corpoTabela);
};



const initTabela = () => {
  const conteudo = `
    <thead class="thead-dark">
      <tr>
        <th scope="col">CPF</th>
        <th scope="col">Nome</th>
        <th scope="col"></th>
        <th scope="col">
          <a class="btn btn-primary" onclick="navegacao('/cadastro'); return false;">
            Novo Cliente
          </a>
        </th>
      </tr>
    </thead>
  `;

  const tabela = document.createElement('table');
  tabela.innerHTML = conteudo;
  tabela.classList.add('table');

  criaCorpoTabela(tabela);

  return tabela;
};

export default initTabela;
