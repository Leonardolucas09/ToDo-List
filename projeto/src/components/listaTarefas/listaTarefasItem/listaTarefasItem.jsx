import style from './listaTarefasItem.modules.css';
import { Botao, TIPO_BOTAO, CampoTexto, Loading } from "../..";
import { useAppContext } from '../../../hooks';
import { useState } from 'react';

function ListaTarefasItem(props) {
    
    const { id, nome } = props

    const [estaEditando, setEstaEditando] = useState(false);

    const { removerTarefa, editarTarefa, loadingDeletar, loadingEditar} = useAppContext()

    function onBlurTarefa(event) {
        const nomeTarefa = event.currentTarget.value;

        editarTarefa(id, nomeTarefa);

        setEstaEditando(false);
    }

    const loadingEstaEditando = loadingEditar == id;
    const loadingEstaDeletando = loadingDeletar == id;

    return(
        <li className={style.ListaTarefasItem}>
            {(loadingEstaEditando || estaEditando) && (
                <CampoTexto 
                defaultValue={nome}
                onBlur={onBlurTarefa}
                autoFocus/>
            )}


            {!loadingEstaEditando && !estaEditando && (
                <span 
                onDoubleClick={() => setEstaEditando(true)}>
                    {nome}
                </span>
            )}
            
            {loadingEstaEditando && (
                <Loading/>
            )}

            <Botao texto={loadingEstaDeletando ? <Loading/> : "-"} tipo={TIPO_BOTAO.SECUNDARIO} onClick={() => removerTarefa(id)}/>
        </li>
    );
};

export { ListaTarefasItem }