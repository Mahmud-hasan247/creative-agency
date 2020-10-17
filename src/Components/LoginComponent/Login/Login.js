import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import google from '../../../images/icons/google.png';
import './Login.css';
import firebaseConfig from '../../../firebaseConfig/firebaseConfig';
import { userContext } from '../../../App';
import * as firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const history = useHistory()
    const location = useLocation()

    const { from } = location.state || { from: { pathname: "/" } };

    var provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                const { displayName, email } = result.user;
                const newUser = {
                    name: displayName,
                    email: email
                }
                setLoggedInUser(newUser)
                authToken()
            })
            .catch(function (error) {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    const authToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(idToken => {
                sessionStorage.setItem('authToken', idToken)
                history.replace(from)
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 col-sm-12 text-center">
                        <Link to="/">
                            <img className="" style={{ width: '150px', marginTop: '10%' }} src={logo} alt="" />
                        </Link>
                        <div className="loginBox">
                            <h3 style={{ fontWeight: 'bold' }} className="my-font mt-5 pt-5 pb-3">Log In </h3>
                            <div onClick={handleSignIn} className="google d-flex mt-3">
                                <img className='m-1 img-fluid' style={{ width: '8%' }} src={google} alt="" />
                                <p style={{ marginLeft: '20%' }} className="my-font mt-2">Continue with Google</p>
                            </div>
                            <p className='my-font pt-3'>Don't have an account? <a onClick={handleSignIn} style={{ color: 'blue', cursor: 'pointer' }}>Create a new account</a></p>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;