import AtividadeItem from "./AtividadeItem";

function AtividadeLista(props) {

    
    return (
        <div className="mt-4">
        {
          props.atividades.map((atividade) => (
            <AtividadeItem 
              key={atividade.id}
              atividade={atividade}
              pegarAtividade={props.pegarAtividade}
              handleConfirmModal={props.handleConfirmModal}
            />
          ))
        }
      </div>
    );
}

export default AtividadeLista;