import React from 'react'
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-bootstrap-icons';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "../css/footer.css"
function FooterText() {
    return (
        <div className='footer'>
            <div className="container top-footer">
                <div className="row">
                    <div className='col-md-2 col-sm-6'>
                        <div className="widget">
                            <h5 className="widget-title">
                                Menu
                            </h5>
                            <ul className='menu'>
                                <li>
                                    <Nav.Link href="#home">Home
                                    </Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link href='#'>Coming soon</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link href='#'>Order </Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link href='#'>Terms of service </Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link href='#'>Pricing </Nav.Link>
                                </li>
                            </ul>
                        </div>
                        <div className="widget">
                            <div className="social-links">
                                <Nav.Link href="#home"> <Icon.Facebook />
                                </Nav.Link>
                                <Nav.Link href="#home"> <Icon.Twitter />
                                </Nav.Link>
                                <Nav.Link href="#home"> <Icon.Instagram />
                                </Nav.Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <div className="widget">
                            <h5 className="widget-title">
                                Address information
                            </h5>
                            <p>
                                California. AMC Dine-In Theatres Marina,
                                Street 26, Distritc 543 #108
                            </p>
                            <p>
                                Example@mail.com <br />
                                + 123 456 7890
                                <Icon.Headphones>
                                </Icon.Headphones>
                            </p>
                        </div>


                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-6'>
                        <div className="widget">
                            <h5 className="widget-title">
                                LEAVE A MESSAGE
                            </h5>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Name *"
                                className="mb-3"
                            >
                                <Form.Control className='shadow-none' type="Email *" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control className='shadow-none' type="password" placeholder="Password" />
                            </FloatingLabel>
                            <FloatingLabel className='mt-2' controlId="floatingTextarea2" label="Message *">
                                <Form.Control
                                    className='shadow-none'
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <button className='btn  mt-3 w-100'>Send to us</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="sub-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <p className='text-white mt-5 mb-5'>
                                © Copyrights All rights reserved
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FooterText