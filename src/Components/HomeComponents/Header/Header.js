import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div
            style={{
                width: '100%', height: '100%',
                width: '100%',
                background: '#FBD062',
            }}>
            <div className="container">
                <Navbar></Navbar>
                <MainHeader />
            </div>
        </div>
    );
};

export default Header;