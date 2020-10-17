import React, { useContext } from 'react';
import './Order.css';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { userContext } from '../../../../App';

const Order = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('https://blooming-journey-06571.herokuapp.com/orderAService', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                alert('Your order has been submitted successfully!')
            })
    }

    const { title } = useParams()

    return (
        <>
            <div>
                <main className='dashboardBackground'>
                    <form onSubmit={handleSubmit(onSubmit)} className='pt-5 ' action="">
                        <input ref={register({ required: true })} className='order-input' name='name' placeholder='Your name / company name' type="text" /> <br />
                        <input ref={register({ required: true })} className='order-input' name='email' placeholder='Your Email' defaultValue={loggedInUser.email} type="email" /><br />
                        <input ref={register({ required: true })} className='order-input' name='serviceName' placeholder='Service Name' defaultValue={title} type="text" /><br />
                        <input ref={register({ required: true })} className='order-input' name='projectDetail' id='project-detail' placeholder='Project detail' type="text" /><br />
                        <input ref={register({ required: true })} className='order-input' name='price' id='price' placeholder='Price' type="text" />
                        <br /> <br />
                        <input className='btn btn-dark my-font my-button ml-5' type="submit" value="Send" />
                    </form>
                </main>
            </div>
        </>
    );
};

export default Order;