function AtividadeForm(props) {
    return (
        <div>
            <form className="row g-3">
                
                <input id="id" type="hidden" value={props.getId()} readOnly/>
            
                <div className="col-md-6">
                    <label className="form-label">Título</label>
                    <input className="form-control" id="titulo" type="text" placeholder="Título" />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Prioridade</label>
                    <select className="form-select" id="prioridade">
                        <option defaultValue="0">Selecione...</option>
                        <option value="1">Baixa</option>
                        <option value="2">Normal</option>
                        <option value="3">Alta</option>
                    </select>
                </div>
                
                <div className="col-md-12">
                    <label className="form-label">Descrição</label>
                    <textarea className="form-control" id="descricao" type="text" placeholder="Descrição" />
                </div>

                <div className="col-md-12">
                    <button id="btn" onClick={props.btnAdicionar} className="mt-3 btn btn-outline-success me-2">
                        <i class="fas fa-plus me-2"></i>
                        Adicionar
                    </button>

                    <button onClick={props.btnCancelar} className="mt-3 btn btn-outline-warning">
                        <i class="fas fa-x me-2"></i>
                        Cancelar
                    </button>

                </div>
                
            </form>
        </div>
        
    );
}

export default AtividadeForm;