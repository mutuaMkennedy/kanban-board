import React from "react";
import SearchBar from "@/common/components/ActionBar/components/SearchBar";
import CreateTask from "./components/CreateTask";
import styles from "@/common/components/ActionBar/styles/ActionBar.module.css";


const ActionBar: React.FC = () => {
    return(
        <div className={styles.actionBar}>
            <SearchBar/>
            <CreateTask/>
        </div>
    )
}

export default ActionBar;

