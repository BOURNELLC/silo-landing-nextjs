import Image from 'next/image'
import Header from '../components/Header'
import GetStarted from '../components/GetStarted'
import WorkWithSilo from '../components/WorkWithSilo'
import Download from '../components/Download'
import Footer from '../components/Footer'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className='bg-[#060C18] text-white mt-14 pt-10'>
        <div className='max-w-7xl mx-auto'>
          <GetStarted />
          <WorkWithSilo />
          <Download />
        </div>
      </div>
      <Footer />
    </div>
  )
}
