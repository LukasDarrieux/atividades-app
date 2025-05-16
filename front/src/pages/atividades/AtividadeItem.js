const BAIXA = 1;
const NORMAL = 2;
const ALTA = 3;

function AtividadeItem(props) {

    function prioridadeLabel(param) {
    
        switch(param) {
            case BAIXA:
                return "Baixa";
                
            case NORMAL:
                return "Normal";
                
            case ALTA:
                return "Alta";

            default:
                return "Não definida...";
                
        }

    }

    function prioridadeColor(param) {
        
        switch(param) {
            case BAIXA:
                return "success"

            case NORMAL:
                return "dark";

            case ALTA:
                return "danger";
            
            default:
                return "secondary";
        }
    }

    function prioridadeIcone(param) {
        
        switch(param) {
            case BAIXA:
                return "smile";
                
            case NORMAL:
                return "meh";

            case ALTA:
                return "frown";
            
            default: 
                return "";
        }
    }


    return (
        <div className={"card mb-2 shadow-sm border-" + prioridadeColor(props.atividade.prioridade)}>
            <div className="card-body">
            <div className="d-flex justify-content-between ">
                <h5 className="card-title"> 
                    <span className={"badge bg-" + prioridadeColor(props.atividade.prioridade) + " me-1"}>
                        {props.atividade.id}
                    </span> - &nbsp; 
                    {props.atividade.titulo}
                </h5>
                
                <h6>
                Prioridade:  
                <span className={"ms-1 text-" + prioridadeColor(props.atividade.prioridade)}>
                    <i className={"me-1 far fa-" + prioridadeIcone(props.atividade.prioridade)}></i>
                    {prioridadeLabel(props.atividade.prioridade)}
                </span>
                </h6>
            </div>
            
            <p className="card-text" key={props.atividade.id}>{props.atividade.id} - {props.atividade.descricao}</p>
            
            <div className="d-flex justify-content-end pt-2 m-0 border-top" >
                <button onClick={() => props.pegarAtividade(props.atividade.id)} className="btn btn-outline-primary me-2 btn-sm">
                    <i className="fas fa-pen me-2"></i>
                    Editar
                </button>

                <button onClick={() => props.handleConfirmModal(props.atividade.id)} className="btn btn-outline-danger btn-sm">
                    <i className="fas fa-trash me-2"></i>
                    Deletar
                </button>
            </div>  
            </div>
        </div>

    );
}

export default AtividadeItem;