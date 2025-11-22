import React, { useRef } from 'react';
import gsap from 'gsap';
import './Skills.css';

const skillsData = [
    {
        category: "Languages",
        items: [
            { name: "JavaScript (ES6+)", color: "#F7DF1E" },
            { name: "Python", color: "#3776AB" },
            { name: "Go", color: "#00ADD8" },
            { name: "Java", color: "#007396" },
            { name: "C++", color: "#00599C" },
            { name: "TypeScript", color: "#3178C6" },
            { name: "Bash", color: "#4EAA25" },
            { name: "Lua", color: "#000080" },
            { name: "LaTeX", color: "#008080" },
            { name: "Markdown", color: "#FFFFFF" },
            { name: "HTML5", color: "#E34F26" },
            { name: "CSS3", color: "#1572B6" }
        ]
    },
    {
        category: "Libraries & Frameworks",
        items: [
            { name: "React", color: "#61DAFB" },
            { name: "Vue.js", color: "#4FC08D" },
            { name: "Node.js", color: "#339933" },
            { name: "Next.js", color: "#FFFFFF" },
            { name: "Vite", color: "#646CFF" },
            { name: "PyTorch", color: "#EE4C2C" },
            { name: "Scikit-learn", color: "#F7931E" },
            { name: "PHP/Laravel", color: "#FF2D20" },
            { name: "Bootstrap", color: "#7952B3" },
            { name: "GSAP", color: "#88CE02" },
            { name: "Three.js", color: "#FFFFFF" },
            { name: "Tailwind CSS", color: "#06B6D4" },
            { name: "Express", color: "#FFFFFF" }
        ]
    },
    {
        category: "Tools & Software",
        items: [
            { name: "Git", color: "#F05032" },
            { name: "Docker", color: "#2496ED" },
            { name: "Kubernetes", color: "#326CE5" },
            { name: "AWS", color: "#FF9900" },
            { name: "Google Cloud", color: "#4285F4" },
            { name: "Linux", color: "#FCC624" },
            { name: "Nginx", color: "#009639" },
            { name: "Terraform", color: "#7B42BC" },
            { name: "Jenkins", color: "#D24939" },
            { name: "Postman", color: "#FF6C37" },
            { name: "MongoDB", color: "#47A248" },
            { name: "MySQL", color: "#4479A1" },
            { name: "Figma", color: "#F24E1E" },
            { name: "WordPress", color: "#21759B" },
            { name: "Drupal", color: "#0678BE" }
        ]
    }
];

const Skills = () => {
    const containerRef = useRef(null);

    const handleMouseEnter = (e, color) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();

        // Create particles
        const particleCount = 12;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('skill-particle');

            // Set initial position (center of the pill)
            // We append to body to avoid clipping and z-index issues, 
            // but we need to position it relative to the viewport initially
            document.body.appendChild(particle);

            // Account for scroll position
            const startX = rect.left + window.scrollX + rect.width / 2 + (Math.random() - 0.5) * 20;
            const startY = rect.top + window.scrollY + rect.height / 2 + (Math.random() - 0.5) * 10;

            gsap.set(particle, {
                x: startX,
                y: startY,
                backgroundColor: color,
                scale: Math.random() * 0.5 + 0.5
            });

            // Physics simulation values
            const angle = Math.random() * Math.PI * 2; // Random direction
            const velocity = Math.random() * 100 + 50; // Random speed
            const velocityX = Math.cos(angle) * velocity;
            const velocityY = Math.sin(angle) * velocity - 100; // Initial upward bias
            const gravity = 500; // Gravity strength
            const duration = Math.random() * 0.8 + 0.5;

            // Animate
            gsap.to(particle, {
                x: `+=${velocityX}`,
                y: `+=${velocityY + gravity * 0.5}`, // Simple approximation of projectile motion end point
                rotation: Math.random() * 360,
                opacity: 0,
                scale: 0,
                duration: duration,
                ease: "power1.out",
                onComplete: () => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }
            });
        }
    };

    return (
        <section className="skills-section" id="skills">
            <div className="skills-container" ref={containerRef}>
                <h2 className="section-title">My Skills</h2>

                {skillsData.map((category, idx) => (
                    <div key={idx} className="skills-category">
                        <h3>{category.category}</h3>
                        <div className="skills-grid">
                            {category.items.map((skill, skillIdx) => (
                                <div
                                    key={skillIdx}
                                    className="skill-pill"
                                    style={{ '--skill-color': skill.color }}
                                    onMouseEnter={(e) => handleMouseEnter(e, skill.color)}
                                >
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
