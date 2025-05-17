import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import Title from "../../components/Title";
import ClienteLista from "./ClienteLista";
import ClienteForm from "./ClienteForm";
import api from "../../api/api";

function Cliente() {

    const[showClienteModal, setShowClienteModal] = useState(false);
    const[showClienteConfirm, setShowClienteConfirm] = useState(false);

    const[clientes, setClientes] = useState([]);
    const[clienteSelecionado, setClienteSelecionado] = useState({id: 0});

    function handleClienteModal() {
        setShowClienteModal(!showClienteModal);
    }

    function handleClienteConfirm(id) {
        if (id !== 0 && id !== undefined) {
            const cliente = clientes.find(c => c.id === id);
            setClienteSelecionado(cliente);
        } else {
            setClienteSelecionado({id: 0});
        }
        setShowClienteConfirm(!showClienteConfirm);
    }

    function cancelarCliente() {
        setClienteSelecionado({id: 0});
        handleClienteModal();
    }

    async function adicionarCliente(cliente) {
        handleClienteModal();
        cliente.situacao = parseInt(cliente.situacao);
        const response = await api.post("clientes", cliente);
        setClientes([...clientes, response.data]);
    }

    async function atualizarCliente(cliente) {
        handleClienteModal();
        cliente.situacao = parseInt(cliente.situacao);
        const response = await api.put("clientes/" + cliente.id, cliente);
        const { id } = response.data;
        setClientes(
            clientes.map(item => (item.id === id ? cliente : item)
        ));
    }

    async function deletarCliente(id) {
        handleClienteConfirm(0);
        if(await api.delete("clientes/" + id)) {
            const clientesFiltrados = clientes.filter((c) => c.id !== id);
            setClientes([...clientesFiltrados]);
        }
    }

    useEffect(() => {
        const getClientes = async () => {
            const todosClientes = await BuscarClientes();
            if (todosClientes) setClientes(todosClientes)
        };
        getClientes();
    }, []);

    async function BuscarClientes() {
        const response = await api.get("clientes");
        return response.data;
    }

    function getCliente(id) {
        const cliente = clientes.find(c => c.id === id);
        setClienteSelecionado(cliente);
        handleClienteModal();
    }

    return (
        <div className="container mt-3">
            <Title title="Clientes">
                <Button variant="outline-success" onClick={handleClienteModal}>
                    <i className="fas fa-plus me-2"></i>
                    Novo Cliente
                </Button>
            </Title>

            <ClienteLista 
                clientes={clientes}
                getCliente={getCliente}
                handleClienteConfirm={handleClienteConfirm}
            />

            <Modal show={showClienteModal} onHide={handleClienteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Cliente {clienteSelecionado.id !== 0 ? clienteSelecionado.id : " Novo" }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ClienteForm 
                        adicionarCliente={adicionarCliente}
                        atualizarCliente={atualizarCliente}
                        cancelarCliente={cancelarCliente}
                        clienteSelecionado={clienteSelecionado}
                    />
                </Modal.Body>
            </Modal>

            <Modal show={showClienteConfirm} onHide={handleClienteConfirm}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Excluindo Cliente {" "}
                        {clienteSelecionado.id ? clienteSelecionado.id : ""}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tem certeza que deseja excluir o cliente <strong>{clienteSelecionado.id + " " + clienteSelecionado.nome}</strong>? 
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <button className="btn btn-outline-success" onClick={() => deletarCliente(clienteSelecionado.id)}>
                        <i className="fas fa-check me-2"></i>
                        Sim
                    </button>

                    <button className="btn btn-outline-danger" onClick={() => handleClienteConfirm()}>
                        <i className="fas fa-x me-2"></i>
                        Não
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Cliente;