import React from 'react';
import google from '../../../images/logos/google.png';
import airbnb from '../../../images/logos/airbnb.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';

const Brands = () => {

    const brandStyle = {
        listStyle: 'none',
        marginLeft: '70px',
        marginTop: '50px'
    }

    return (
        <div className="container">
            <ul className="d-flex align-items-center row">
                <li style={brandStyle} ><img style={{ width: '120px' }} src={google} alt="" /></li>
                <li style={brandStyle} ><img style={{ width: '120px' }} src={netflix} alt="" /></li>
                <li style={brandStyle} ><img style={{ width: '120px' }} src={airbnb} alt="" /></li>
                <li style={brandStyle} ><img style={{ width: '120px' }} src={slack} alt="" /></li>
                <li style={brandStyle} ><img style={{ width: '120px' }} src={uber} alt="" /></li>
            </ul>
        </div>
    );
};

export default Brands;