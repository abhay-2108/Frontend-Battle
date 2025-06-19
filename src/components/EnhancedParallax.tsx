"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface EnhancedParallaxProps {
  children: React.ReactNode
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
  offset?: number
  disabled?: boolean
}

export default function EnhancedParallax({
  children,
  speed = 0.5,
  direction = "up",
  className = "",
  offset = 0,
  disabled = false,
}: EnhancedParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (disabled) return

    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      setScrollY(scrolled)

      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + scrolled
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      // Check if element is in viewport with buffer
      const buffer = windowHeight * 0.1
      const inView = scrolled + windowHeight + buffer > elementTop && scrolled < elementTop + elementHeight + buffer

      setIsVisible(inView)

      if (inView) {
        const elementCenter = elementTop + elementHeight / 2
        const windowCenter = scrolled + windowHeight / 2
        const distance = windowCenter - elementCenter
        const movement = distance * speed + offset

        let transform = ""
        switch (direction) {
          case "up":
            transform = `translateY(${-movement}px)`
            break
          case "down":
            transform = `translateY(${movement}px)`
            break
          case "left":
            transform = `translateX(${-movement}px)`
            break
          case "right":
            transform = `translateX(${movement}px)`
            break
        }

        element.style.transform = transform
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", throttledScroll)
  }, [speed, direction, offset, disabled])

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? "parallax-active" : ""}`}
      style={{
        willChange: disabled ? "auto" : "transform",
        transition: disabled ? "none" : "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  )
}
