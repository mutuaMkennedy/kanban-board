import React from "react";
import SearchBar from "@/common/components/ActionBar/components/SearchBar";
import CreateTask from "./components/CreateTask";
import DeleteTasks from "./components/DeleteTasks";
import styles from "@/common/components/ActionBar/styles/ActionBar.module.css";


const ActionBar: React.FC = () => {
    return(
        <div className={styles.actionBar}>
            <SearchBar/>
            <div className={styles.right}>
                <CreateTask/>
                <DeleteTasks/>
            </div>
        </div>
    )
}

export default ActionBar;

