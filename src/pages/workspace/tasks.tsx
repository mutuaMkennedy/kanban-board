import React from "react";
import Head from "next/head";
import { Layout } from "@/common/components/Layout";
import utilsStyles from "@/styles/utils.module.css";
import {TaskComponent} from "@/common/components/Task";


const Tasks: React.FC = ()=> {
    return(
        <>
        <Head>My tasks</Head>
        <Layout>
            <h2 className={utilsStyles.headingSection}>My Tasks</h2>
            <TaskComponent/>            
        </Layout>
        </>
    )
}


export default Tasks;