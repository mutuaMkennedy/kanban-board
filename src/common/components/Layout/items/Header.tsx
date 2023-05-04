import React from "react";
import Image from "next/image";
import Link from "next/link";
import headerStyles from "@/common/components/Layout/styles/Header.module.css"


const Header: React.FC = () => {
    return (
        <nav>
            <div className={headerStyles.wrapper}>
                <div className={headerStyles.wrapper__logo}>
                    <Image
                    src="/images/logo-b.png"
                    fill
                    alt="Kanban"
                    />
                </div>
                <div className={headerStyles.wrapper__menu}>
                    <ul>
                        <li><Link href="/index">Home</Link></li>
                        {/* TO DO: Create page */}
                        <li><Link href="/tasks">My tasks</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;