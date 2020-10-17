import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const Review = () => {

    const { register, handleSubmit} = useForm();

    const history = useHistory()

    const onSubmit = data => {
        fetch('https://blooming-journey-06571.herokuapp.com/postAReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('Thank you for submitting a valuable review!')
            history.push('/');
        })
    }

    return (
        <>
             <div>
                <main className='dashboardBackground'>
                    <form onSubmit={handleSubmit(onSubmit)} className='pt-5 ' action="">
                        <input ref={register({ required: true })} name='name'  className='order-input' placeholder='Your name' type="text"/> <br/>
                        <input ref={register({ required: true })} name='companyName' className='order-input' placeholder='Company name' type="text"/><br/>
                        <input ref={register({ required: true })} name='review' className='order-input' id='project-detail' placeholder='Description' type="text"/><br/>
                         <br/>
                        <input className='btn btn-dark my-font my-button ml-5' type="submit" value="Submit"/>
                    </form>
                </main>
            </div>
        </>
    );
};

export default Review;