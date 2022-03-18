import type { NextPage } from 'next'
import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>worldtrip</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <Banner />
    </div>
  )
}

export default Home