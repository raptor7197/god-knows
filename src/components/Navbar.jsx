import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Navbar.css';

const Navbar = () => {
    const navRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
        );
    }, []);

    return (
        <nav className="navbar" ref={navRef}>
            <div className="logo">Vamsi Krishna</div>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
