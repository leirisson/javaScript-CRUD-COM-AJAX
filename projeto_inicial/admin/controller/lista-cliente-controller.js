import { clienteService } from '../service/cliente-service.js';

const tabela = document.querySelector("[data-tabela]");

clienteService.listaDeClientes()
    .then(dadosCliente => {
        dadosCliente.forEach(element => {
            tabela.appendChild(criarNovaLinha(element.nome, element.email, element.id))
        });
    })


// deletando uma linha da lista 
tabela.addEventListener('click', async (e) => {
    if (e.target.classList.contains('botao-simples--excluir')) {
        const linhaCliente = e.target.closest("[data-id]");
        let id = linhaCliente.dataset.id;
        clienteService.deletarUmCliente(id)
        await  linhaCliente.remove();
         
    } 
});


const criarNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
    <td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
        <ul class="tabela__botoes-controle">
            <li>
            <a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">
            Editar</a>
            </li>
            <li>
            <button class="botao-simples botao-simples--excluir" data-excluir type="button">Excluir</button>
            </li>
        </ul>
    </td>
`
    linhaNovoCliente.innerHTML = conteudo;
    linhaNovoCliente.dataset.id = id;
    return linhaNovoCliente;
}
