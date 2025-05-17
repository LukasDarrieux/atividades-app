import { useState, useEffect } from "react";
import Title from "../../components/Title";
import Cards from "./Cards";
import api from "../../api/api";

function Home() {

    const[clientes, setClientes] = useState([]);
    const[atividades, setAtividades] = useState([]);
    

    //-------------------------------------------------------------

    useEffect(() => {
        const getClientes = async () => {
            const todosClientes = await BuscarClientes();
            if (todosClientes) setClientes(todosClientes);
        };
        getClientes();
    }, []);

    async function BuscarClientes() {
        const response = await api.get("clientes");
        return response.data;
    }

    function getQuantidadeClienteSituacao(situacao) {
        const clientesSituacao = clientes.filter(c => c.situacao === situacao)
        return clientesSituacao.length;
    }

    //---------------------------------------------------------------------

    useEffect(() => {
        const getAtividades = async () => {
            const todasAtividades = await BuscarAtividades();
            if (todasAtividades) setAtividades(todasAtividades)
        };
        getAtividades();
    }, []);

    async function BuscarAtividades() {
        const response = await api.get("atividades");
        return response.data;
    }

    function getQuantidadeAtividadesPrioridade(prioridade) {
        const atividadesPrioridade = atividades.filter(a => a.prioridade === prioridade)
        return atividadesPrioridade.length;
    }



    return (
        <div className="container mt-3">
            <Title title="DashBoard" />

            <div className="row mt-4">
                <h2 className="mt-4">Clientes</h2>
                <Cards conteudo={clientes.length} titulo="Clientes" color="secondary"/>
                <Cards conteudo={getQuantidadeClienteSituacao(0)} titulo="Em Análise" color="primary"/>
                <Cards conteudo={getQuantidadeClienteSituacao(1)} titulo="Desativado" color="danger"/>
                <Cards conteudo={getQuantidadeClienteSituacao(2)} titulo="Ativo" color="success"/>
            </div>

            <div className="row mt-4">
                <h2 className="mt-4">Atividades</h2>
                <Cards conteudo={atividades.length} titulo="Atividades" color="secondary"/>
                <Cards conteudo={getQuantidadeAtividadesPrioridade(0)} titulo="Não Atribuído" color="secondary"/>
                <Cards conteudo={getQuantidadeAtividadesPrioridade(1)} titulo="Baixa" color="success"/>
                <Cards conteudo={getQuantidadeAtividadesPrioridade(2)} titulo="Normal" color="primary"/>
                <Cards conteudo={getQuantidadeAtividadesPrioridade(3)} titulo="Alta" color="danger"/>
            </div>
        </div>
    );
}

export default Home;