import React, { useEffect } from 'react';
import { useState } from 'react';
import customer2 from '../../../../images/customer-2.png';

const FeedbackCard = () => {

    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch('https://blooming-journey-06571.herokuapp.com/reviews')
            .then(response => response.json())
            .then(data => setFeedback(data))
    }, [])

    return (
        <>
            <div className='row mt-5'>
                {
                    feedback.map(feedback =>
                        <div className="col-md-4 col-12 col-sm-6  p-3 my-font ">
                            <div style={{ border: '1px solid gray' }} className="p-3">
                                <div className="d-flex">
                                    <img style={{ width: '70px' }} src={customer2} alt="" />
                                    <div className="mt-3 ml-3">
                                        <h6>{feedback.name}</h6>
                                        <small className='active'>{feedback.companyName}</small>
                                    </div>
                                </div>
                                <div className="mt-3 text-muted">
                                    <small>{feedback.review}</small>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </>
    );
};

export default FeedbackCard;