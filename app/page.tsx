
import Header from './components/Header'
import Banner from './components/banner'
import About from './about/page'
import Projects from './projects/page'
import Services from './services/page'
import Contact from './contact/page'
import Footer from './components/footer'
import Social from './components/social'


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Social/>
      <About/>
     <Projects/>
       <Services/>
       <Contact/>
      <Footer/>
    </>

  )
}
