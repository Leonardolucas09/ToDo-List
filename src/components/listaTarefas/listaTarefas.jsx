// import { Botao, TIPO_BOTAO } from "../botao";
import { ListaTarefasItem } from "./listaTarefasItem";

import style from './listaTarefas.modules.css';
import { useAppContext } from "../../hooks";
import { Loading } from "../loading";

function ListaTarefas() {

    const { tarefas, loadingCarregar } = useAppContext();

    return(
        <ul className={style.ListaTarefas}>
            {loadingCarregar && (
                <p>
                    Carregando... <Loading/>
                </p>
            )}
            
            {!loadingCarregar && !tarefas.length && (
                <p>Não há tarefas cadastradas.</p>
            )}

            {tarefas.map(item => ( 
                <ListaTarefasItem 
                key={item.id} 
                id={item.id} 
                nome={item.nome}
                />
            ))}
            
        </ul>
    );
};

export { ListaTarefas }