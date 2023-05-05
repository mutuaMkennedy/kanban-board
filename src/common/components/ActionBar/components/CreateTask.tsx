import React from "react";
import { Icon } from "@iconify/react";
import BouncingDots  from "@/common/components/Loaders/BouncingDots";
import styles from "@/common/components/ActionBar/styles/CreateTask.module.css";


interface CreateTaskModal{
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

interface Task {
    summary:string,
    description:string
}

type Tasks =  Task[]


const CreateTaskModal: React.FC<CreateTaskModal> = ({setOpenModal}) => {

    // Enable or disable submit button
    const [disableSubmit, setDisableSubmit] = React.useState<boolean>(true);
    // Show loader
    const [submitting,setSubmitting] = React.useState<boolean>(false)

    // Task management
    const [task,setTask] = React.useState<Task>({summary:"", description:""})
    const [tasks,setTasks] = React.useState<Tasks>(JSON.parse(window.localStorage.getItem("tasks") ?? "[]"))

    const handleChange:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => (
                {
                ...prevTask,
                [name]: value,
                }
            )
        );

        console.log(task)

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
        setDisableSubmit(true)

        const newTasks = [...tasks, task];
        setTasks(newTasks);
        window.localStorage.setItem('tasks', JSON.stringify(newTasks));
        setTask({ summary: '', description: '' });
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