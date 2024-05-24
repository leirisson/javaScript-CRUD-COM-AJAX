import { clienteService } from "../service/cliente-service.js";

const formularioCadastroCliente = document.querySelector("[data-form]");


formularioCadastroCliente.addEventListener("submit" , (e) => {
    e.preventDefault();
    const nome =  e.target.querySelector('[data-nome]').value;
    const email = e.target.querySelector('[data-email]').value;

    clienteService.cadastrarNovoCliente(nome, email)
    .then(() => {
        window.location.href = '../telas/cadastro_concluido.html';
    });
    
});