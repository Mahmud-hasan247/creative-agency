import React from 'react';
import frame from '../../../../images/logos/Frame.png';

const MainHeader = () => {
    return (
        <div className='row pb-5'>
            <div className="col-md-6  pb-5 col-12">
                <h1 className='my-font mt-5 pt-5' style={{ fontWeight: 'bold' }}>Let’s Grow Your <br /> Brand To The <br /> Next Level</h1>
                <p className="my-font mt-5 pr-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eveniet ad eos vero, nemo harum debitis, ab necessitatibus, commodi excepturi placeat laborum porro.</p>
                <button className='btn btn-dark mt-3 my-button my-font'>Hire Us</button>
            </div>
            <div className="col-md-6 pb-5 mt-5  col-12">
                <img className='img-fluid' src={frame} alt="Responsive image" />
            </div>
        </div>
    );
};

export default MainHeader;