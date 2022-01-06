import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>hey !!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my worst website!" />
        <p className="description">
          listeren here you  <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
