import Header from './Header.jsx'
import Footer from './Footer.jsx'
// import Gallery from './Gallery.jsx'
import Projects from './Projects.jsx'
import Home from './Home.jsx'
import Tools from './Tools.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectGalleryPage from './gallery/ProjectGalleryPage.jsx'


function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<ProjectGalleryPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <Home />
      {/* <Gallery /> */}
      <Projects />
      <Tools />
    </>
  );
}

export default App;

