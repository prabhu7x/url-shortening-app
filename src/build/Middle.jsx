import React from 'react'
import images from './Images'
import {motion} from 'framer-motion'

function Middle() {
  return (
    <section>
      <motion.img 
      initial={{x: '-100vw'}}
      animate={{x: 0}}
       src={images.illustration_working} alt="" />
      <h1>More than just shorter links</h1>
      <p>Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
  <button>Get Started</button>
    </section>
  );
}

export default Middle