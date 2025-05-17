import AtividadeItem from "./AtividadeItem";

function AtividadeLista(props) {

    
    return (
        <div className="mt-4">
        {
          props.atividades.length > 0
          ?
          props.atividades.map((atividade) => (
            <AtividadeItem 
              key={atividade.id}
              atividade={atividade}
              pegarAtividade={props.pegarAtividade}
              handleConfirmModal={props.handleConfirmModal}
            />
          ))
          :
          <h4 className="text-center">Nenhum Atividade Cadastrada</h4>
        }
      </div>
    );
}

export default AtividadeLista;