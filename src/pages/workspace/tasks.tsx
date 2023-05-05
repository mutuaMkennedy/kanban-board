import React from "react";
import Head from "next/head";
import { Layout } from "@/common/components/Layout";
import utilsStyles from "@/styles/utils.module.css";

interface tasks {
    name: string,
    status: "backlog" | "toDo" | "inProgress" | "done",
    order: number
}

const Tasks: React.FC<tasks> = ({props} = {name:"Example Task",status:"backlog",order:1})=> {
    return(
        <>
        <Head>My tasks</Head>
        <Layout><h2 className={utilsStyles.headingSection}>My Tasks</h2></Layout>
        </>
    )
}


export default Tasks;