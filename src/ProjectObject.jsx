// Project.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProjectObject({ project }) {
  const { title, deployedLink, repoLink, image } = project;
  
  return (
    <div className="project portfolio-content">
      <h3>{title}</h3>
      <section className="portfolio-content-links">
      <img src={image} alt={title} className="container-img"/>
      <p><a href={deployedLink}>Deployed Version</a></p>
      <p><a href={repoLink}>GitHub Repository</a></p>
      </section>
    </div>
  );
}

export default ProjectObject;


{/* <h3>Three.js Experiments</h3> title
<img className="container-img" src=""></img>
<section className="portfolio-content-links">
        <a href="https://add101.github.io/three.js_experiments/">Visit Three.js Experiments</a>
        <a href="https://github.com/add101/three.js_experiments">Github Repo</a>
    </section> */}

