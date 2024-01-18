import * as React from 'react';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import GliderImg4 from "../../img/GliderImg/movie-4.jpg"
import GliderImg3 from "../../img/GliderImg/movie-2.jpg"
import "../css/SliderNavbar.css"
import * as Icon from 'react-bootstrap-icons';
import Nav from 'react-bootstrap/Nav';
import "../css/AboutSlider.css"

function SectionSlider() {
    return (
        <div className='px-5'>
            <Glider
                className="glider-container"
                draggable
                hasDots
                slidesToShow={1}
                slidesToScroll={2}
                scrollToSlide={5}
            >

                <div className="container mt-5 mb-5">
                    <div className="row ">
                        <div className="col-md-2 col-sm-3 col-xs-12 ">
                            <img src={GliderImg4} className='w-100 h-auto' alt='' />
                        </div>
                        <div className="col-md-8 col-sm-7 col-xs-12 text-white ">
                            <h3 className='synopsis'>Synopsis</h3>
                            <p className='entry'>
                                Authoritatively pontificate error-free deliverables and technically sound mindshare. Quickly build ong-term high-impact outsourcing vis-a-vis best-of-breed communities. Collaboratively disseminate prospective supply chains after corporate "outside the box" thinking. Rapidiously promote interactive metrics for ethical materials. Professionally repurpose market-driven applications with...</p>
                            <div className='links d-flex gap-5'>
                                <Nav.Link>
                                    <Icon.Basket3Fill className='mx-2' />Pre Order
                                </Nav.Link>
                                <Nav.Link>
                                    <Icon.ChatDotsFill className='mx-2' />Read More
                                </Nav.Link>
                            </div>

                        </div>
                        <div className="col-md-2 col-sm-3 col-xs-12 text-white">
                            <div className="skill-block">
                                <h5 className="timer">
                                    6.4
                                </h5>
                                <h6>
                                    - Metacritic
                                </h6>
                                <div className="skill-line">
                                    <div className="line-fill"></div>
                                </div>
                            </div>
                            <div className="skill-block">
                                <h5 className="timer">
                                    6.4
                                </h5>
                                <h6>
                                    - Metacritic
                                </h6>
                                <div className="skill-line">
                                    <div className="line-fill"></div>
                                </div>
                            </div>
                            <div className="skill-block">
                                <h5 className="timer">
                                    6.4
                                </h5>
                                <h6>
                                    - Metacritic
                                </h6>
                                <div className="skill-line">
                                    <div className="line-fill"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
                <div className="container mt-5 mb-5">
                    <div className="row ">
                        <div className="col-md-2 col-sm-3 col-xs-12 ">
                            <img src={GliderImg3} className='w-100 h-auto' alt='' />
                        </div>
                        <div className="col-md-8 col-sm-7 col-xs-12 text-white ">
                            <h3 className='synopsis'>Synopsis</h3>
                            <p className='entry'>
                                Authoritatively pontificate error-free deliverables and technically sound mindshare. Quickly build ong-term high-impact outsourcing vis-a-vis best-of-breed communities. Collaboratively disseminate prospective supply chains after corporate "outside the box" thinking. Rapidiously promote interactive metrics for ethical materials. Professionally repurpose market-driven applications with...</p>
                            <div className='links d-flex gap-5'>
                                <Nav.Link>
                                    <Icon.Basket3Fill className='mx-2' />Pre Order
                                </Nav.Link>
                                <Nav.Link>
                                    <Icon.ChatDotsFill className='mx-2' />Read More
                                </Nav.Link>
                            </div>

                        </div>
                        <div className="col-md-2 col-sm-3 col-xs-12 text-white">
                            <div className="skill-block">
                                <h5 className="timer">
                                    6.4
                                </h5>
                                <h6>
                                    - Metacritic
                                </h6>
                                <div className="skill-line">
                                    <div className="line-fill"></div>
                                </div>
                            </div>
                            <div className="skill-block">
                                <h5 className="timer">
                                    6.4
                                </h5>
                                <h6>
                                    - Metacritic
                                </h6>
                                <div className="skill-line">
                                    <div className="line-fill"></div>
                                </div>
                            </div>
                            <div className="skill-block">
                                <h5 className="timer">
                                    6.4
                                </h5>
                                <h6>
                                    - Metacritic
                                </h6>
                                <div className="skill-line">
                                    <div className="line-fill"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >

            </Glider >
        </div >
    )
}

export default SectionSlider