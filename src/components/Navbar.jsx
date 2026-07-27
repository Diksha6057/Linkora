import React from 'react'
import { Heart } from 'lucide-react';
const Navbar = () => {
  return (
   <nav className="fixed top-0 left-0 right-0 z-50 glass bg-[#0a0a0a0]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <a href="/" className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                    <div className="absolute inset-0 bg-linear-to-br from-rose-500/20 to-amber-500/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-500"></div>
                    <div className="relative w-10 h-10 rounded-xl bg-linear-to-br from-rose-500 to-amber-500 flex items-center justify-center shadow-lg">
                        <Heart className="w-5 h-5 text-white fill-white" /></div></div>
                        <span className="text-2xl font-bold tracking-tight">
                            <span className="bg-linear-to-r from-white to-zinc-200 bg-clip-text text-transparent">
                                MY</span>
                               <span className="font-serif italic bg-linear-to-r from-red-300 via-amber-300 to-rose-300 bg-clip-text text-transparent">
    Type
</span>
                                </span></a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar