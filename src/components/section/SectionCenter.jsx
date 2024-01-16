import React from 'react'
import "../css/SectionCenter.css"
import SectionSlider from './SectionSlider'
function SectionCenter() {
  return (
    <div>
      <div className="SectionCenter mt-5 mb-5">
        <div className="row">
          <div className="col-sm-12">
            <h3 className='text-center'>NOW PLAYING</h3>
          </div>
        </div>
      </div>
      <SectionSlider />
    </div>
  )
}

export default SectionCenter