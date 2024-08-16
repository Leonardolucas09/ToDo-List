import { Outlet } from "react-router-dom";
import { Content, Footer, Header } from "../../components";
import { useContext } from "react";
import { AppContext } from "../../contexts";
import { useAppContext } from "../../hooks";
// import { Home } from "../../pages";

function LayoutPadrao(){
    // const {criador} = useContext(AppContext);
    const {criador} = useAppContext();
    return(
        <>
            <Header nomeUsuario="João"/>
                <Content>
                    <Outlet />
                </Content>
            <Footer criador={criador}/> 
        </>
    );
};

export { LayoutPadrao }