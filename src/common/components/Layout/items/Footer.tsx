import React from "react";
import Image from "next/image";
import footerStyles from "@/common/components/Layout/styles/Footer.module.css"


const Footer: React.FC = () => {
    return (
        <footer>
            <div className={footerStyles.wrapper}>
                <div className={footerStyles.wrapper__logo}>
                    <Image
                    src="/images/logo-b.png"
                    fill
                    alt="Kanban"
                    />
                </div>
                <p>&copy;{new Date().getFullYear()}</p>
                
            </div>
        </footer>
    )
}

export default Footer;