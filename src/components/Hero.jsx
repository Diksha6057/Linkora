import React, { useRef } from 'react'
import { Video, Phone, MessageCircle, Heart } from 'lucide-react'

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

            {/* Background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-px h-32 bg-linear-to-b from-transparent via-rose-400/20 to-transparent"
                        style={{
                            left: `${10 + i * 12}%`,
                            top: "30%",
                            animation: `float-vertical ${3 + i * 0.5}s ease-in-out infinite ${i * 0.2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Hero content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-20 text-center">

                <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-tight mb-6 leading-[0.9]">

                    <div className="animate-fade-in-up delay-100">
                        <span className="bg-linear-to-r from-white via-rose-50 to-white bg-clip-text text-transparent">
                            Sparks turn
                        </span>
                    </div>

                    <div className="animate-fade-in-up delay-200">
                        <span className="font-serif italic font-light bg-linear-to-r from-rose-300 via-amber-300 to-rose-300 bg-clip-text text-transparent">
                            into stories
                        </span>
                    </div>

                    <div className="animate-fade-in-up delay-300">
                        <span className="bg-linear-to-r from-white via-violet-50 to-white bg-clip-text text-transparent">
                            worth telling
                        </span>
                    </div>

                </h1>

                {/* Description */}
                <div className="relative inline-block max-w-2xl mx-auto mb-12 animate-fade-in-up delay-400">

                    <div className="absolute -inset-1 bg-linear-to-r from-rose-400/20 via-transparent to-violet-400/20 rounded-2xl blur-xl">
                    </div>

                    <p className="relative text-xl md:text-2xl text-zinc-300 leading-relaxed px-6 py-4 backdrop-blur-sm bg-white/5 rounded-2xl">
                        Real connections through{" "}

                        <span className="text-rose-300 font-medium">
                            instant video calls
                        </span>
                        ,{" "}

                        <span className="text-amber-300 font-medium">
                            crystal-clear voice
                        </span>
                        , and{" "}

                        <span className="text-violet-300 font-medium">
                            seamless chat
                        </span>
                        . No waiting, just genuine moments.
                    </p>

                </div>

                {/* Features */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-12 animate-fade-in-up delay-500">

                    {[
                        {
                            icon: <Video className="h-5 w-5" />,
                            label: "HD Video",
                            color: "from-rose-400 to-rose-600",
                        },
                        {
                            icon: <Phone className="h-5 w-5" />,
                            label: "Voice Call",
                            color: "from-amber-400 to-amber-600",
                        },
                        {
                            icon: <MessageCircle className="h-5 w-5" />,
                            label: "Live Chat",
                            color: "from-violet-400 to-violet-600",
                        },
                        {
                            icon: <Heart className="h-5 w-5" />,
                            label: "Smart Match",
                            color: "from-pink-400 to-pink-600",
                        },
                    ].map((feature, idx) => (

                        <div
                            key={idx}
                            className="group relative"
                        >

                            <div className="absolute inset-1 bg-linear-to-r opacity-0 group-hover:opacity-100 blur transition-all duration-500 rounded-xl">
                            </div>

                            <div className="relative flex items-center gap-2 px-4 py-3 rounded-xl glass backdrop-blur-xl group-hover:scale-105 transition-all duration-300">

                                <div className={`p-2 rounded-lg bg-linear-to-br ${feature.color}`}>
                                    {feature.icon}
                                </div>

                                <span className="text-zinc-200 font-medium">
                                    {feature.label}
                                </span>

                            </div>
                            <span className="text-sm font-mediummtext-zinc-200">
                                {feature.label}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Hero