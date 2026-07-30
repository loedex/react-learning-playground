import React from 'react'
import ProjectCard from './components/ProjectCard/ProjectCard';
import "./App.css";



const App = () => {

  const projectData = [
  {
    id: 1,
    title: "React Basics Showcase",
    category: "Frontend",
    isCompleted: true,
    difficulty: "Beginner",
    hasCertificate: true
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    category: "C++ / DSA",
    isCompleted: true,
    difficulty: "Intermediate",
    hasCertificate: false
  },
  {
    id: 3,
    title: "Full-Stack Web App",
    category: "Web Dev",
    isCompleted: false,
    difficulty: "Advanced",
    hasCertificate: true
  },
  {
    id: 4,
    title: "Mobile UI Prototype",
    category: "Mobile",
    isCompleted: false,
    difficulty: "Beginner",
    hasCertificate: false
  }
];

  return (
    <div className='container'>
      {
        projectData.map((project)=>(
          <ProjectCard  key={project.id} {...project}/>
        ))
      }
    </div>
  );
}

export default App
