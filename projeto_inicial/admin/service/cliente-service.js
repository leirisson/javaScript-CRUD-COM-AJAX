const listaDeClientes = async () => {
    return fetch(`http://localhost:3000/profile`)
    .then(response => {
        
        return response.json()
    })
};


const cadastrarNovoCliente = async (nome, email) => {
    return fetch(`http://localhost:3000/profile`,{
        method: 'POST',
        headers: {
            'Content-type' : 'apllication/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(response => {
        return response.body;
    })
}


export const clienteService = {
    listaDeClientes,
    cadastrarNovoCliente
};

