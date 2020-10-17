import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../../App';
import logo from '../../../../images/logos/logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const signOut = () => {
        firebase.auth().signOut()
            .then(function () {
                sessionStorage.removeItem('authToken')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className='pt-3'>
                <nav className="row navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#"><img style={{ width: '150px' }} src={logo} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ml-auto">
                            <li className="nav-item active">
                                <Link to="/home">
                                    <a className="nav-link mr-3 my-font" href="#">Home <span className="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li className="nav-item mr-3">
                                <Link to="/dashboard">
                                    <a className="nav-link my-font" href="#">Dashboard</a>
                                </Link>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link my-font" href="#">Our Team</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link my-font" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                {
                                    (loggedInUser.email || sessionStorage.getItem('authToken')) ? <button onClick={signOut} className="btn btn-dark my-button my-font">Log Out</button>
                                        :
                                        <Link to="/login">
                                            <button className="btn btn-dark my-button my-font"> Log In </button>
                                        </Link>
                                }

                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;