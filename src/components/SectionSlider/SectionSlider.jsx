import * as React from 'react';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import GliderImg from "../../img/GliderImg/movie-2.jpg"
import GliderImg2 from "../../img/GliderImg/movie-1.jpg"
import GliderImg3 from "../../img/GliderImg/movie-3.jpg"
import GliderImg4 from "../../img/GliderImg/movie-4.jpg"
import GliderImg5 from "../../img/GliderImg/movie-5.jpg"
import "../css/SliderNavbar.css"
import * as Icon from 'react-bootstrap-icons';

function SectionSlider() {
    return (
        <div className='px-5'>
            <Glider
                className="glider-container"
                draggable
                hasDots
                slidesToShow={5.5}
                slidesToScroll={2}
                scrollToSlide={5}
            >

                <div className='border position-relative'>
                    <div className='buttons position-absolute'>
                        <button className='btn '>Watch Trailer</button>
                        <button className='btn '>Buy ticket</button>
                    </div>
                    <div className='desc'>
                        <div className='rating'>
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                        </div>
                        <h3>X-Men:Apocalypse</h3>
                        <ul className="date d-flex gap-1 text-white">
                            <li>11 :00</li>
                            <li>14 :00</li>
                            <li>16 :00</li>
                            <li>19 :00</li>
                        </ul>
                    </div>
                    <img src={GliderImg4} className='' alt='' />
                </div>

                <div className='border position-relative'>
                    <div className='buttons position-absolute'>
                        <button className='btn btn-primary'>Watch Trailer</button>
                        <button className='btn btn-primary'>Buy ticket</button>
                    </div>
                    <div className='desc'>
                        <div className='rating'>
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                        </div>
                        <h3>X-Men:Apocalypse</h3>
                        <ul className="date d-flex gap-1 text-white">
                            <li>11 :00</li>
                            <li>14 :00</li>
                            <li>16 :00</li>
                            <li>19 :00</li>
                        </ul>
                    </div>
                    <img src={GliderImg} className='' alt='' />
                </div>


                <div className='border position-relative'>
                    <div className='buttons position-absolute'>
                        <button className='btn btn-primary'>Watch Trailer</button>
                        <button className='btn btn-primary'>Buy ticket</button>
                    </div>
                    <div className='desc'>
                        <div className='rating'>
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                        </div>
                        <h3>X-Men:Apocalypse</h3>
                        <ul className="date d-flex gap-1 text-white">
                            <li>11 :00</li>
                            <li>14 :00</li>
                            <li>16 :00</li>
                            <li>19 :00</li>
                        </ul>
                    </div>
                    <img src={GliderImg5} className='' alt='' />
                </div>


                <div className='border position-relative'>
                    <div className='buttons position-absolute'>
                        <button className='btn btn-primary'>Watch Trailer</button>
                        <button className='btn btn-primary'>Buy ticket</button>
                    </div>
                    <div className='desc'>
                        <div className='rating'>
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                        </div>
                        <h3>X-Men:Apocalypse</h3>
                        <ul className="date d-flex gap-1 text-white">
                            <li>11 :00</li>
                            <li>14 :00</li>
                            <li>16 :00</li>
                            <li>19 :00</li>
                        </ul>
                    </div>
                    <img src={GliderImg2} className='' alt='' />
                </div>


                <div className='border position-relative'>
                    <div className='buttons position-absolute'>
                        <button className='btn btn-primary'>Watch Trailer</button>
                        <button className='btn btn-primary'>Buy ticket</button>
                    </div>
                    <div className='desc'>
                        <div className='rating'>
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                        </div>
                        <h3>X-Men:Apocalypse</h3>
                        <ul className="date d-flex gap-1 text-white">
                            <li>11 :00</li>
                            <li>14 :00</li>
                            <li>16 :00</li>
                            <li>19 :00</li>
                        </ul>
                    </div>
                    <img src={GliderImg3} className='' alt='' />
                </div>


                <div className='border position-relative'>
                    <div className='buttons position-absolute'>
                        <button className='btn btn-primary'>Watch Trailer</button>
                        <button className='btn btn-primary'>Buy ticket</button>
                    </div>
                    <div className='desc'>
                        <div className='rating'>
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                        </div>
                        <h3>X-Men:Apocalypse</h3>
                        <ul className="date d-flex gap-1 text-white">
                            <li>11 :00</li>
                            <li>14 :00</li>
                            <li>16 :00</li>
                            <li>19 :00</li>
                        </ul>
                    </div>

                    <img src={GliderImg} className='' alt='' />
                </div>


                <div className='border position-relative'>
                    <div className='buttons position-absolute'>
                        <button className='btn btn-primary'>Watch Trailer</button>
                        <button className='btn btn-primary'>Buy ticket</button>
                    </div>
                    <div className='desc'>
                        <div className='rating'>
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                        </div>
                        <h3>X-Men:Apocalypse</h3>
                        <ul className="date d-flex gap-1 text-white">
                            <li>11 :00</li>
                            <li>14 :00</li>
                            <li>16 :00</li>
                            <li>19 :00</li>
                        </ul>
                    </div>
                    <img src={GliderImg3} className='' alt='' />
                </div>


                <div className='border position-relative'>
                    <div className='buttons position-absolute'>
                        <button className='btn btn-primary'>Watch Trailer</button>
                        <button className='btn btn-primary'>Buy ticket</button>
                    </div>
                    <div className='desc'>
                        <div className='rating'>
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                        </div>
                        <h3>X-Men:Apocalypse</h3>
                        <ul className="date d-flex gap-1 text-white">
                            <li>11 :00</li>
                            <li>14 :00</li>
                            <li>16 :00</li>
                            <li>19 :00</li>
                        </ul>
                    </div>
                    <img src={GliderImg2} className='' alt='' />
                </div>


                <div className='border position-relative'>
                    <div className='buttons position-absolute'>
                        <button className='btn btn-primary'>Watch Trailer</button>
                        <button className='btn btn-primary'>Buy ticket</button>
                    </div>
                    <div className='desc'>
                        <div className='rating'>
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                        </div>
                        <h3>X-Men:Apocalypse</h3>
                        <ul className="date d-flex gap-1 text-white">
                            <li>11 :00</li>
                            <li>14 :00</li>
                            <li>16 :00</li>
                            <li>19 :00</li>
                        </ul>
                    </div>

                    <img src={GliderImg5} className='' alt='' />
                </div>


                <div className='border position-relative'>
                    <div className='buttons position-absolute'>
                        <button className='btn btn-primary'>Watch Trailer</button>
                        <button className='btn btn-primary'>Buy ticket</button>
                    </div>
                    <div className='desc'>
                        <div className='rating'>
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                        </div>
                        <h3>X-Men:Apocalypse</h3>
                        <ul className="date d-flex gap-1 text-white">
                            <li>11 :00</li>
                            <li>14 :00</li>
                            <li>16 :00</li>
                            <li>19 :00</li>
                        </ul>
                    </div>
                    <div className='desc'>
                        <div className='rating'>
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                        </div>
                        <h3>X-Men:Apocalypse</h3>
                        <ul className="date d-flex gap-1 text-white">
                            <li>11 :00</li>
                            <li>14 :00</li>
                            <li>16 :00</li>
                            <li>19 :00</li>
                        </ul>
                    </div>
                    <img src={GliderImg4} className='' alt='' />
                </div>


                <div className='border position-relative'>
                    <div className='buttons position-absolute'>
                        <button className='btn btn-primary'>Watch Trailer</button>
                        <button className='btn btn-primary'>Buy ticket</button>
                    </div>
                    <div className='desc'>
                        <div className='rating'>
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                        </div>
                        <h3>X-Men:Apocalypse</h3>
                        <ul className="date d-flex gap-1 text-white">
                            <li>11 :00</li>
                            <li>14 :00</li>
                            <li>16 :00</li>
                            <li>19 :00</li>
                        </ul>
                    </div>
                    <div className='desc'>
                        <div className='rating'>
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                        </div>
                        <h3>X-Men:Apocalypse</h3>
                        <ul className="date d-flex gap-1 text-white">
                            <li>11 :00</li>
                            <li>14 :00</li>
                            <li>16 :00</li>
                            <li>19 :00</li>
                        </ul>
                    </div>
                    <img src={GliderImg} className='' alt='' />
                </div>


                <div className='border position-relative'>
                    <div className='buttons position-absolute'>
                        <button className='btn btn-primary'>Watch Trailer</button>
                        <button className='btn btn-primary'>Buy ticket</button>
                    </div>
                    <div className='desc'>
                        <div className='rating'>
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                            <Icon.StarFill />
                        </div>
                        <h3>X-Men:Apocalypse</h3>
                        <ul className="date d-flex gap-1 text-white">
                            <li>11 :00</li>
                            <li>14 :00</li>
                            <li>16 :00</li>
                            <li>19 :00</li>
                        </ul>
                    </div>
                    <img src={GliderImg2} className='' alt='' />
                </div>


            </Glider>
        </div>
    )
}

export default SectionSlider