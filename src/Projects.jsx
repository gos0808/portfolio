import { projectsData } from './data.js';
import { ProjectPage } from './ProjectPage.jsx';

export const Projects = () => {

    return (
        <div className='project-container' >
          {projectsData.map((project, index) => {
            let columnClass = '';
            if (index % 4 === 0) {
              columnClass = "big-column-left"; // 1st item (big, left)
            } else if (index % 4 === 1) {
              columnClass = "small-column-right"; // 2nd item (small, right)
            } else if (index % 4 === 2) {
              columnClass = "small-column-left"; // 3rd item (small, left)
            } else if (index % 4 === 3) {
              columnClass = "big-column-right"; // 4th item (big, right)
            } 

            
            return <ProjectPage key={project.id} 
            columnClass={columnClass} 
            project={project} 
            // animationDelay = {index * 10}
            />; 
          })}
        </div>
      );
}
