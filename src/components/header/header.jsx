import { Link } from 'react-router-dom';
import style from './header.module.css';

function Header(props){
      
    return(
        <div className={style.Header}>
            <Link to='/'>
                <h1>
                    <span>ToDo </span>
                    List
                </h1>
            </Link>
            
            <Link to='/sobre-nos'>
                Sobre Nós
            </Link>
        </div>
    );
};



export { Header };