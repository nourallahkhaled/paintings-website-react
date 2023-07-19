import React, { useState, useEffect, useContext } from 'react';
import NavBars from '../components/NavBars';
import { Container, Col } from 'react-bootstrap';
import home1 from '../images/images/home1.jpeg';
import home3 from '../images/images/home3.jpeg';

import home9 from '../images/images/home8.jpeg';
import home10 from '../images/images/home10.jpeg';
import home11 from '../images/images/home11.jpeg';
import home12 from '../images/images/home12.jpeg';
import home13 from '../images/images/home13.jpeg';
import '../CSS/home.css';

const HomePage = () => {




    return (
        <div>
            <NavBars></NavBars>


            <Container className=' d-none d-lg-block' style={{ padding: "0px", maxWidth: "1100px", maxHeight: "fit-content" }}>
                <div className='d-flex flex-wrap justify-content-center m-5 ' style={{ height: "500px" }}>
                    <div className='col-12 col-lg-5 mb-2 h-100 my-2  '>
                        <img className="w-100 h-100 " src={home3} alt='' style={{ objectFit: 'cover', marginRight: "8px" }} />
                    </div>
                    <div className='col-12 col-lg-7 mb-2 d-flex flex-column h-100  my-1'>
                        <div className='h-50   my-1' style={{ marginLeft: "8px" }}>
                            <img className="w-100 h-100" src={home10} alt='' style={{ objectFit: 'cover' }} />
                        </div>

                        <div className='h-50 d-flex flex-wrap  mx-2'>
                            <div className='col-12 col-lg-6 mb-2 h-100 '>
                                <img className="w-100 h-100 " src={home9} alt='' style={{ objectFit: 'cover' }} />
                            </div>

                            <div className='col-12 col-lg-6 mb-2 h-100'>
                                <img className="w-100 h-100 mx-2 " src={home12} alt='' style={{ objectFit: 'cover' }} />

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='col-12  mb-2  my-2 d-block d-lg-none  ' style={{ height: "550px" }}>
                <img className="w-100 h-100 " src={home3} alt='' style={{ objectFit: 'cover' }} />
            </div>

            <div style={{ height: 'auto' }} className='my-5 container'>
                <div className='row home-row2 home-row3 flex-lg-row flex-sm-column-reverse justify-content-center align-items-center'>
                    <div className='col-lg-6 col-sm-12' style={{ textAlign: "left", padding: "20px" }}>
                        <h2>Our Artists</h2>
                        <hr className='w-75' />
                        <div>
                            <p style={{textAlign:'justify'}}>A great painting is the result of the artist's careful attention to detail and their commitment to quality. A skilled artist understands the importance of choosing the right materials, such as high-quality paint and canvas, to ensure the longevity and durability of their work. They also pay close attention to the composition, color palette, and brushstrokes, striving to create a cohesive and visually appealing piece.
                            </p>
                        </div>
                        <br />
                        <div>
                            <p style={{textAlign:'justify'}}>Ultimately, a great painting is the result of the artist's dedication to their craft and their commitment to creating a work of lasting beauty and quality. It is a testament to their skill, creativity, and ability to connect with the viewer through their art..</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12' style={{ padding: "0px" }}>
                        <img className="d-block w-100" src={home1} alt="First slide" style={{ height: '450px' }} />
                    </div>

                </div>
            </div>

            <div className='my-5' style={{ height: 'auto', textAlign: "center", backgroundColor: "#F0EEE6", paddingTop: "20px", paddingBottom: "20px" }}>

                <div className='row home-row1 flex-lg-row flex-sm-column justify-content-center align-items-center'>
                    <div className='col-lg-12 col-md-12 col-sm-12 ' style={{ padding: "0px" }}>

                        <h3>Make every corner of your home a piece of art </h3>
                        <img className="d-block w-100 my-2" src={home11} alt="First slide" style={{ height: '300px', padding: "0px" }} />
                    </div>

                </div>
            </div>

            <div style={{ height: 'auto' }} className='my-5 container'>
                <div className='row home-row2 flex-lg-row flex-sm-column-reverse justify-content-center align-items-center'>
                    <div className='col-lg-6 col-sm-12' style={{ padding: "0px" }}>
                        <img className="d-block w-100" src={home13} alt="First slide" style={{ height: '450px' }} />
                    </div>
                    <div className='col-lg-6 col-sm-12' style={{ textAlign: "left", padding: "20px" }}>
                        <h2>Paintings</h2>
                        <hr className='w-75' />
                        <div>
                            <p style={{textAlign:'justify'}}>Are an essential element of home decoration as they add color, texture, and personality to a space. They can help to create a cohesive and harmonious atmosphere by pulling together the different elements of a room, such as furniture, flooring, and wall color. </p>
                        </div>
                        <br />
                        <div>
                            <p style={{textAlign:'justify'}}>Paintings can also serve as a focal point, drawing the eye and adding visual interest to an otherwise plain wall. Additionally, paintings can reflect the personality and tastes of the homeowner, making a space feel more unique and personal. Artwork can also have a calming effect and can help to create a sense of tranquility and relaxation in a room.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomePage;