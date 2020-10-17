import React, { useContext } from 'react';
import { userContext } from '../../../App';

const DashboardHeader = ({ header }) => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    return (
        <div>
            <header className='d-flex'>
                <div>
                    <h5 className='my-font ml-5 mt-5 pb-3'>{header}</h5>
                </div>
                <div style={{ marginLeft: '60%' }}>
                    <h6 className='my-font text-right mr-5 mt-5 pb-3'>{loggedInUser.name}</h6>
                </div>
            </header>
        </div>
    );
};

export default DashboardHeader;