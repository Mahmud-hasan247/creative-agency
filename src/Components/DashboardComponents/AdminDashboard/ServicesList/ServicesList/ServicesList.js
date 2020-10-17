import { Dropdown } from 'react-bootstrap';
import React, { useEffect } from 'react';
import './ServicesList.css';
import { useState } from 'react';

const ServicesList = () => {

    const [servicesInfo, setServicesInfo] = useState([]);

    useEffect(() => {
        fetch('https://blooming-journey-06571.herokuapp.com/allOrders')
        .then(response => response.json())
        .then(data => setServicesInfo(data))
    }, [])

    return (
        <div className='dashboardBackground'>
            <div className="fullTable">
                <div id="table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Project Details</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                servicesInfo.map(service => <tr>
                                <th scope="row">{service.name}</th>
                                <td>{service.email}</td>
                                <td>{service.serviceName}</td>
                                <td>{service.projectDetail}</td>
                                <td>
                                <select class="custom-select" id="inputGroupSelect01">
                                        <option id="option-1" value="1">Pending</option>
                                        <option id="option-2"  value="2">On Going</option>
                                        <option id="option-3"  value="3">Done</option>
                                    </select>
                                </td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default ServicesList;