import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../../App';
import icon from '../../../../images/icons/service5.png';
import './ServiceList.css';
import jwt_decode from "jwt-decode";

const ServiceList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const [myOrders, setMyOrders] = useState([])

    const token = sessionStorage.getItem('authToken');
    const decodedToken = jwt_decode(token);
    const tokenEmail = decodedToken.email;


    useEffect(() => {
        fetch('https://blooming-journey-06571.herokuapp.com/myOrderedServices/' + tokenEmail, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem("authToken")}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setMyOrders(data)
            })
    }, [])



    return (
        <div className='dashboardBackground'>
            <div className="row d-flex">
                {
                    myOrders.map(order =>
                        <div id='card'>
                            <div className="service-list">
                                <div className="d-flex">
                                    <img style={{ height: '60px' }} src={icon} alt="" />
                                    <p style={{ marginLeft: '50%' }} className='done text-center my-font pt-2'>Done</p>
                                </div>
                                <h5 className='my-font pt-3'>{order.serviceName}</h5>
                                <small>{order.projectDetail}</small>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default ServiceList;