import AtividadeItem from "./AtividadeItem";

function AtividadeLista(props) {

    const BAIXA = 1;
    const NORMAL = 2;
    const ALTA = 3;

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
        <div className="mt-4">
        {
          props.atividades.map(atividade => (
            <AtividadeItem 
              key={atividade.id}
              atividade={atividade}
              prioridadeColor={prioridadeColor}
              prioridadeIcone={prioridadeIcone}
              prioridadeLabel={prioridadeLabel}
              deletarAtividade={props.deletarAtividade}
              getAtividade={props.getAtividade}
            />
          ))
        }
      </div>
    );
}

export default AtividadeLista;