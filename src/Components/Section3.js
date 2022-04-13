import React from 'react'
import './Sections.css'
import arrow from '../images/black.png'

export default function Section1() {
  return (
   <section>

       <div className='section-desc-white'>
            <h1>Designed for everyone</h1>

            <p>Photosnap can help you create stories that responate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.</p>

            <a className='get-invite'>View The Stories <img className='arrow' src={arrow} alt="arrow" /></a>
       </div>

       <img className='section-img' src={'https://ice-nas.fra1.digitaloceanspaces.com/development/play/banner3.jpg'} alt="Photographer"/>


   </section>
  )
}
