import { clienteService } from "../service/cliente-service.js";

// pegadno a url da pagina atual
const pegarUrlAtual = new URL(window.location)

// otendo o id do cliente atual
const id_cliente = pegarUrlAtual.searchParams.get('id');


// capturando os campos para receber os dados do clienete

const inputNome = document.querySelector('[data-nome]');
const inputEmail = document.querySelector('[data-email]');
const form = document.querySelector("[data-form]");



clienteService.exibirDaDosCliente(id_cliente)
.then(dados => {
        inputNome.value = dados.nome;
        inputEmail.value = dados.email;
    }
)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    clienteService.EditarCliente(id_cliente, inputNome.value, inputEmail.value)
    .then(() => {
        window.location.href = '../telas/edicao_concluida.html'
    })
})