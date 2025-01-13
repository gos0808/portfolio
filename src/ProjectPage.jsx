import React from 'react';
import './project-page.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ProjectPage = ({project, columnClass, animationDelay}) => {

    AOS.init({
          duration: 1000,
          easing: 'ease-in-out', 
          once: false,  
    })


    return ( 
<div 
key ={project.id} 
className={`${columnClass} project`} 
data-aos="fade-up"
data-aos-delay={animationDelay}
data-aos-anchor-placement="top-center"
>

<img 
className='project-image' 
src={`images/${project.image}`} 
alt={project.title} 
onClick={() => window.open(project.Netlify)}
/>

<div className='project-info'>

<p className='project-title'>{project.title}</p>


</div>

<p >{project.description}</p>

<div className='build-with'>
<p>Build with:
    {project.buildWith.map((image, index) => {
        return <img className='build-with-icons'
        key={index} src={`/images/${image}`} alt={image} />
    })}
</p>

<div>
<a href={project.Netlify} target="_blank">Visit</a>

<span>|</span>

<a href={project.GitHub} target="_blank">Github</a>
</div>

</div>

    </div> 
    );
}
 