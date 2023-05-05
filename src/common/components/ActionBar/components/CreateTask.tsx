import React from "react";
import { Icon } from "@iconify/react";
import styles from "@/common/components/ActionBar/styles/CreateTask.module.css";


interface CreateTaskModal{
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateTaskModal: React.FC<CreateTaskModal> = ({setOpenModal}) => {
    const [disableSubmit, setDisableSubmit] = React.useState<boolean>(true);

    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if(e.target.value.length >= 3){
            setDisableSubmit(false);
        }else{
            setDisableSubmit(true);
        };
    };

    const closeModal: React.MouseEventHandler<HTMLButtonElement>  = (e) => {
        setOpenModal(false);
    }

    return(
        <div className={styles.modal}>
            <div className={styles.innerModal}>
                <div className={styles.head}>
                    <h2>Create tasks</h2>
                    <button type="button" onClick={closeModal}>
                        <Icon icon="carbon:close" className={styles.iconClose}/>
                    </button>
                </div>
                <div className={styles.body}>
                    <form className={styles.form}>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="summary">Summary</label>
                            <input id="summary" placeholder="Design UI's for mobile" onChange={handleChange} required/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="summary">Description</label>
                            <textarea name="description" id="description" cols={30} rows={10}></textarea>
                        </div>
                        <button type="submit" disabled={disableSubmit} >Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const CreateTask: React.FC = () => {
    const [openModal, setOpenModal] = React.useState<boolean>(false);

    const triggerAction:React.MouseEventHandler<HTMLButtonElement> = (e) =>{
        if (openModal){
            setOpenModal(false)
        } else {
            setOpenModal(true)
        }
    }
    return(
        <>
            <button className={styles.trigger} onClick={triggerAction}>
                <Icon icon="carbon:add" className={styles.icon}/>
                Create
            </button>
            {
                openModal ? (
                    <CreateTaskModal setOpenModal={setOpenModal}/>
                ) : ""
            }

        </>
    )
}

export default CreateTask;