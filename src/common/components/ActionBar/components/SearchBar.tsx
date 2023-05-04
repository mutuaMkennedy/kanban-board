import React from "react";
import { Icon } from "@iconify/react";
import styles from "@/common/components/ActionBar/styles/SearchBar.module.css"


const SearchBar: React.FC = () => {
    const [value, setValue] = React.useState<string>("")
    
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        setValue(e.target.value)
    }

    return(
        <form className={styles.form}>
            <div className={styles.searchInput}>
                <Icon icon="carbon:search"/>
                <input type="text" value={value} placeholder="Search tasks" onChange={handleChange}/>
            </div>
        </form>
    )
}


export default SearchBar;