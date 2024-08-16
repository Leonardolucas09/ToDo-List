import { Route, Routes } from 'react-router-dom'
import { Erro, Home, SobreNos } from './pages';
import { LayoutPadrao } from './layouts';


function Router(){
    return(
        <Routes>
            <Route path='/' element={<LayoutPadrao/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/sobre-nos' element={<SobreNos/>}/>
                <Route path='*' element={<Erro/>}/>
            </Route>
            
        </Routes>
    );
};

export { Router }