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
                    <h3>10M+</h3>
                    <p>AI TOKENS USED</p>
                </div>
                <div className="stat-item">
                    <h3>500+</h3>
                    <p>CUPS OF COFFEES DRANK</p>
                </div>
                <div className="stat-item">
                    <h3>1.7K+</h3>
                    <p>CODE COMMITS</p>
                </div>
            </div>

            <div className="github-section">
                <h4>PERSONAL GITHUB ACTIVITY</h4>
                <p className="github-subtitle">(Work commits are hiding in another dimension)</p>
                <div className="github-grid">
                    {/* Placeholder for real GitHub contribution graph, consider using a dedicated library or API */}
                    {/* For a real integration, you would fetch contribution data (e.g., from GitHub's GraphQL API or a service)
                        and map it to these cells, setting opacity based on contribution count. */}
                    {/* Example of how contribution data could be mapped (assuming `contributionData` is an array of objects like { date: 'YYYY-MM-DD', count: N }): */}
                    
                    {/* {contributionData.map((dayData, i) => (
                        <div
                            key={i}
                            className="github-cell"
                            style={{
                                opacity: dayData.count > 0 ? (dayData.count / 10) * 0.8 + 0.2 : 0.1 // Adjust 10 based on max expected contributions
                            }}
                            title={`${dayData.count} contributions on ${dayData.date}`}
                        ></div>
                    ))} */}
                   
                    {Array.from({ length: 52 * 7 }).map((_, i) => (
                        <div
                            key={i}
                            className="github-cell"
                            style={{
                                // This is still a dummy opacity. Replace with real contribution data.
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
