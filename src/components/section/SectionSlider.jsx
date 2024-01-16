import * as React from 'react';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import GliderImg from "../../img/GliderImg/movie-2.jpg"
import "../css/SliderNavbar.css"
function SectionSlider() {
    return (
        <div>
            <Glider
                className="glider-container"
                draggable
                hasDots
                slidesToShow={5}
                slidesToScroll={1}
                scrollToSlide={5}
            >

                <div>
                    <div className='border p-1'>
                        <div className='buttons d-none'>
                            <button className='btn btn-primary'>Watch Trailer</button>
                            <button>Buy ticket</button>
                        </div>
                        <img src={GliderImg} className='' alt='' />
                    </div>
                </div>
                <div>
                    <div className='border p-1'>
                        <div className='buttons d-none'>
                            <button className='btn btn-primary'>Watch Trailer</button>
                            <button>Buy ticket</button>
                        </div>
                        <img src={GliderImg} className='' alt='' />
                    </div>
                </div>
                <div>
                    <div className='border p-1'>
                        <div className='buttons d-none'>
                            <button className='btn btn-primary'>Watch Trailer</button>
                            <button>Buy ticket</button>
                        </div>
                        <img src={GliderImg} className='' alt='' />
                    </div>
                </div>
                <div>
                    <div className='border p-1'>
                        <div className='buttons d-none'>
                            <button className='btn btn-primary'>Watch Trailer</button>
                            <button>Buy ticket</button>
                        </div>
                        <img src={GliderImg} className='' alt='' />
                    </div>
                </div>
                <div>
                    <div className='border p-1'>
                        <div className='buttons d-none'>
                            <button className='btn btn-primary'>Watch Trailer</button>
                            <button>Buy ticket</button>
                        </div>
                        <img src={GliderImg} className='' alt='' />
                    </div>
                </div>
                <div>
                    <div className='border p-1'>
                        <div className='buttons d-none'>
                            <button className='btn btn-primary'>Watch Trailer</button>
                            <button>Buy ticket</button>
                        </div>
                        <img src={GliderImg} className='' alt='' />
                    </div>
                </div>
                <div>
                    <div className='border p-1'>
                        <div className='buttons d-none'>
                            <button className='btn btn-primary'>Watch Trailer</button>
                            <button>Buy ticket</button>
                        </div>
                        <img src={GliderImg} className='' alt='' />
                    </div>
                </div>
            </Glider>
        </div>
    )
}

export default SectionSlider