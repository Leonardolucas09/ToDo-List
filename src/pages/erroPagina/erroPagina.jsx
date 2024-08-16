import style from './erro404.module.css'

function Erro() {
    return(
        <div className={style.Erro404}>
            <h1>404</h1>
            <h3>Página não encontrada</h3>
        </div>
    );
};

export { Erro }