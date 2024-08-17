import style from './footer.module.css';

function Footer(props){

    const { criador } = props;

    const anoAtual = (new Date()).getFullYear();

    return(
        <div className={style.Footer}>
            <p>React Básico — {anoAtual} — {criador}</p>
        </div>
    );
};

export { Footer };