import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = () => {

    const [serviceInfo, setServiceInfo] = useState([])

    useEffect(() => {
        fetch('https://blooming-journey-06571.herokuapp.com/services')
            .then(response => response.json())
            .then(data => setServiceInfo(data))
    }, [])

    const history = useHistory()
    const orderAService = title => {
        history.push(`/orderNowFor/${title}`)
    }

    return (
        <div className="row text-center mt-5">
            {
                serviceInfo.map((service) =>
                    <div key={service._id} className="col-md-4 col-12 col-sm-6 p-3">
                        <div onClick={() => orderAService(service.title)} className="service-card">
                            <img style={{ width: '80px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
                            <h6 className='mt-3'>{service.title}</h6>
                            <small className='text-muted'>{service.description}</small>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default ServiceCard;