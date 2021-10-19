import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Catstagram</title>
        <link rel="icon" href="/meow.ico" />
      </Head>

      <Header />
      <Feed />
      <Modal />

    </div>
  )
}
