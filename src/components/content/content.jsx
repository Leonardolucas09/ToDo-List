import style from './content.module.css'

function Content(props){
    const { children } = props;

    return(

        <div className={style.Content}>
            {children}
        </div>
    );
};

export { Content };