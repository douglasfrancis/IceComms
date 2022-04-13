import React from 'react'
import './Sections.css'
import arrow from '../images/black.png'

export default function Section1() {
  return (
   <section>
       <img className='section-img' src={'https://ice-nas.fra1.digitaloceanspaces.com/development/play/banner2.jpg'} alt="Desk"/>

       <div className='section-desc-white'>
            <h1>Beautiful stories every time</h1>

            <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>

            <a className='get-invite'>View The Stories <img className='arrow' src={arrow} alt="arrow" /></a>
       </div>



   </section>
  )
}
