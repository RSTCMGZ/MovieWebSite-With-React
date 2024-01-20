import React from 'react'
import Glider from 'react-glider';

import BoxOffice1 from "../../img/boxOffice/thumb-1.jpg"
import BoxOffice2 from "../../img/boxOffice/thumb-2.jpg"
import BoxOffice3 from "../../img/boxOffice/thumb-3.jpg"
import BoxOffice4 from "../../img/boxOffice/thumb-4.jpg"
import BoxOffice5 from "../../img/boxOffice/thumb-5.jpg"
import Author from "../../img/boxOffice/author.png"
import "../css/BoxOffice.css"
function BoxOffice() {
  return (
    <div className='box-office'>
      <div className="container">
        <div className="row">
          <div className="col-sm-7 col-xs-12">
            <h3 className='text-center text-white'>BOX OFFICE</h3>
            <ul>
              <li className='office-color'>
                <ol className='d-flex justify-content-between align-items-center'>
                  <li>
                    <img src={BoxOffice1} alt='' />
                  </li>
                  <li className='mx-4'>1</li>
                  <li>
                    <h4>X-Men: Apocalypse</h4>
                    <span>Action, thriller</span>
                  </li>
                  <li className='opacity'>1.1M</li>
                  <li className='opacity'>1 week</li>
                </ol>
              </li>
              <li className='office-color'>
                <ol className='d-flex justify-content-between align-items-center'>

                  <li>
                    <img src={BoxOffice2} alt='' />
                  </li>
                  <li className='mx-2'>2</li>
                  <li>
                    <h4> Warcraft</h4>
                    <span>Action, thriller</span>
                  </li>
                  <li className='opacity'>1.2M</li>
                  <li className='opacity'>2 week</li>
                </ol>
              </li>
              <li className='office-color'>
                <ol className='d-flex justify-content-between align-items-center'>

                  <li>
                    <img src={BoxOffice3} alt='' />
                  </li>
                  <li className='mx-2'>3</li>
                  <li>
                    <h4>Hobbit: The battle
                    </h4>
                    <span>Action, thriller</span>
                  </li>
                  <li className='opacity'>1.3M</li>
                  <li className='opacity'>3 week</li>
                </ol>
              </li>
              <li className='office-color'>
                <ol className='d-flex justify-content-between  align-items-center'>

                  <li>
                    <img src={BoxOffice4} alt='' />
                  </li>
                  <li className='mx-3'>4</li>
                  <li>
                    <h4> James Bond: Spectre
                    </h4>
                    <span>Action, thriller</span>
                  </li>
                  <li className='opacity'>1.4 M</li>
                  <li className='opacity'>4 week</li>
                </ol>
              </li>
              <li className='office-color'>
                <ol className='d-flex justify-content-between align-items-center'>

                  <li>
                    <img src={BoxOffice5} alt='' />
                  </li>
                  <li>5</li>
                  <li>
                    <h4> London has fallen
                    </h4>
                    <span>Action, thriller</span>
                  </li>
                  <li className='opacity'>1.5M</li>
                  <li className='opacity'>5 week</li>
                </ol>
              </li>
            </ul>
          </div>
          <div className="col-sm-5 col-xs-12 ">
            <h3>testimonials</h3>
            <div className='testimontal'>
              <Glider


                className="glider-container"
                draggable
                hasDots
                slidesToShow={1}
                slidesToScroll={2}
                scrollToSlide={5}
              >
                <div className='text-center'>
                  <img src={Author} className='' alt='' />
                  <div className="entry-meta">
                    <h4>Shela Mathews</h4>

                  </div>
                  <p>

                    Enthusiastically monetize plug-and-play scenarios through quality manufactured products. Monotonectally streamline standardized portals after proactive innovation. Energistically promote market positioning.

                  </p>
                </div>
                <div className='text-center'>
                  <img src={Author} className='' alt='' />
                  <div className="entry-meta">
                    <h4>Shela Mathews</h4>

                  </div>
                  <p>

                    Enthusiastically monetize plug-and-play scenarios through quality manufactured products. Monotonectally streamline standardized portals after proactive innovation. Energistically promote market positioning.

                  </p>
                </div>
                <div className='text-center'>
                  <img src={Author} className='' alt='' />
                  <div className="entry-meta">
                    <h4>Shela Mathews</h4>

                  </div>
                  <p>

                    Enthusiastically monetize plug-and-play scenarios through quality manufactured products. Monotonectally streamline standardized portals after proactive innovation. Energistically promote market positioning.

                  </p>
                </div>

              </Glider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxOffice