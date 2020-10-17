import React from 'react';
import Carousel from './Carousel/Carousel';

const OurWorks = () => {
    return (
        <div style={{ backgroundColor: '#111430' }} className="p-5 mt-5">
            <h3 style={{ fontWeight: 'bold' }} className="text-center my-font mt-3 pt-3 pb-5 text-light">Here are some of <span style={{ color: '#7AB259' }}>our works</span></h3>
            <div className="container">
                <Carousel />
            </div>
        </div>
    );
};

export default OurWorks;