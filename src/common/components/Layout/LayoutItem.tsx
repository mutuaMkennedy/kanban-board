import React from "react";
import Image from "next/image";
import Link from "next/link";
import { JsxElement } from "typescript";


export const Header: React.FC = () => {
    return (
        <nav>
            <div className="wrapper">
                <div className="wrapper__logo">
                    <Image
                    src="/images/logo-b.png"
                    width={30}
                    height={30}
                    alt="Kanban"
                    />
                </div>
                <div className="menu">
                    <ul>
                        <li><Link href="/index"/>Home</li>
                        {/* TO DO: Create page */}
                        <li><Link href="/tasks"/>My tasks</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export const Footer: React.FC = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="wrapper__logo">
                    <Image
                    src="/images/logo-b.png"
                    width={30}
                    height={30}
                    alt="Kanban"
                    />
                </div>
                <p>&copy;{new Date().getFullYear()}</p>
                
            </div>
        </footer>
    )
}