import React from 'react'
import './Header.css'
import Burger from '../images/burger-icon.png'

export default function Header() {
  return (
    <header>
        <img id='logo' src={'https://ice-nas.fra1.digitaloceanspaces.com/development/play/logo.svg'} alt='Photosnap logo'/>

        <nav>
            <a>Stories</a>
            <a>Features</a>
            <a>Pricing</a>
        </nav>

        <button>Get An Invite</button>

        <img id='burger' src={Burger} alt="burger menu"/>

    </header>
  )
}
