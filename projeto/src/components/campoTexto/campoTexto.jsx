import style from './campoTexto.module.css';

function CampoTexto(props) {
    return(
        <input type='text' className={style.CampoTexto} {...props}/>
    );
};

export { CampoTexto };