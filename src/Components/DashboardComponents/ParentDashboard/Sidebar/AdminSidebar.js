import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faAlignLeft, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const AdminSidebar = ({ servicesList, makeAdmin, addService }) => {
    return (
        <div>
            <div className="mt-5">
                <div onClick={() => servicesList()} className="order ml-3 sidebar-item mt-3 align-items-center d-flex">
                    <FontAwesomeIcon icon={faAlignLeft} />
                    <h6 className='my-font ml-3 mt-2'>Services list</h6>
                </div>
                <div onClick={() => addService()} className="order ml-3 sidebar-item mt-3 align-items-center d-flex">
                    <FontAwesomeIcon icon={faPlus} />
                    <h6 className='my-font ml-3 mt-2'>Add service</h6>
                </div>
                <div onClick={() => makeAdmin()} className="order ml-3 sidebar-item mt-3 align-items-center d-flex">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <h6 className='my-font ml-3 mt-2'>Make admin</h6>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;