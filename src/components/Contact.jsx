import React, { useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
    const containerRef = useRef(null);
    const lastPos = useRef({ x: 0, y: 0 });
    const lastTime = useRef(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return; // Ensure container is available

        const handleMouseMove = (e) => {
            // When the listener is on the container, the event only fires when the mouse is over it.
            // e.clientX and e.clientY are still viewport coordinates.
            const now = Date.now();
            const dist = Math.hypot(e.clientX - lastPos.current.x, e.clientY - lastPos.current.y);

            // Only spawn if moved enough distance and enough time passed
            if (dist > 50 && now - lastTime.current > 50) {
                spawnImage(e.clientX, e.clientY);
                lastPos.current = { x: e.clientX, y: e.clientY };
                lastTime.current = now;
            }
        };

        const spawnImage = (x, y) => {
            const img = document.createElement('div');
            img.className = 'trail-image';

            // Random placeholder colors/gradients
            const hue = Math.floor(Math.random() * 360);
            img.style.background = `hsl(${hue}, 70%, 60%)`;

            img.style.left = `${x}px`;
            img.style.top = `${y}px`;

            // Random rotation
            const rot = Math.random() * 40 - 20;
            img.style.transform = `translate(-50%, -50%) rotate(${rot}deg) scale(0.5)`;

            container.appendChild(img);

            // Animate in
            requestAnimationFrame(() => {
                img.style.transform = `translate(-50%, -50%) rotate(${rot}deg) scale(1)`;
                img.style.opacity = '1';
            });

            // Remove after delay
            setTimeout(() => {
                img.style.opacity = '0';
                setTimeout(() => img.remove(), 500);
            }, 1000);
        };

        container.addEventListener('mousemove', handleMouseMove);
        return () => container.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="contact" id="contact" ref={containerRef}>
            <div className="container relative-z">
                <h2 className="contact-title">Let's work together</h2>
                <a href="mailto:hello@aimane.dev" className="contact-email">
                    hello@aimane.dev
                </a>
                <div className="social-links">
                    <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Aimane. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
