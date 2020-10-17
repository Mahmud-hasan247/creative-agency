import React from 'react';
import Brands from '../Components/HomeComponents/Brands/Brands';
import Feedback from '../Components/HomeComponents/Feedback/Feedback';
import Footer from '../Components/HomeComponents/Footer/Footer';
import Header from '../Components/HomeComponents/Header/Header';
import OurWorks from '../Components/HomeComponents/OurWorks/OurWorks';
import Services from '../Components/HomeComponents/Services/Services';

const LandingPage = () => {
    return (
        <div>
            <Header/>
            <Brands/>
            <Services/>
            <OurWorks/>
            <Feedback/>
            <Footer/>
        </div>
    );
};

export default LandingPage;