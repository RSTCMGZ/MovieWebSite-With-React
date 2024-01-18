import React from 'react'
import "../css/AboutMovie.css"
import Movie from "../../img/AboutMovie/movie-1.jpg"
function AboutMovie() {
    return (
        <div className='mt-5'>
            <section className="movie">
                <div className='about-movie'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-5">
                                <img src={Movie} className='movie-img' alt="" />
                            </div>
                        </div>
                        <div className="entry-title d-flex">
                            <ul>
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
                            <a href="#">
                                Lord of the rings: The return of the kings
                            </a>
                            <div className="entry-date">
                                <span>
                                    5 May 2017
                                </span>
                            </div>
                            <div className="entry-social">
                                <a href="#">
                                    facebook
                                </a>

                                <a href="#">
                                    twitter
                                </a>
                                <a href="#">
                                    instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>

    )
}

export default AboutMovie