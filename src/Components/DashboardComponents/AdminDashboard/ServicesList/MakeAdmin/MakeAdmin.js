import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {

    const { register, handleSubmit} = useForm();

    const onSubmit = data => {
        fetch('https://blooming-journey-06571.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('You are added this person as an admin successfully');
        })
    }

    return (
        <div className= 'dashboardBackground'>
            <form onSubmit={handleSubmit(onSubmit)} className='ml-5' action="">
                <h5 className='my-font pt-5'>Email</h5>
                <input  ref={register({ required: true })} name='email' className='pl-3' placeholder='example@gmail.com' style={{width: '50%', border: 'none', height: '45px', borderRadius: '5px'}} type="text"/>
                <input className = 'btn btn-success my-button my-font ml-4 mb-1' type="submit" value='Submit'/>
            </form>
            

        </div>
    );
};

export default MakeAdmin;