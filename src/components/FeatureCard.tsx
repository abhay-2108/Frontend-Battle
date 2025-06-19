"use client"

import type React from "react"
import RippleEffect from "./RippleEffect"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  gradient?: string
  delay?: number
}

export default function FeatureCard({
  icon,
  title,
  description,
  gradient = "from-purple-500 via-blue-500 to-cyan-500",
  delay = 0,
}: FeatureCardProps) {
  return (
    <div className="relative group animate-on-scroll">
      {/* Gradient Border */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-none`}
      ></div>

      {/* Card Content */}
      <RippleEffect className="relative">
        <div className="bg-white dark:bg-gray-800 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 h-full">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <div className="text-white">{icon}</div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
            {description}
          </p>

          <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${gradient} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}
              ></div>
            </div>
          </div>
        </div>
      </RippleEffect>
    </div>
  )
}
