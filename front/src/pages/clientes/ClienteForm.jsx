import { useState } from "react";

const clienteNovo = {
    nome: "",
    responsavel: "",
    contato: "",
    situacao: 0
}

function ClienteForm(props) {

    const[cliente, setCliente] = useState(getCliente());

    function handleSubmit(e) {
        e.preventDefault();

        if (props.clienteSelecionado.id === 0) props.adicionarCliente(cliente);
        else props.atualizarCliente(cliente);

        setCliente(clienteNovo);
    }

    function handleCancelar() {
        props.cancelarCliente();
        setCliente(clienteNovo);
    }

    const handleTextValue = (e) => {
        const { id, value } = e.target;
        setCliente({...cliente, [id]: value});

    }

    function getCliente(){
        if (props.clienteSelecionado.id !== 0) return props.clienteSelecionado;
        return clienteNovo;
    }

    

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="form-label">Nome</label>
                        <input className="form-control" type="text" id="nome" value={cliente.nome} onChange={handleTextValue}/>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="form-label">Responsável</label>
                        <input className="form-control" type="text" id="responsavel" value={cliente.responsavel} onChange={handleTextValue}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label">Contato</label>
                        <input className="form-control" type="text" id="contato" value={cliente.contato} onChange={handleTextValue}/>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label">Situação</label>
                        <select className="form-select" id="situacao" value={cliente.situacao} onChange={handleTextValue}>
                            <option valueDefault="0">Desativado</option>
                            <option value="1">Em análise</option>
                            <option value="2">Ativo</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-12">
                        {
                            props.clienteSelecionado.id === 0 ?
                            <button className="btn btn-outline-success" onClick={handleSubmit}>
                                <i className="fas fa-plus me-2"></i>
                                Adicionar
                            </button>
                            :
                            <div>
                                <button className="btn btn-outline-success me-3" onClick={handleSubmit}>
                                    <i className="fas fa-save me-2"></i>
                                    Salvar
                                </button>

                                <button className="btn btn-outline-warning" onClick={handleCancelar}>
                                    <i className="fas fa-x me-2"></i>
                                    Cancelar
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClienteForm;