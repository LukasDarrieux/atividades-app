const DESATIVADO = 0;
const EM_ANALISE = 1;
const ATIVO = 2;

function ClienteLista(props) {

    function getSituacao(situacao) {
        switch (situacao) {
            case DESATIVADO:
                return "Desativado";
            case EM_ANALISE:
                return "Em Análise";
            case ATIVO:
                return "Ativo";
            default:
                return "";
        }

    }

    function getIconeSituacao(situacao) {
        switch (situacao) {
            case DESATIVADO:
                return "times";
            case EM_ANALISE:
                return "clock";
            case ATIVO:
                return "check";
            default:
                return "";
        }
    }

    function getColorSituacao(situacao) {
        switch (situacao) {
            case DESATIVADO:
                return "danger";
            case EM_ANALISE:
                return "primary";
            case ATIVO:
                return "success";
            default:
                return "";
        }
    }

    return (
        <div className="mt-3">
            <table className="table table-striped table-hover cursor-pointer">
                <thead className="table-dark"> 
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Responsável</th>
                        <th>Contato</th>
                        <th>Situação</th>
                        <th>&nbsp;</th>
                    </tr>
                    
                </thead>
                <tbody>

                    {
                       props.clientes.length > 0 
                       ? 
                       props.clientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.responsavel}</td>
                            <td>{cliente.contato}</td>
                            <td className={"text-" + getColorSituacao(cliente.situacao)}>
                                <i className={"fas fa-" + getIconeSituacao(cliente.situacao) + " me-2"}></i>
                                {getSituacao(cliente.situacao)}
                            </td>
                            <td>
                                
                                <button className="btn btn-outline-primary me-3" onClick={() => props.getCliente(cliente.id)}>
                                    <i className="fas fa-pen me-2"></i>
                                    Editar
                                </button>

                                <button className="btn btn-outline-danger" onClick={() => props.handleClienteConfirm(cliente.id)}>
                                    <i className="fas fa-trash me-2"></i>
                                    Deletar
                                </button>
                            
                            </td>
                        </tr>
                        ))
                        :
                        <tr className="text-center">
                            <td colspan="6">Nenhum cliente cadastrado</td>
                        </tr>
                    }
                </tbody>
                
            </table>
            
        </div>
    );
}

export default ClienteLista;