import React, { useEffect, useRef } from 'react'; // Import React
import './App.css'; // Import global CSS
import './Home.css'; // Import  CSS
import R3f from './R3f'; // Import the R3f component
import Tools from './Tools.jsx'
import Tools2 from './Tools2.jsx'
// import Gallery from './Gallery.jsx'
import Projects from './Projects.jsx'

function HomeTop() {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const threeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (videoRef.current && textRef.current) {
        if (scrollPosition <= 1500) {
          videoRef.current.style.opacity = 1 - scrollPosition / 800;
          textRef.current.style.opacity = 1 - scrollPosition / 350;
        } else {
          videoRef.current.style.opacity = 0;
          textRef.current.style.opacity = 0;
          textRef.current.style.pointerEvents = 'none'; // Disable interaction
        }
      }
      /*
      if (threeRef.current) {
        if (scrollPosition <= 1000) {           
             // Reset threeRef size if scrolling back up
            //  threeRef.current.style.width = '100%';
             //threeRef.current.style.height = '600px'; // Set your default height
            //  threeRef.current.style.position = 'relative';
            threeRef.current.style.width = 100% - scrollPosition / 100;
        } else {
              // Make threeRef fullscreen
              threeRef.current.style.width = '10%';
              threeRef.current.style.height = '10%';
              threeRef.current.style.position = 'fixed';
              threeRef.current.style.top = '0';
              threeRef.current.style.left = '0';
              threeRef.current.style.zIndex = '50';
              // threeRef.current.style.opacity = '1';
        }
      }
        */
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      {/* Animated BG */}
        <div id="videospacer"> 
          <div id='bg-text-border'>
            <div className="bg-text" id="bg-textid" ref={textRef}>
              <h1>ADRIAN LAMOUR</h1>
              <hr />
              <h1>PORTFOLIO</h1>
              <h1>3D / APP DEVELOPMENT</h1>  
            </div>   
          </div>
          <video autoPlay muted loop id="myVideo" ref={videoRef}>
            <source src="/video/AdrianLamour-IntroBGVid.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>      
      </div>
      <div >
        {/* <section id="threejs-01-pc" ref={threeRef}>
          <R3f />
        </section> */}
        <section id="intro" className="boxshadow">
          {/* <p>Welcome to my Web Development Portfolio (Work in progress).</p> */}
          <p className="toptext">
          Welcome to My Web Development Portfolio!
          I'm a passionate and results-driven 3D Artist, Spatial Designer, Developer, Content Creator, and Educator. I specialize in leveraging creative technologies to craft visually compelling solutions that align with the unique goals of projects, brands, and stakeholders.         
          </p>
        </section>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <HomeTop />
      {/* <Gallery /> */}
      <Projects />
      {/* <Tools /> */}
      {/* <Tools2 /> */}
    </>
  );
}

export default Home;
