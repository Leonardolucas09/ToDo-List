import { useState } from "react";
import { Botao, CampoTexto, Loading } from "../../components";
import style from './formCriarTarefa.module.css';
import { useAppContext } from "../../hooks";
import { api } from "../../services";
// import { api } from "../../services";

function FormCriarTarefa() {
    const { adicionarTarefa, loadingCriar } = useAppContext();

    const [nomeTarefa, setNomeTarefa] = useState("");

        function onChangeNomeTarefa(event) {
            setNomeTarefa(event.currentTarget.value)
        }
        function submeterFormulario(event) {
            event.preventDefault();

            if (!nomeTarefa){
                return;
            }

            adicionarTarefa(nomeTarefa)

            setNomeTarefa("")
        };

    return(
        <form className={style.formCriarTarefa} onSubmit={submeterFormulario}>
            <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa}/>
            {/* <Loading/> */}
            <Botao texto={loadingCriar ? <Loading/> : "+"}/>
        </form>
    );
};

export { FormCriarTarefa }