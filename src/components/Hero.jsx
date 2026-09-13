import React, { useRef } from 'react'

const Hero = () => {
    const containerRef = useRef(null)

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
        >
            {/* Background radial gradients */}
            <div className="absolute inset-0 opacity-30">

                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent">
                </div>

                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-violet-600/10 via-transparent to-transparent">
                </div>

                <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent">
                </div>

            </div>

            {/* Floating glow */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-rose-400/10 to-purple-500/5 rounded-full blur-3xl animate-float-slow">
            </div>

            <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-tr from-violet-500/10 to-pink-500/5 rounded-full blur-3xl animate-float-medium">
            </div>

            {/* Background particles / effects */}
            <div className="absolute inset-0 overflow-hidden">
            </div>

        </section>
    )
}

export default Hero