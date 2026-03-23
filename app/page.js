import AnimateSection from './components/AnimateSection'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Most from './components/Most'
import Why from './components/Why'
import Location from './components/Location'
import Client from './components/Client'
import Abs from './components/Abs'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <div className='relative'>
        <Navbar />
        <Hero />
      </div>

      <AnimateSection>
        <div id='/about'>
          <Abs/>
        </div>
      </AnimateSection>

      <AnimateSection delay={0.1}>
        <Most />
      </AnimateSection>

      <AnimateSection delay={0.1}>
        <Why />
      </AnimateSection>

      <AnimateSection delay={0.1}>
        <div >
          <Location/>
        </div>
      </AnimateSection>

      <AnimateSection delay={0.1}>
        <Client />
      </AnimateSection>

      <AnimateSection delay={0.1}>
        <Footer/>
      </AnimateSection>

    </main>
  )
}