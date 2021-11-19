import Head from "next/head"

import Hero from "../components/Hero"
import Welcome from "../components/Welcome"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import About from "../components/About"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Jackson Price | jprice.io</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div id="main-bg">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 space-y-20">
          <Hero />

          <Welcome />

          <Projects />

          <Skills />

          <About />
        </main>
      </div>
      <div id="footer-bg" className="bg-gray-200">
        <Footer />
      </div>
    </>
  )
}
