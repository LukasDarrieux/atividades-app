import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import AtividadeForm from "./AtividadeForm";
import AtividadeLista from "./AtividadeLista";
import Title from "../../components/Title";
import api from "../../api/api";

function Atividade() {

    const [showAtividadeModal, setShowAtividadeModal] = useState(false);
    const [showConfirmModal, setConfirmModal] = useState(false);

    const [atividades, setAtividades] = useState([]);
    const [atividade, setAtividade] = useState({id: 0});
    
    function handleAtividadeModal() {
        setShowAtividadeModal(!showAtividadeModal);
    }

    function handleConfirmModal(id) {
        if (id !== 0 && id !== undefined) {
            const atividade = atividades.find(a => a.id === id);
            setAtividade(atividade);
        } else {
            setAtividade({id: 0});
        }
        setConfirmModal(!showConfirmModal);
    }

    async function pegarTodasAtividades() {
        const response = await api.get("atividades");
        return response.data;
    }

    async function adicionarAtividade(ativ) {
        handleAtividadeModal();
        ativ.prioridade = parseInt(ativ.prioridade)
        const response = await api.post("atividades", ativ);
        setAtividades([...atividades, response.data]);
    }

    function cancelarAtividade() {
        setAtividade({id: 0});
        handleAtividadeModal();
    }

    async function atualizarAtividade(ativ) {
        handleAtividadeModal();
        ativ.prioridade = parseInt(ativ.prioridade)
        const response = await api.put("atividades/" + ativ.id, ativ);
        const { id } = response.data;
        setAtividades(
            atividades.map((item) => (item.id === id ? ativ : item))
        );
        setAtividade({id: 0});
    }

    async function deletarAtividade(id) {
        handleConfirmModal(0);
        if (await api.delete("atividades/" + id)) {
            const atividadesFiltradas = atividades.filter((a) => a.id !== id);
            setAtividades([...atividadesFiltradas]);
        }
    }

    function pegarAtividade(id) {
        const atividade = atividades.find(a => a.id == id);
        setAtividade(atividade);
        handleAtividadeModal();
    }

    function novaAtividade() {
        setAtividade({id: 0});
        handleAtividadeModal();
    }

    useEffect(() => {
        const getAtividades = async () => {
            const todasAtividades = await pegarTodasAtividades();
            if (todasAtividades) setAtividades(todasAtividades);
        };
        getAtividades();
    }, []);


    return (

        <div className="container mt-3">

            <Title title={"Atividade " + (atividade.id !== 0 ? atividade.id : "")}>
                
                <Button variant="outline-success" onClick={novaAtividade}>
                    <i className="fas fa-plus me-2"></i>
                    Novo
                </Button>
            </Title>

            <AtividadeLista 
                atividades={atividades}
                pegarAtividade={pegarAtividade}
                handleConfirmModal={handleConfirmModal}
            />

            <Modal show={showAtividadeModal} onHide={handleAtividadeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Atividade {atividade.id !== 0 ? atividade.id : "" }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AtividadeForm 
                        adicionarAtividade={adicionarAtividade}
                        cancelarAtividade={cancelarAtividade}
                        atualizarAtividade={atualizarAtividade}
                        ativSelecionada={atividade}
                        atividades={atividades}
                    />
                </Modal.Body>
            </Modal>

            <Modal show={showConfirmModal} onHide={handleConfirmModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Excluindo Atividade{" "}
                        {atividade.id !== 0 ? atividade.id : ""}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Tem certeza que deseja excluir a atividade {atividade.id}?
                </Modal.Body>

                <Modal.Footer className="d-flex justify-content-between">
                    <button className="btn btn-outline-success me-2" onClick={() => deletarAtividade(atividade.id)}>
                        <i className="fas fa-check me-2"></i>
                        Sim
                    </button>

                    <button className="btn btn-outline-danger me-2" onClick={() => handleConfirmModal(0)}>
                        <i className="fas fa-times me-2"></i>
                        Não
                    </button>
                </Modal.Footer>
            </Modal>

        </div>
    );

}

export default Atividade;