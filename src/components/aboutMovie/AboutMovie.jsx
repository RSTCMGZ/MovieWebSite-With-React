import React from 'react'
import "../css/AboutMovie.css"
import Movie from "../../img/AboutMovie/movie-1.jpg"
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-bootstrap-icons';
import AboutSlider from '../aboutMovie/AboutSlider';
import SectionSlider from '../SectionSlider/SectionSlider';

function AboutMovie() {
    return (
        <div className='mt-5'>
            <section className="movie">
                <div className='about-movie'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mt-5">
                                <img src={Movie} className='movie-img' alt="" />
                            </div>
                        </div>
                        <div className="entry-title d-flex mt-5">
                            <ul className='d-flex gap-3 p-0'>
                                <li>
                                    Action
                                </li>
                                <li>
                                    Science Fiction
                                </li>
                                <li>
                                    Adventure
                                </li>
                            </ul>
                            <div className='entry-name'>
                                <Nav.Link>
                                    Lord of the rings: The return of the kings
                                </Nav.Link>
                                <div className="entry-date">
                                    <span>
                                        5 May 2017
                                    </span>
                                </div>
                                <div className="entry-social">
                                    <Nav.Link href="#home"> <Icon.Facebook />
                                    </Nav.Link>
                                    <Nav.Link href="#home"> <Icon.Twitter />
                                    </Nav.Link>
                                    <Nav.Link href="#home"> <Icon.Instagram />
                                    </Nav.Link>

                                </div>
                            </div>
                        </div>
                    </div>

                    <AboutSlider />
                    <div className="mt-5">

                        <SectionSlider />

                    </div>
                </div>
            </section>
        </div>

    )
}

export default AboutMovie