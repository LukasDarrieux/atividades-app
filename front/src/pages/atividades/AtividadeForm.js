import { useState, useEffect } from "react";

const atividadeInicial = {
    id: 0,
    titulo: "",
    descricao: "",
    prioridade: 0
};

function AtividadeForm(props) {
    
    const [atividade, setAtividades] = useState(atividadeAtual());  

    useEffect(() => {
        if (props.ativSelecionada.id !== 0) setAtividades(props.ativSelecionada);
    }, [props.ativSelecionada]);

    const inputTextHandler = (e) => {
        const {id, value} = e.target;
        setAtividades({...atividade, [id]: value});
    };

    function handleSubmit(e) {

        e.preventDefault();

        if (props.ativSelecionada.id !== 0) props.atualizarAtividade(atividade);
        else props.adicionarAtividade(atividade);

        setAtividades(atividadeInicial);
    }

    function handleCancelar(e) {
        e.preventDefault();

        props.cancelarAtividade();

        setAtividades(atividadeInicial);
    }

    function atividadeAtual() {
        if(props.ativSelecionada.id !== 0) 
            return props.ativSelecionada;
        
        return atividadeInicial;
    }


    return (
        <div>
            <form className="row g-3">
                
                <div className="col-md-6">
                    <label className="form-label">Título</label>
                    <input className="form-control" id="titulo" type="text" placeholder="Título" onChange={inputTextHandler} value={atividade.titulo}/>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Prioridade</label>
                    <select className="form-select" id="prioridade" onChange={inputTextHandler} value={atividade.prioridade}>
                        <option defaultValue="0">Selecione...</option>
                        <option value="1">Baixa</option>
                        <option value="2">Normal</option>
                        <option value="3">Alta</option>
                    </select>
                </div>
                
                <div className="col-md-12">
                    <label className="form-label">Descrição</label>
                    <textarea className="form-control" id="descricao" type="text" placeholder="Descrição" onChange={inputTextHandler} value={atividade.descricao}/>
                </div>

                <div className="col-md-12">
                    {
                        atividade.id === 0 ? (
                            <button type="submit" onClick={handleSubmit} className="mt-3 btn btn-outline-success me-2">
                                <i class="fas fa-plus me-2"></i>
                                Adicionar
                            </button>
                        ):
                        (
                            <div>
                                <button type="submit" onClick={handleSubmit} className="mt-3 btn btn-outline-success me-2">
                                    <i className="fas fa-save me-2"></i>
                                    Salvar
                                </button>

                                <button onClick={handleCancelar} className="mt-3 btn btn-outline-warning">
                                    <i className="fas fa-x me-2"></i>
                                    Cancelar
                                </button>
                            </div>
                        )
                    }

                </div>
                
            </form>
        </div>
        
    );
}

export default AtividadeForm;