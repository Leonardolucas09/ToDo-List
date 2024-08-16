import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props

    const [criador, setCriador] = useState('Leonardo Lucas de Oliveira');

    const [tarefas, setTarefas] = useState([]);

    const [loadingCarregar, setLoadingCarregar] = useState(false)
    const [loadingDeletar, setLoadingDeletar] = useState(null)
    const [loadingEditar, setLoadingEditar] = useState(null)
    const [loadingCriar, setLoadingCriar] = useState(false)

    async function carregarTarefa () {
        setLoadingCarregar(true);
        const { data = [] } = await api.get("/tarefas");
        // const response = await api.get("/tarefas");
        // console.log(response)
        setTarefas([
            ...data,
        ])
        setLoadingCarregar(false);
    };

    async function adicionarTarefa(nomeTarefa){
        setLoadingCriar(true)
        const { data: tarefa } = await api.post("/tarefas", {
            nome: nomeTarefa,
        });
        
        setTarefas(estadoAtual => {
            return[
                ...estadoAtual,
                tarefa,
            ]
        });
        setLoadingCriar(false)
    }
    
    async function removerTarefa(idTarefa) {
        setLoadingDeletar(idTarefa);
        await api.delete(`tarefas/${idTarefa}`);
        
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.filter(tarefa => tarefa.id !== idTarefa);
            
            return [
                ...tarefasAtualizadas,
            ];
        })
        setLoadingDeletar(null);
    };
    
    async function editarTarefa(idTarefa, nomeTarefa) {
        setLoadingEditar(idTarefa);
        const { data: tarefaAtualizada } = await api.put(`tarefas/${idTarefa}`, {
            nome: nomeTarefa,
        })
        
        setTarefas(estadoAtual => {
            const tarefasAtualizadas = estadoAtual.map(tarefa => {
                return tarefa.id == idTarefa ? {
                    ...tarefa,
                    nome: tarefaAtualizada.nome
                } : tarefa;
            });
            return [
                ...tarefasAtualizadas,
            ]
        });
        setLoadingEditar(null)
    };
    
    useEffect(() => {
        // console.log("Montou")
        carregarTarefa();
    }, []);

    return(
        <AppContext.Provider value={{
            criador, 
            tarefas,
            adicionarTarefa,
            removerTarefa,
            editarTarefa,
            loadingCarregar,
            loadingCriar,
            loadingDeletar,
            loadingEditar
        }}>
            {children}
        </AppContext.Provider>
    )
}