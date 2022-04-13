import React from 'react'
import './Footer.css'
import arrow from '../images/white.png'

export default function Footer() {
  return (
    <footer>

        <img id='logo-white' src={"https://ice-nas.fra1.digitaloceanspaces.com/development/play/logo-white.svg"} alt="White logo" />

        <nav>
            <a>Home</a>
            <a>Stories</a>
            <a>Features</a>
            <a>Pricing</a>
        </nav>

       <button>Get an Invite <img className='arrow' src={arrow} alt="arrow"/></button>

    </footer>
  )
}
