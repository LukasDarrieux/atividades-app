import { useState, useEffect } from "react";
import api from "../../api/api";

const DESATIVADO = 0;
const EM_ANALISE = 1;
const ATIVO = 2;

function ClienteLista() {

    const[clientes, setClientes] = useState([]);

    useEffect(() => {
        const getClientes = async () => {
            const todosClientes = await BuscarClientes();
            if (todosClientes) setClientes(todosClientes)
        };
        getClientes();
    }, []);

    async function BuscarClientes() {
        const response = await api.get("clientes");
        return response.data;
    }

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
            <table className="table table-striped">
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
                    {clientes.map((cliente) => (
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
                                
                                <button className="btn btn-outline-primary me-3">
                                    <i className="fas fa-pen me-2"></i>
                                    Editar
                                </button>

                                <button className="btn btn-outline-danger">
                                    <i className="fas fa-trash me-2"></i>
                                    Deletar
                                </button>
                            
                            </td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
            
        </div>
    );
}

export default ClienteLista;