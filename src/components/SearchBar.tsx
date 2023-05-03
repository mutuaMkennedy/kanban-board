import React from "react";
import styles from "@/styles/SearchBar.module.css";
import {Icon} from "@iconify/react";

const SearchBar: React.FC = () => {
    return(
        <form className={styles.form}>
            <input className={styles.formSearchInput} type="text" placeholder="Search for a task"/>
            <button type="submit">
                <Icon icon="carbon:search"/>
            </button>
        </form>
    )
}

export default SearchBar;