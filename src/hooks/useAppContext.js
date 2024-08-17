import { useContext } from "react";
import { AppContext } from "../contexts";

function useAppContext() {
    const contexto = useContext(AppContext);

    return contexto;
};

export { useAppContext };