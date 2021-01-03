import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    return (
        <div
            className='mt-5 pt-5 mb-5'>
            <h3
                style={{ fontWeight: 'bold' }}
                className="text-center my-font mt-5 pt-5"
            >
                Provide Awesome
                <span style={{ color: '#7AB259' }}> Services</span>
            </h3>
            <div className="container mb-5 pb-5">
                <ServiceCard />
            </div>
        </div>
    );
};

export default Services;