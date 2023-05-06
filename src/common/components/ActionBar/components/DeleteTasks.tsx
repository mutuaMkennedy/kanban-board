import React from "react";
import { Icon } from "@iconify/react";
import styles from "@/common/components/ActionBar/styles/DeleteTasks.module.css"
import { TasksContext } from "@/common/components/Layout/Layout";

const DeleteTasks:React.FC = () => {
    const tasksContext = React.useContext(TasksContext);

    const deleteTasks:React.MouseEventHandler<HTMLButtonElement>  = (e) =>{

        if (tasksContext.myTasks){
            // remove tasks from state
            tasksContext.setMyTasks([])
        }
    }

    return <button className={styles.trigger} type="button" onClick={deleteTasks}><Icon icon="carbon:trash-can" className={styles.icon}/>Delete</button>
}

export default DeleteTasks