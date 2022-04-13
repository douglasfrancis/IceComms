import React from 'react'
import './Stories.css'
import arrow from '../images/white.png'


export default function Stories() {
  return (
    <section id='stories'>
        <div className='story' id='mountains'>
            <img className='story-img' src={"https://ice-nas.fra1.digitaloceanspaces.com/development/play/mountains.jpg"} />
            <div className='img-desc'>
                <h3>The Mountains</h3>
                <p>by John Appleseed</p>
                <a className='read-story'>
                <h4>Read Story</h4>
                <img className='arrow' src={arrow} alt="Arrow"/>
                </a>
            </div>
        </div>
        <div className='story' id='sunset'>
        <img className='story-img' src={"https://ice-nas.fra1.digitaloceanspaces.com/development/play/cityscape.jpg"} />
        <div className='img-desc'>
                <h3>Sunset Cityscapes</h3>
                <p>by Benjamin Cruz</p>
                <a className='read-story'>
                <h4>Read Story</h4>
                <img className='arrow' src={arrow} alt="Arrow"/>
                </a>
            </div>
        </div>
        <div className='story' id='voyage'>
        <img className='story-img' src={"https://ice-nas.fra1.digitaloceanspaces.com/development/play/hiker.jpg"} />
        <div className='img-desc'>
                <h3>18 Days Voyage</h3>
                <p>by Alexei Borodin</p>
                <a className='read-story'>
                <h4>Read Story</h4>
                <img className='arrow' src={arrow} alt="Arrow"/>
                </a>
            </div>
        </div>
        <div className='story' id='architecture'>
        <img className='story-img' src={"https://ice-nas.fra1.digitaloceanspaces.com/development/play/building.jpg"} />
        <div className='img-desc'>
                <h3>Architecturals</h3>
                <p>by Samantha Brooke</p>
                <a className='read-story'>
                <h4>Read Story</h4>
                <img className='arrow' src={arrow} alt="Arrow"/>
                </a>
            </div>
        </div>

    </section>
  )
}
