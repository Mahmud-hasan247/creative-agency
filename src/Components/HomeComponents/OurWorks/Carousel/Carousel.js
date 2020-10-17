import React from 'react';
import carousel1 from '../../../../images/carousel-1.png';
import carousel2 from '../../../../images/carousel-2.png';
import carousel3 from '../../../../images/carousel-4.png';
import carousel4 from '../../../../images/carousel-5.png';
import { Carousel } from 'react-bootstrap';

const myCarousel = () => {
    return (
        <div className='pb-5 mr-3'>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ marginLeft: '25%' }}
                        className=" w-50"
                        src={carousel1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ marginLeft: '25%' }}
                        className="d-block w-50"
                        src={carousel2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ marginLeft: '25%' }}
                        className="d-block w-50"
                        src={carousel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ marginLeft: '25%' }}
                        className="d-block w-50"
                        src={carousel4}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default myCarousel;