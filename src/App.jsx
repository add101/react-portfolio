import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ProjectGallery from './ProjectGallery.jsx'
import Projects from './Projects.jsx'
// import './index.css'
import './stylesheet.css'

function App() {
  
  return (
    <>

<header>header</header>
    <div class="wrapper">
        <div class="row">
            <section id="avatar">avatar</section>
            <section id="intro">intro
                <p>this section describes the page</p>

            </section>
        </div>        
        <section id="gallery">gallery</section>
        <section id="">
            <div class="portfolio-row">
                <div class="portfolio-content">
                        portfolio1
                </div>
                <div class="portfolio-content">
                    portfolio 2
                </div>
                <div class="portfolio-content">
                    portfolio 2
                </div>
                <div class="portfolio-content">
                    portfolio 2
                </div>
            </div>
        </section>        
        <section id="tools">tools</section>
    </div>    
    <footer>footer</footer>

      <Header/>
      <hr></hr>
      <ProjectGallery/>
      <hr></hr>
      <Projects/>
      <hr></hr>
      <Footer/>
    </>
  )
}

export default App
