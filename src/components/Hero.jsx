import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate=useNavigate();
    const [pulse,setPulse]=useState(false);
    const containerRef=useRef(null);
  return (
  <section ref={containerRef} className='relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]'>
    <div className='absolute inset-0 opacity-30'>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-linear(ellipse_at_top,var(--tw-linear-stops))] from-rose-500/10 via-transparent to-transparent">
        </div>
         <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-linear(ellipse_at_bottom-right,var(--tw-linear-stops))] from-violet-600/10 via-transparent to-transparent">
        </div>
         <div className="absolute top-1/2 left-1/3 w-150 h-150 bg-[radial-linear(circle),var(--tw-linear-stops))] from-amber-500/10 via-transparent to-transparent">
        </div>
    </div>
  </section>
  )
}

export default Hero