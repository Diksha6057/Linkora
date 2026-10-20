
import { Heart } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Top border */}
      <div className="h-px bg-linear-to-r from-transparent via-white/5 to-transparent"></div>

      {/* Background effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-linear-to-br from-rose-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-linear-to-bl from-violet-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 mb-2">

          {/* Logo icon */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-rose-500/20 to-violet-500/20 rounded-xl blur-md group-hover:blur-xl transition-all duration-500"></div>

            <div className="relative w-10 h-10 rounded-xl bg-linear-to-br from-rose-500 to-amber-500 flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
          </div>

          {/* Brand name */}
          <span className="text-2xl font-bold tracking-tight">
            <span className="bg-linear-to-r from-white to-zinc-200 bg-clip-text text-transparent">
              Linkora
            </span>

            <span className="ml-2 font-serif italic bg-linear-to-r from-rose-300 to-amber-300 bg-clip-text text-transparent">
              Connect
            </span>
          </span>

        </div>
      </div>
    </footer>
  )
}

export default Footer
