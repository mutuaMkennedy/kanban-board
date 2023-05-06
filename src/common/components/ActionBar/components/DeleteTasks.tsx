import React from "react";
import { Icon } from "@iconify/react";
import styles from "@/common/components/ActionBar/styles/DeleteTasks.module.css"

const DeleteTasks:React.FC = () => {

    const deleteTasks:React.MouseEventHandler<HTMLButtonElement>  = (e) =>{
        let tasks = window.localStorage.getItem("tasks");

        if (tasks != ''){
            window.localStorage.removeItem("tasks");
        }
    }

    return <button className={styles.trigger} type="button" onClick={deleteTasks}><Icon icon="carbon:trash-can" className={styles.icon}/>Delete</button>
}

export default DeleteTasks