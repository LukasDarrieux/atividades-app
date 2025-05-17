import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Title from "../../components/Title";
import ClienteLista from "./ClienteLista";
import ClienteForm from "./ClienteForm";

function Cliente() {

    const[showClienteModal, setShowClienteModal] = useState(false);
    const[cliente, setCliente] = useState({id: 0});

    function handleClienteModal() {
        setShowClienteModal(!showClienteModal);
    }

    return (
        <div className="container mt-3">
            <Title title="Clientes">
                <Button variant="outline-success" onClick={handleClienteModal}>
                    <i className="fas fa-plus me-2"></i>
                    Novo Cliente
                </Button>
            </Title>

            <ClienteLista />

            <Modal show={showClienteModal} onHide={handleClienteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Cliente {cliente.id !== 0 ? cliente.id : " Novo" }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ClienteForm />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Cliente;