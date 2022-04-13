import React from 'react'
import './Sections.css'
import arrow from '../images/white.png'

export default function Section1() {
  return (
   <section>

       <div className='section-desc-black'>
            <h1>Create and share your photo stories.</h1>

            <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>

            <a className='get-invite'>Get an Invite <img className='arrow' src={arrow} alt="arrow" /></a>
       </div>

       <img className='section-img' src={'https://ice-nas.fra1.digitaloceanspaces.com/development/play/banner1.jpg'} alt="Hiker"/>


   </section>
  )
}
