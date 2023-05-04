import Head from 'next/head'
import { Layout } from '@/common/components/Layout';
import { Kanban } from '@/modules/TaskManagement/KanbanBoard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanban App with Next</title>
        <meta name="description" content="Kanban app built on next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo-b.png"/>
      </Head>

      <Layout>
        <Kanban/>
      </Layout>
    </>
  )
}
