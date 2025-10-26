"use client"

import type React from "react"

export default function AsciiArtSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* ASCII Art Content */}
      <div className="self-stretch overflow-hidden flex justify-end items-end bg-[#F7F5F3] border border-b border-l-0 border-r-0 border-t-0">
        <div className="flex-1 flex flex-col justify-end items-center py-4 sm:py-6 md:py-8 lg:py-12">
          {/* Image spanning full width between the border lines - responsive and fluid */}
          <div className="w-full flex justify-center items-end px-0" style={{ backgroundColor: 'transparent' }}>
            <img
              src="/Edited_Ascii.jpg"
              alt="ASCII Art - Mimicry Game Visual"
              className="w-full h-auto object-cover object-bottom transition-all duration-300 ease-in-out mix-blend-multiply opacity-90"
              style={{ 
                backgroundColor: 'transparent',
                maxWidth: '100%',
                display: 'block'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
