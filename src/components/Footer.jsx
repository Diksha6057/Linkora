
import React from 'react'
import { Heart, Sparkles } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] overflow-hidden">

      {/* Top border */}
      <div className="h-px bg-linear-to-r from-transparent via-white/5 to-transparent"></div>

      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-linear-to-br from-rose-500/10 to-transparent rounded-full blur-3xl"></div>

        <div className="absolute top-20 right-20 w-64 h-64 bg-linear-to-bl from-violet-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Footer content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center space-y-8">

          <a
            href="#"
            className="group flex items-center gap-3 transition-all mb-2 duration-300 hover:scale-105"
          >

            {/* Logo icon */}
            <div className="relative">
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

            {/* Sparkles icon */}
            <Sparkles className="h-4 w-4 text-amber-300 opacity-0 group-hover:opacity-100 transition-all duration-300" />

          </a>
<p className="text-sm text-zinc-500 max-w-md mx-auto leading-relaxed">
  Where genuine connections blossom through real conversations.

  <span className="flex items-center justify-center gap-3 mt-2 text-xs text-zinc-400">
    <span>Video dates</span>
<span className="text-white text-lg font-bold">•</span>
    <span>Voice chats</span>
<span className="text-white text-lg font-bold">•</span>
    <span>Real connections</span>
  </span>
</p>
<div className="flex items-center gap-4"></div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
