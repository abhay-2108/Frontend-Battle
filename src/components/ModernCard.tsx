"use client"

import type React from "react"

import { useState } from "react"
import { Check, MoreHorizontal } from "lucide-react"
import RippleEffect from "./RippleEffect"

interface ModernCardProps {
  title: string
  icon: React.ReactNode
  description?: string
  selected?: boolean
  onSelect?: (selected: boolean) => void
  gradient?: string
  children?: React.ReactNode
}

export default function ModernCard({
  title,
  icon,
  description,
  selected = false,
  onSelect,
  gradient = "from-purple-500 via-blue-500 to-cyan-500",
  children,
}: ModernCardProps) {
  const [isSelected, setIsSelected] = useState(selected)

  const handleSelect = () => {
    const newSelected = !isSelected
    setIsSelected(newSelected)
    onSelect?.(newSelected)
  }

  return (
    <div className="relative group">
      {/* Gradient Border */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-none`}
      ></div>

      {/* Card Content */}
      <RippleEffect className="relative">
        <div className="bg-gray-900/95 dark:bg-black/95 backdrop-blur-xl rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
          <div className="flex items-center justify-between">
            {/* Checkbox and Icon */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleSelect}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                  isSelected ? "bg-blue-500 border-blue-500" : "border-gray-600 hover:border-gray-500"
                }`}
              >
                {isSelected && <Check className="h-3 w-3 text-white" />}
              </button>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center">{icon}</div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                  {description && <p className="text-gray-400 text-sm">{description}</p>}
                </div>
              </div>
            </div>

            {/* Menu Button */}
            <button className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800/50">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>

          {/* Additional Content */}
          {children && <div className="mt-4 pt-4 border-t border-gray-800/50">{children}</div>}
        </div>
      </RippleEffect>
    </div>
  )
}
