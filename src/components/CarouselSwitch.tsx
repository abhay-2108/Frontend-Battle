"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import RippleEffect from "./RippleEffect"

interface CarouselItem {
  id: string
  title: string
  description: string
  image?: string
  gradient: string
  content?: React.ReactNode
}

interface CarouselSwitchProps {
  items: CarouselItem[]
  autoPlay?: boolean
  interval?: number
  showIndicators?: boolean
  showControls?: boolean
  className?: string
}

export default function CarouselSwitch({
  items,
  autoPlay = true,
  interval = 5000,
  showIndicators = true,
  showControls = true,
  className = "",
}: CarouselSwitchProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      handleNext()
    }, interval)

    return () => clearInterval(timer)
  }, [currentIndex, isPlaying, interval])

  const handleNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % items.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const handlePrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const handleIndicatorClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {/* Main Carousel Container */}
      <div className="relative h-96 md:h-[500px]">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100 transform translate-x-0 scale-100"
                : index < currentIndex
                  ? "opacity-0 transform -translate-x-full scale-95"
                  : "opacity-0 transform translate-x-full scale-95"
            }`}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}>
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center p-8">
              <div className="text-center text-white max-w-4xl">
                <h3
                  className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 ${
                    index === currentIndex ? "animate-slide-up" : ""
                  }`}
                  style={{ animationDelay: "0.2s" }}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-xl md:text-2xl mb-8 transition-all duration-700 ${
                    index === currentIndex ? "animate-fade-in" : ""
                  }`}
                  style={{ animationDelay: "0.4s" }}
                >
                  {item.description}
                </p>
                {item.content && (
                  <div
                    className={`transition-all duration-700 ${index === currentIndex ? "animate-fade-in" : ""}`}
                    style={{ animationDelay: "0.6s" }}
                  >
                    {item.content}
                  </div>
                )}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div
                className={`floating-element absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full transition-all duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              ></div>
              <div
                className={`floating-element-delayed absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full transition-all duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              ></div>
              <div
                className={`floating-element absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full transition-all duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {showControls && (
        <>
          <RippleEffect>
            <button
              onClick={handlePrev}
              disabled={isTransitioning}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
          </RippleEffect>

          <RippleEffect>
            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
          </RippleEffect>
        </>
      )}

      {/* Play/Pause Control */}
      <RippleEffect>
        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 group-hover:scale-110 transition-transform" />
          ) : (
            <Play className="h-5 w-5 ml-0.5 group-hover:scale-110 transition-transform" />
          )}
        </button>
      </RippleEffect>

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {items.map((_, index) => (
            <RippleEffect key={index}>
              <button
                onClick={() => handleIndicatorClick(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/70 hover:scale-110"
                } disabled:cursor-not-allowed`}
              />
            </RippleEffect>
          ))}
        </div>
      )}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{
            width: isPlaying ? "100%" : "0%",
            animation: isPlaying ? `progress ${interval}ms linear infinite` : "none",
          }}
        />
      </div>
    </div>
  )
}
