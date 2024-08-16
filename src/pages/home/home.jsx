import { ListaTarefas, FormCriarTarefa } from "../../components";
import style from './home.module.css';

function Home() {

    return(
        <div className={style.Home}>
            <FormCriarTarefa/>
            <ListaTarefas/>
        </div>
    );
};

export { Home }