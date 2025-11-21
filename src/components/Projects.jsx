import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Web Development",
        color: "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)"
    },
    {
        id: 2,
        title: "Portfolio V1",
        category: "Design & Dev",
        color: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"
    },
    {
        id: 3,
        title: "Dashboard UI",
        category: "Interface Design",
        color: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
    },
    {
        id: 4,
        title: "Mobile App",
        category: "React Native",
        color: "linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)"
    }
];

const Projects = () => {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const cards = gridRef.current.children;

        gsap.fromTo(cards,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                }
            }
        );
    }, []);

    return (
        <section className="projects" id="work" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Selected Work</h2>
                <div className="projects-grid" ref={gridRef}>
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card">
                            <div
                                className="project-image"
                                style={{ background: project.color }}
                            ></div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
