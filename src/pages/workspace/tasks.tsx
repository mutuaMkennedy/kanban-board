import React from "react";
import Head from "next/head";

interface tasks {
    name: string,
    status: "backlog" | "toDo" | "inProgress" | "done",
    order: number
}

const Tasks: React.FC<tasks> = ({props} = {name:"Example Task",status:"backlog",order:1})=> {
    return(
        <>
        <Head>My tasks</Head>
        
        </>
    )
}


export default Tasks;