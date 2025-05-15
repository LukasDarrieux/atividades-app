function AtividadeItem(props) {
    return (
        <div className={"card mb-2 shadow-sm border-" + props.prioridadeColor(props.atividade.prioridade)}>
            <div className="card-body">
            
            <div className="d-flex justify-content-between ">
                <h5> 
                <span className={"badge bg-" + props.prioridadeColor(props.atividade.prioridade) + " me-1"}>
                    {props.atividade.id}
                </span> - &nbsp; 
                {props.atividade.titulo}</h5>
                <h6>
                Prioridade:  
                <span className={"ms-1 text-" + props.prioridadeColor(props.atividade.prioridade)}>
                    <i className={"me-1 far fa-" + props.prioridadeIcone(props.atividade.prioridade)}></i>
                    {props.prioridadeLabel(props.atividade.prioridade)}
                </span>
                </h6>
            </div>
            
            <p className="card-text" key={props.atividade.id}>{props.atividade.id} - {props.atividade.descricao}</p>
            
            <div className="d-flex justify-content-end pt-2 m-0 border-top" >
                <button onClick={() => props.getAtividade(props.atividade.id)} className="btn btn-outline-primary me-2 btn-sm">
                    <i className="fas fa-pen me-2"></i>
                    Editar
                </button>

                <button onClick={() => props.deletarAtividade(props.atividade.id)} className="btn btn-outline-danger btn-sm">
                    <i className="fas fa-trash me-2"></i>
                    Deletar
                </button>
            </div>  
            </div>
        </div>

    );
}

export default AtividadeItem;