import React from 'react'
import './Benefits.css'

export default function Benefits() {
  return (
    <section id='benefits'>
        <div className='benefit'>
            <img src={"https://ice-nas.fra1.digitaloceanspaces.com/development/play/responsive.svg"} alt="Responsive" />
            <h2>100% Responsive</h2>
            <p>No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen.</p>
        </div>
        <div className='benefit'>
            <img src={"https://ice-nas.fra1.digitaloceanspaces.com/development/play/infinity.svg"} alt="Responsive" />
            <h2>No Photo Upload Limit</h2>
            <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
        </div>
        <div className='benefit'>
            <img src={"https://ice-nas.fra1.digitaloceanspaces.com/development/play/social.svg"} alt="Responsive" />
            <h2>Available to Embed</h2>
            <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or Youtube videos, Google Maps and more.</p>
        </div>

    </section>
  )
}
