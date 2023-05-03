import React from "react";
import { Header, Footer } from "./LayoutItem";


interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    
    return(
        <>
        <Header/>
            <main>
                {children}
            </main>
        <Footer/>
        </>
    )
}

export default Layout;