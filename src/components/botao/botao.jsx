import { TIPO_BOTAO } from './constantes'
import style from './botao.module.css'

function Botao(props) {

    const { texto, tipo = TIPO_BOTAO.PRIMARIO, ...outrasProps } = props;

    return(
        <button className={style.Botao} tipo={tipo} {...outrasProps}>
            {texto}
        </button>
    );
};

export { Botao };