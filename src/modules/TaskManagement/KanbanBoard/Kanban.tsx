import React from "react";
import utilsStyles from "@/styles/utils.module.css";
import styles from "@/modules/TaskManagement/KanbanBoard/styles/Kanban.module.css"
import { Icon } from "@iconify/react";
import { TaskComponent } from "@/common/components/Task";


const Kanban: React.FC = () => {

    return(
        <>
            <h2 className={utilsStyles.headingSection}>Your Board</h2>
            <div className={styles.Backlog}>
                <h5 className={utilsStyles.headingMd}>Backlog</h5>
                <div className={styles.BacklogList}>
                    <TaskComponent/>
                </div>
                
            </div>
        </>
    )
}


export default Kanban;