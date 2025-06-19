"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface Ripple {
  id: number
  x: number
  y: number
  size: number
  color: string
}

interface EnhancedRippleProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  color?: string
  duration?: number
  maxRipples?: number
  size?: "small" | "medium" | "large"
}

export default function EnhancedRipple({
  children,
  className = "",
  disabled = false,
  color = "rgba(255, 255, 255, 0.3)",
  duration = 600,
  maxRipples = 3,
  size = "medium",
}: EnhancedRippleProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const sizeMultipliers = {
    small: 1,
    medium: 1.5,
    large: 2,
  }

  const createRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return

    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    const multiplier = sizeMultipliers[size]
    const rippleSize = Math.max(rect.width, rect.height) * multiplier
    const x = event.clientX - rect.left - rippleSize / 2
    const y = event.clientY - rect.top - rippleSize / 2

    const newRipple: Ripple = {
      id: Date.now() + Math.random(),
      x,
      y,
      size: rippleSize,
      color,
    }

    setRipples((prev) => {
      const updated = [...prev, newRipple]
      // Limit the number of ripples
      return updated.slice(-maxRipples)
    })
  }

  useEffect(() => {
    if (ripples.length === 0) return

    const timer = setTimeout(() => {
      setRipples((prev) => prev.slice(1))
    }, duration)

    return () => clearTimeout(timer)
  }, [ripples, duration])

  // Handle touch events for mobile
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (disabled) return

    const touch = event.touches[0]
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    const multiplier = sizeMultipliers[size]
    const rippleSize = Math.max(rect.width, rect.height) * multiplier
    const x = touch.clientX - rect.left - rippleSize / 2
    const y = touch.clientY - rect.top - rippleSize / 2

    const newRipple: Ripple = {
      id: Date.now() + Math.random(),
      x,
      y,
      size: rippleSize,
      color,
    }

    setRipples((prev) => {
      const updated = [...prev, newRipple]
      return updated.slice(-maxRipples)
    })
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseDown={createRipple}
      onTouchStart={handleTouchStart}
      style={{ isolation: "isolate" }}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none animate-ripple-enhanced"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: ripple.color,
            animationDuration: `${duration}ms`,
          }}
        />
      ))}
    </div>
  )
}
