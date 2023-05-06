import React from "react";
import Header from "@/common/components/Layout/items/Header";
import Footer from "@/common/components/Layout/items/Footer";
import { ActionBar } from "@/common/components/ActionBar";
import styles from "@/common/components/Layout/styles/Layout.module.css";


interface LayoutProps {
    children: React.ReactNode
};

export interface TaskItem {
    id:number,
    summary: string,
    description: string
};

export type TaskItemObject = TaskItem[];

// Shape of context value prop
interface TaskContextType{
    myTasks:TaskItemObject,
    setMyTasks: (tasks:TaskItemObject) => void;
}

export const TasksContext = React.createContext<TaskContextType>(
            {
                myTasks: [
                    {
                        id:1,
                        summary:"Default Task",
                        description:"A description of a default task"
                    }
                ],
                setMyTasks:() => {}
            }
        )

const Layout: React.FC<LayoutProps> = ({children}) => {
    
    const [myTasks, setMyTasks] = React.useState<TaskItemObject>([])

    // Prevent component from trying to access the window before its available,
    // Check error:- ReferenceError: window is not defined
    React.useEffect(()=>{
        let storedTasks = window.localStorage.getItem("tasks");

        if (storedTasks){
            setMyTasks(JSON.parse(storedTasks))
        } else {
            setMyTasks([
                {
                    id:1,
                    summary:"Default Task",
                    description:"A description of a default task"
                }
            ])
        }
    },[]);

    /*
        We will pass this function to child components so that we can update the
        state where needed
    */ 
    const updateTasks = (tasks: TaskItemObject) => {
        // TO DO: tasks not being assigned defaults when deleted
        setMyTasks(tasks);
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
      };

    return(
        <>
        <TasksContext.Provider value={{myTasks,setMyTasks: updateTasks}}>
            <Header/>
                <main>
                    <div className={styles.container}>
                        <div className={styles.container__inner}>
                            <ActionBar/>
                            {children}
                        </div>
                    </div>
                </main>
                <Footer/>
        </TasksContext.Provider>
        </>
    )
}

export default Layout;