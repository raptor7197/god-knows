import React from 'react';
import AsciiMap from './AsciiMap';
import './Visuals.css';

const Visuals = () => {
    return (
        <section className="visuals">
            <div className="visuals-text">
                <h2>SOME VISUALS TO GET AN IDEA</h2>
            </div>

            <div className="visuals-canvas">
                <AsciiMap />
            </div>

            <div className="floating-images">
                {/* Collage of images coming from all sides */}
                <div className="float-img img-1"></div>
                <div className="float-img img-2"></div>
                <div className="float-img img-3"></div>
                <div className="float-img img-4"></div>
                <div className="float-img img-5"></div>
            </div>
        </section>
    );
};

export default Visuals;
