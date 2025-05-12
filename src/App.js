import { useState } from "react";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";

function App() {
  
  const [atividades, setAtividades] = useState([]);
  
  function btnAdicionar(e) {

    e.preventDefault();

    const id = parseInt(document.getElementById("id").value)
    const ativ = atividades.find(a => a.id === id);

    if (ativ === undefined) {
      adicioneAtividade();
    } else {
      atualizeAtividade(id);
    }
    limpeForm();
  }

  function btnCancelar(e) {
    e.preventDefault();

    limpeForm();
  }

  function getAtividade(id) {
    const ativ = atividades.find(a => a.id === id);

    document.getElementById("id").value = ativ.id;
    document.getElementById("titulo").value = ativ.titulo;
    document.getElementById("descricao").value = ativ.descricao;
    document.getElementById("prioridade").value = ativ.prioridade;

    const icone = "<i class='fas fa-save me-2'></i>";
    document.getElementById("btn").innerHTML = icone + "Salvar";
  }

  function adicioneAtividade() {
    
    const atividade = {
      id: getId(),
      titulo: document.getElementById("titulo").value,
      descricao: document.getElementById("descricao").value,
      prioridade: parseInt(document.getElementById("prioridade").value)
    }

    setAtividades([...atividades, { ...atividade }])
  }

  function atualizeAtividade(id) {
    
    const atividadesLista = atividades;

    const index = atividadesLista.findIndex(a => a.id === id);

    atividadesLista[index].descricao = document.getElementById("descricao").value;
    atividadesLista[index].titulo = document.getElementById("titulo").value;
    atividadesLista[index].prioridade = parseInt(document.getElementById("prioridade").value);

    setAtividades([...atividadesLista]);
  }

  function deletarAtividade(id) {
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltradas]);
  }
  
  function getId() {
    if (atividades.length === 0) return 1;
    return parseInt(atividades[atividades.length - 1].id + 1);
  }

  function limpeForm() {
    const VALOR_PADRAO_COMBO = 0;

    document.getElementById("id").value = getId();
    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("prioridade").selectedIndex = VALOR_PADRAO_COMBO;

    const icone = "<i class='fas fa-plus me-2'></i>";
    document.getElementById("btn").innerHTML = icone + "Adicionar";
  }
  
  return (
    
    <div className="container mt-3">

      <AtividadeForm 
        btnAdicionar={btnAdicionar}
        btnCancelar={btnCancelar}
        getId={getId}
      />  

      <AtividadeLista 
        getAtividade={getAtividade}
        deletarAtividade={deletarAtividade}
        atividades={atividades}
      />

    </div>
  );
}

export default App;
