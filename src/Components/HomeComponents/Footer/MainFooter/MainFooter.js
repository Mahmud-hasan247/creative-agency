import React from 'react';
import './MainFooter.css';
import emailjs from 'emailjs-com';

const MainFooter = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('creativeAgency', 'template_6jvi144', e.target, 'user_cvWtvUEiHYntwE4izcI3E')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert(`Thanks for messaging us. We'll reply to you as soon as possible.`);
        e.target.reset();
    }

    return (
        <>
            <div className='row'>
                <div className="col-md-6 my-font p-5">
                    <h1 className='pt-5 pb-5'>Let us handle your <br /> project professionally.</h1>
                    <p className='pb-5'>Consectetur adipisicing elit. Sequi rem quisquam aspernatur, doloribus minus quibusdam. At quos adipisci asperiores eos voluptates dicta voluptatibus ipsum placeat ratione, aperiam, vitae quasi dolore!</p>
                </div>
                <div className="col-md-6 my-font mt-5 pt-5">
                    <form onSubmit={sendEmail}>
                        <input className="contact" placeholder="Your email address" type="email" name='email' /><br /><br />
                        <input className="contact" placeholder="Your name / company name" type="text" name='name' /><br /><br />
                        <input className="contact" placeholder='Your massage' id='massage' type="text" name='message' /><br /><br />
                        <input type="submit" className='btn btn-dark my-button' value='Send'/>
                    </form>
                </div>
            </div>
            <p className="text-muted text-center my-font mt-5 pt-5 pb-5">Copyright Orango lobs 2020</p>
        </>
    );
};

export default MainFooter;