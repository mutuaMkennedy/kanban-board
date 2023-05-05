import React from "react";
import Header from "@/common/components/Layout/items/Header";
import Footer from "@/common/components/Layout/items/Footer";
import { ActionBar } from "@/common/components/ActionBar";
import styles from "@/common/components/Layout/styles/Layout.module.css";


interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    
    return(
        <>
            <Header/>
            <main>
                <div className={styles.container}>
                    <div className={styles.container__inner}>
                        <ActionBar/>
                        {children}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;