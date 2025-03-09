import { useState } from 'react'
import {motion} from 'framer-motion'
import React from 'react'
import images from './Images'

function Header() {
  const [links, setLinks] = useState(false)
  const [initial_menu, SetInitial_menu] = useState({})
  const [animate_menu, SetAnimate_menu] = useState({})
  const handle = ()=> {
    setLinks(!links)
    SetInitial_menu({scale:1.5})
    SetAnimate_menu({scale:1})
  }
  return (
    <header>
      <div className='hero'>
   <img src={images.logo} alt="" /> 
   <img onClick={handle} className='menu' src={images.menu} alt=""/>
      </div>
      <motion.div
      className={links ? 'links' : 'off'}
      initial={{scale: 4}}
      animate={{scale: 1}}
      >
   <ul>
    <li>Features</li>
    <li>Pricing</li>
    <li>Resources</li>
   </ul>
    <nav>
    <button>Login</button>
    <a id='sign-up' href="#">Sign Up</a>
    </nav>
      </motion.div>
    </header>
  )
}

export default Header