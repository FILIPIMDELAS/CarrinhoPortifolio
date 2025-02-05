import { createContext, useState, useContext } from "react";

const GlobalContext = createContext()

export const useGlobalContext = () => {
    return useContext(GlobalContext)
} 

export const GlobalProvider = ({ children }) => {
    const [ cardItens, setCardItens ] = useState([])

    return(
        <GlobalContext.Provider value={{ cardItens, setCardItens }} >
            {children}
        </GlobalContext.Provider>
    )
}