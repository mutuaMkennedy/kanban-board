import React from "react";
import styles from "@/common/components/Loaders/styles/BouncingDots.module.css"

const BouncingDots: React.FC = ()=>{
    return(
        <div className={styles.ctaButtonSpinners}>
            <div className={styles.ctaButtonSpinner1}>
            </div>
            <div className={styles.ctaButtonSpinner2}>
            </div>
            <div className={styles.ctaButtonSpinner2}>
            </div>
        </div>
    )
}

export default BouncingDots;