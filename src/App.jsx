import Header from './Header.jsx'
import Footer from './Footer.jsx'
// import Gallery from './Gallery.jsx'
import Projects from './Projects.jsx'
import Home from './Home.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectGalleryPage from './gallery/ProjectGalleryPage.jsx'


function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<ProjectGalleryPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

