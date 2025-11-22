import React from 'react';
import AsciiMap from './AsciiMap';
import './Visuals.css';

const Visuals = () => {
    return (
        <section className="visuals">
            <div className="visuals-text">
                <h2>a small sneak-peek</h2>
                <p>i love sunsets and beaches </p>
            </div>

            <div className="visuals-canvas">
                <AsciiMap />
            </div>

            <div className="floating-images">
                {/* the images are to be here */}

            </div>
        </section>
    );
};

export default Visuals;
