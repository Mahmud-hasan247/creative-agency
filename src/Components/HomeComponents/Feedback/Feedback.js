import React from 'react';
import FeedbackCard from './FeedbackCard/FeedbackCard';

const Feedback = () => {
    return (
        <div>
            <h3 style={{ fontWeight: 'bold' }} className="text-center my-font mt-5 pt-5">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h3>
            <div className="container mt-5 pb-5 mb-5">
                <FeedbackCard />
            </div>
        </div>
    );
};

export default Feedback;