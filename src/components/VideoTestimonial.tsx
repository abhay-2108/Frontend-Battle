"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react"
import RippleEffect from "./RippleEffect"

interface VideoTestimonialProps {
  name: string
  role: string
  company: string
  content: string
  avatar: string
  gradient: string
  duration?: string
  thumbnail?: string
}

export default function VideoTestimonial({
  name,
  role,
  company,
  content,
  avatar,
  gradient,
  duration = "2:34",
  thumbnail,
}: VideoTestimonialProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef<HTMLDivElement>(null)

  // Simulate video progress
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 154) {
            // 2:34 in seconds
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const percentage = clickX / rect.width
    setCurrentTime(Math.floor(percentage * 154))
  }

  return (
    <div className="relative group animate-on-scroll">
      {/* Gradient Border */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-none`}
      ></div>

      {/* Video Container */}
      <RippleEffect className="relative">
        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300">
          {/* Video Player Area */}
          <div
            className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 cursor-pointer"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(isPlaying ? false : true)}
            onClick={handlePlayPause}
          >
            {/* Video Background/Thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50">
              {/* Simulated video content - person speaking */}
              <div className="absolute inset-0 flex items-center justify-center">
                {!isPlaying ? (
                  // Thumbnail state
                  <div className="text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto shadow-2xl`}
                    >
                      {avatar}
                    </div>
                    <div className="text-white text-lg font-semibold">{name}</div>
                    <div className="text-gray-300 text-sm">{role}</div>
                  </div>
                ) : (
                  // Playing state - animated avatar
                  <div className="text-center">
                    <div
                      className={`w-24 h-24 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto shadow-2xl animate-pulse`}
                    >
                      {avatar}
                    </div>
                    <div className="text-white text-lg font-semibold animate-pulse">{name}</div>
                    <div className="text-gray-300 text-sm">Speaking...</div>
                  </div>
                )}
              </div>

              {/* Play/Pause Overlay */}
              {showControls && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300">
                  <RippleEffect>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePlayPause()
                      }}
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-2xl"
                    >
                      {isPlaying ? (
                        <Pause className="h-8 w-8 text-gray-800 ml-0.5" />
                      ) : (
                        <Play className="h-8 w-8 text-gray-800 ml-1" />
                      )}
                    </button>
                  </RippleEffect>
                </div>
              )}

              {/* Duration Badge */}
              <div className="absolute top-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">{duration}</div>
            </div>

            {/* Video Controls */}
            {showControls && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                {/* Progress Bar */}
                <div className="w-full h-1 bg-white/30 rounded-full mb-3 cursor-pointer" onClick={handleSeek}>
                  <div
                    className="h-full bg-white rounded-full transition-all duration-300"
                    style={{ width: `${(currentTime / 154) * 100}%` }}
                  ></div>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePlayPause()
                      }}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsMuted(!isMuted)
                      }}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </button>
                    <span className="text-white text-sm">
                      {formatTime(currentTime)} / {duration}
                    </span>
                  </div>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <Maximize2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Testimonial Content */}
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
              >
                {avatar}
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-900 dark:text-white">{name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{company}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">"{content}"</p>

            {/* Video Indicator */}
            <div className="mt-4 flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Video Testimonial</span>
            </div>
          </div>
        </div>
      </RippleEffect>
    </div>
  )
}
