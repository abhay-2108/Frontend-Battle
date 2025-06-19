"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface Ripple {
  id: number
  x: number
  y: number
  size: number
}

interface RippleEffectProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export default function RippleEffect({ children, className = "", disabled = false }: RippleEffectProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const createRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return

    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y,
      size,
    }

    setRipples((prev) => [...prev, newRipple])
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setRipples((prev) => prev.slice(1))
    }, 600)

    return () => clearTimeout(timer)
  }, [ripples])

  return (
    <div className={`relative overflow-hidden ${className}`} onMouseDown={createRipple}>
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/20 rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </div>
  )
}
