import React from "react";
import { Icon } from "@iconify/react";
import styles from "@/common/components/ActionBar/styles/CreateTask.module.css";


const CreateTaskModal = ()=> {
    return(
        <h1> Modal </h1>
    )
}

const CreateTask: React.FC = () => {

    return(
        <button className={styles.trigger}>
            <Icon icon="carbon:add" className={styles.icon}/>
            Create
        </button>
    )
}

export default CreateTask;