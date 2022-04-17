import Head from 'next/head'
import HomePage from './Homepage.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sonrisas del Mañana</title>
        <meta name="description" content="Sonrisas del Mañana: Un camino hacia el futuro." />
        <link rel="icon" href="/sdm.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <HomePage />
      </main>
    </div>
  )
}
