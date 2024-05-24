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


const deletarUmCliente = async (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "DELETE"
    })
}

const exibirDaDosCliente = async (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(response => {
       return response.json()
    })

}


// atualizando os dados do cliente
const EditarCliente = async (id, nome, email) =>{
    return fetch(`http://localhost:3000/profile/${id}`, {
        method:"PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(
            {
                nome: nome,
                email: email
            }
        )
    })
    .then( response => {
        return response.json()
    })
}

export const clienteService =  {
    listaDeClientes,
    cadastrarNovoCliente,
    deletarUmCliente,
    exibirDaDosCliente,
    EditarCliente
};

