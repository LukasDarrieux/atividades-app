function ClienteForm() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="form-label">Nome</label>
                        <input className="form-control" type="text" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="form-label">Responsável</label>
                        <input className="form-control" type="text" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label">Contato</label>
                        <input className="form-control" type="text" />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label">Situação</label>
                        <select className="form-select">
                            <option valueDefault="0">Desativado</option>
                            <option value="1">Em análise</option>
                            <option value="2">Ativo</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-12">
                        <button className="btn btn-outline-success">
                            <i className="fas fa-plus me-2"></i>
                            Adicionar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClienteForm;