import React from "react";
import { Icon } from "@iconify/react";
import styles from "@/common/components/Task/styles/Task.module.css";


// TO DO: Export reusable interface Items
// This interface has been reused in the component
interface Task {
    summary:string,
    description:string
};


type TasksObject = Task[];


const TaskComponent: React.FC = () => {
    const [Tasks, setTasks] = React.useState<TasksObject>([])

    // Prevent component from trying to access the window before its available,
    // Check error:- ReferenceError: window is not defined
    React.useEffect(()=>{
        const storedTasks = window.localStorage.getItem("tasks")

        if (storedTasks){
            setTasks(JSON.parse(storedTasks))
        } else (
            setTasks([
                {
                    summary: "Default Task",
                    description: "Default Task"
                }
            ])
        )
    },[])

    return(
        <>
            {
                Tasks.map((task, index)=>(
                    <div key={index} className={styles.task}>
                        <div className={styles.head}>
                            <h6>{task.summary}</h6>
                            <Icon icon="carbon:chevron-down"/>
                        </div>
                        <div className={styles.body}>
                            <p>{task.description}</p>
                        </div>
                    </div>
                ))
            }
        </>
        )
}


export default TaskComponent;