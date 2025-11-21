import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Marquee.css';

const logos = [
    "Apple", "Google", "Nike", "IBM", "Sony", "Amazon", "Microsoft", "Netflix", "Tesla", "SpaceX"
];

const Marquee = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const el = marqueeRef.current;

        gsap.to(el, {
            xPercent: -50,
            ease: "none",
            duration: 20,
            repeat: -1
        });
    }, []);

    return (
        <section className="marquee-section">
            <div className="marquee-container">
                <div className="marquee-content" ref={marqueeRef}>
                    {logos.map((logo, i) => (
                        <span key={i} className="marquee-item">{logo}</span>
                    ))}
                    {logos.map((logo, i) => (
                        <span key={`dup-${i}`} className="marquee-item">{logo}</span>
                    ))}
                </div>
            </div>

            <div className="stats-container">
                <div className="stat-item">
                    <h3>100M+</h3>
                    <p>AI TOKENS USED</p>
                </div>
                <div className="stat-item">
                    <h3>3.1K+</h3>
                    <p>COFFEES DRANK</p>
                </div>
                <div className="stat-item">
                    <h3>6.7K+</h3>
                    <p>CODE COMMITS</p>
                </div>
            </div>

            <div className="github-section">
                <h4>PERSONAL GITHUB ACTIVITY</h4>
                <p className="github-subtitle">(Work commits are hiding in another dimension)</p>
                <div className="github-grid">
                    {/* Simplified grid visualization */}
                    {Array.from({ length: 52 * 7 }).map((_, i) => (
                        <div
                            key={i}
                            className="github-cell"
                            style={{
                                opacity: Math.random() > 0.7 ? Math.random() * 0.8 + 0.2 : 0.1
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
