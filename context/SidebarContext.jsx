import React, { createContext, useState } from 'react'

export const SIdebarContext = createContext();

export const SIdebarContextProvider = ({children}) => {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);

    const handleSidebarClose = () => {
        setIsSidebarOpen(false)
    }
    return(
        <SIdebarContext.Provider value={{isSidebarOpen, setIsSidebarOpen, handleSidebarClose}} >
            {children}
        </SIdebarContext.Provider>
    )
}