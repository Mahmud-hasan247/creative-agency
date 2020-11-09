import React from 'react';
import './MainFooter.css';

const MainFooter = () => {
    return (
        <>
            <div className='row'>
                <div className="col-md-6 my-font p-5">
                    <h1 className='pt-5 pb-5'>Let us handle your <br /> project professionally.</h1>
                    <p className='pb-5'>Consectetur adipisicing elit. Sequi rem quisquam aspernatur, doloribus minus quibusdam. At quos adipisci asperiores eos voluptates dicta voluptatibus ipsum placeat ratione, aperiam, vitae quasi dolore!</p>
                </div>
                <div className="col-md-6 my-font mt-5 pt-5">
                    <form action="">
                        <input className="contact" placeholder="Your email address" type="email" /><br /><br />
                        <input className="contact" placeholder="Your name / company name" type="text" /><br /><br />
                        <input className="contact" placeholder='Your massage' id='massage' type="text" /><br /><br />
                        <button className='btn btn-dark my-button'>Send</button>
                    </form>
                </div>
            </div>
            <p className="text-muted text-center my-font mt-5 pt-5 pb-5">Copyright Orango lobs 2020</p>
        </>
    );
};

export default MainFooter;