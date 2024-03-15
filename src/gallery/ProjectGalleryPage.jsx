// ProjectGallery.js
import React from 'react';
import projectsData from '/src/data/projects.json';
import ProjectObject from '/src/ProjectObject';

      
function ProjectGalleryPage() {
  return (
    <div>
      <div className = "wrapper">
        <h2 style={{textAlign: "center"}}>Project Gallery:</h2>
        <div className="projects">
          {projectsData.map(project => (
            <ProjectObject key={project.id} project={project} />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default ProjectGalleryPage;

