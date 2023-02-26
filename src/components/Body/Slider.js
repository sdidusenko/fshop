import React from 'react';
import {Carousel} from "react-bootstrap";
import f1 from './../../../Assets/photo-1.jpg'
import f2 from './../../../Assets/photo-2.jpg'
import f3 from './../../../Assets/photo-3.jpg'
import f4 from './../../../Assets/photo-4.jpg'
import f5 from './../../../Assets/photo-5.jpg'
import f6 from './../../../Assets/photo-6.jpg'
import f7 from './../../../Assets/photo-7.jpg'
import f8 from './../../../Assets/photo-8.jpg'
import f9 from './../../../Assets/photo-9.jpg'
import f10 from './../../../Assets/photo-10.jpg'
import f11 from './../../../Assets/photo-11.jpg'

function Slider(props) {
    return (
        <div>
            <Carousel className='carousel-fade'>
                <Carousel.Item>
                    <img style={{'height': '70vh'}} className='mt-2 d-block me-auto ms-auto' src={f1} alt='photo1'/>
                    <Carousel.Caption>
                        <h3>Next Generation</h3>
                        <p>Good quality clothes to creative people</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height': '70vh'}} className='mt-2 d-block me-auto ms-auto' src={f2} alt='photo2'/>
                    <Carousel.Caption>
                        <h3>Next Generation</h3>
                        <p>Good quality clothes to creative people</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height': '70vh'}} className='mt-2 d-block me-auto ms-auto' src={f3} alt='photo3'/>
                    <Carousel.Caption>
                        <h3>Next Generation</h3>
                        <p>Good quality clothes to creative people</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height': '70vh'}} className='mt-2 d-block me-auto ms-auto' src={f4} alt='photo4'/>
                    <Carousel.Caption>
                        <h3>Next Generation</h3>
                        <p>Good quality clothes to creative people</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height': '70vh'}} className='mt-2 d-block me-auto ms-auto' src={f5} alt='photo5'/>
                    <Carousel.Caption>
                        <h3>Next Generation</h3>
                        <p>Good quality clothes to creative people</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height': '70vh'}} className='mt-2 d-block me-auto ms-auto' src={f6} alt='photo6'/>
                    <Carousel.Caption>
                        <h3>Next Generation</h3>
                        <p>Good quality clothes to creative people</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height': '70vh'}} className='mt-2 d-block me-auto ms-auto' src={f7} alt='photo7'/>
                    <Carousel.Caption>
                        <h3>Next Generation</h3>
                        <p>Good quality clothes to creative people</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height': '70vh'}} className='mt-2 d-block me-auto ms-auto' src={f8} alt='photo8'/>
                    <Carousel.Caption>
                        <h3>Next Generation</h3>
                        <p>Good quality clothes to creative people</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height': '70vh'}} className='mt-2 d-block me-auto ms-auto' src={f9} alt='photo9'/>
                    <Carousel.Caption>
                        <h3>Next Generation</h3>
                        <p>Good quality clothes to creative people</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height': '70vh'}} className='mt-2 d-block me-auto ms-auto' src={f10} alt='photo10'/>
                    <Carousel.Caption>
                        <h3>Next Generation</h3>
                        <p>Good quality clothes to creative people</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{'height': '70vh'}} className='mt-2 d-block me-auto ms-auto' src={f11} alt='photo11'/>
                    <Carousel.Caption>
                        <h3>Next Generation</h3>
                        <p>Good quality clothes to creative people</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;