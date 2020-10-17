import React, { useContext, useEffect, useState } from 'react';
import logo from '../../../images/logos/logo.png';
import ServicesList from '../AdminDashboard/ServicesList/ServicesList/ServicesList';
import AddService from '../AdminDashboard/ServicesList/AddService/AddService';
import MakeAdmin from '../AdminDashboard/ServicesList/MakeAdmin/MakeAdmin';
import Order from '../ClientDashboard/Order/Order';
import Review from '../ClientDashboard/Review/Review';
import ServiceList from '../ClientDashboard/ServiceList/ServiceList';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import AdminSidebar from './Sidebar/AdminSidebar';
import CustomerSidebar from './Sidebar/CustomerSidebar';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import jwt_decode from "jwt-decode";

const ParentDashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [admin, setAdmin] = useState(false);
    const [dashboard, setDashboard] = useState('Order');


    const token = sessionStorage.getItem('authToken');
    const decodedToken = jwt_decode(token);
    const tokenEmail = decodedToken.email;

    useEffect(() => {
        fetch('https://blooming-journey-06571.herokuapp.com/admins', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: tokenEmail })
        })
            .then(response => response.json())
            .then(data => setAdmin(data));
    }, [])

    const order = () => {
        setDashboard('Order');
    }
    const serviceList = () => {
        setDashboard('Service List');
    }
    const review = () => {
        setDashboard('Review');
    }
    const makeAdmin = () => {
        setDashboard('Make Admin');
    }
    const addService = () => {
        setDashboard('Add Service');
    }
    const servicesList = () => {
        setDashboard('Services List');
    }

    return (
        <div>
            <div className='d-flex'>
                <div className="col-md-2">
                    <Link to="/">
                        <img style={{ width: '150px', marginLeft: '5%', marginTop: '7%' }} src={logo} alt="" />
                    </Link>
                    <CustomerSidebar review={review} order={order} ServiceList={serviceList}> </CustomerSidebar>
                    {admin && <AdminSidebar makeAdmin={makeAdmin} addService={addService} servicesList={servicesList} />}
                </div>
                <div className="col-md-10">
                    <DashboardHeader header={dashboard} />
                    {(dashboard === 'Order') && <Order />}
                    {(dashboard === 'Service List') && <ServiceList />}
                    {(dashboard === 'Review') && <Review />}
                    {admin && <div>
                        {(dashboard === 'Make Admin') && <MakeAdmin />}
                        {(dashboard === 'Add Service') && <AddService />}
                        {(dashboard === 'Services List') && <ServicesList></ServicesList>}
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default ParentDashboard;