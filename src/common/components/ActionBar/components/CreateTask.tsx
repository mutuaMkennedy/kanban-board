import React from "react";
import { Icon } from "@iconify/react";
import BouncingDots  from "@/common/components/Loaders/BouncingDots";
import { TaskItem, TasksContext } from "@/common/components/Layout/Layout";
import styles from "@/common/components/ActionBar/styles/CreateTask.module.css";


interface CreateTaskModal{
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateTaskModal: React.FC<CreateTaskModal> = ({setOpenModal}) => {

    // Enable or disable submit button
    const [disableSubmit, setDisableSubmit] = React.useState<boolean>(true);
    // Show loader
    const [submitting,setSubmitting] = React.useState<boolean>(false)

    // Task management
    const [task,setTask] = React.useState<TaskItem>({id:0,summary:"", description:""})

    // Access TaskContext we will use to update tasks which will be picked by all child components
    let Tasks = React.useContext(TasksContext)

    const handleChange:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => (
                {
                ...prevTask,
                [name]: value,
                id:Tasks.myTasks.length + 1
                }
            )
        );

        // Disable submit button until the form fields have some data
        if(task.summary.length >= 3 && task.description.length >= 3 ){
            setDisableSubmit(false);
        }else{
            setDisableSubmit(true);
        };
    };

    // Close Modal
    const closeModal: React.MouseEventHandler<HTMLButtonElement>  = (e) => {
        setOpenModal(false);
    }

    // Create the tasks and store them in localStorage
    const createTask: React.FormEventHandler<HTMLFormElement> = (e) =>{
        e.preventDefault();
        setSubmitting(true);
        setDisableSubmit(true);

        // Access TaskContext's values
        // append existing tasks with the newly added task
        const newTasks = [...Tasks.myTasks, task];
        // access the update tasks function and update our tasks
        Tasks.setMyTasks(newTasks)

        // reset the input boxes
        setTask({ id:0, summary: '', description: '' });

        // No major reason to do this, just a small delay to show the user something is happening
        setTimeout(() => {
            setSubmitting(false);
        }, 1000);
    };

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
                    <form className={styles.form} onSubmit={createTask}>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="summary">Summary</label>
                            <input name="summary" id="summary" value={task.summary} placeholder="Design UI's for mobile" onChange={handleChange} required/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="summary">Description</label>
                            <textarea name="description" id="description" value={task.description} cols={30} rows={10} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" disabled={disableSubmit || submitting }>
                            {
                                submitting ? (
                                    <BouncingDots/>
                                ) : "Create"
                            }
                            
                        </button>
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