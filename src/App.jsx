import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Gallery from './Gallery.jsx'
import Projects from './Projects.jsx'
import './stylesheet.css'
import Home from './Home.jsx'
import Tools from './Tools.jsx'

function App() {
  
  return (
    <>
      <div className="wrapper">
        <Header/>
        <Home/>
        <Gallery/>
        <Projects/>
        <Tools/>
        <Footer/>
      </div>
    </>
  )
}

export default App
