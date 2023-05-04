import React from "react";
import Header from "@/common/components/Layout/items/Header";
import Footer from "@/common/components/Layout/items/Footer";


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