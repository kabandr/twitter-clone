import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter Clone</title>
      </Head>

      <main>
        <Sidebar />

        {/* Feed */}

        {/* Widget */}
      </main>

    </div>
  )
}

export default Home
