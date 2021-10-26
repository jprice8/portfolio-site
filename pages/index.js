import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jackson Price | jprice.io</title>
        <meta name="description" content="Portfolio site for Jackson Price" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 space-y-20">

        <Hero />

        <Welcome />

        <Projects />

        <Skills />

        <About />

      </main>
      <Footer />
 
    </div>
  )
}
