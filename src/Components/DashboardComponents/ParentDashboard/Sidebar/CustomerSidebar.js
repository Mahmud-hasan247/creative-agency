import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faAlignLeft, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const CustomerSidebar = ({order, ServiceList, review}) => {
    return (
        <div>
            <div className="mt-5">
                    <div onClick={() => order()} className="order sidebar-item ml-3 align-items-center d-flex">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <h6 className='my-font ml-3 mt-2'>Order</h6>
                    </div>
                    <div onClick={() => ServiceList()} className="order sidebar-item ml-3 mt-3 align-items-center d-flex">
                        <FontAwesomeIcon icon={faAlignLeft} />
                        <h6 className='my-font ml-3 mt-2'>Service list</h6>
                    </div>
                    <div onClick={() => review()} className="order sidebar-item ml-3 mt-3 align-items-center d-flex">
                        <FontAwesomeIcon icon={faCommentDots} />
                        <h6 className='my-font ml-3 mt-2'>Review</h6>
                    </div>
                </div>
        </div>
    );
};

export default CustomerSidebar;