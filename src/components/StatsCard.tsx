"use client"

import { ArrowRight, Download, TrendingUp, TrendingDown } from "lucide-react"
import { useState, useEffect } from "react"
import RippleEffect from "./RippleEffect"

interface YearData {
  year: string
  value: number
  percentage: number
}

interface StatsCardProps {
  title: string
  unit: string
  current: string
  change: string
  changeType: "increase" | "decrease"
  fromYear: string
  yearlyData: YearData[]
  gradient?: string
}

export default function StatsCard({
  title,
  unit,
  current,
  change,
  changeType,
  fromYear,
  yearlyData,
  gradient = "from-purple-500 via-blue-500 to-cyan-500",
}: StatsCardProps) {
  const [animatedBars, setAnimatedBars] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedBars(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative group">
      {/* Gradient Border */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-none`}
      ></div>

      {/* Card Content */}
      <RippleEffect className="relative">
        <div className="bg-gray-900/95 dark:bg-black/95 backdrop-blur-xl rounded-2xl p-8 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 h-full">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-300 mb-4">{title}</h3>
            <div className="flex items-baseline space-x-2 mb-2">
              <span className="text-4xl font-bold text-white counter">{current}</span>
              <span className="text-sm text-gray-400">{unit}</span>
            </div>
            <div className="flex items-center">
              <div
                className={`flex items-center space-x-1 ${changeType === "increase" ? "text-red-400" : "text-green-400"}`}
              >
                {changeType === "increase" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                <span className="text-sm font-medium">{change}</span>
              </div>
              <span className="text-sm text-gray-500 ml-2">{fromYear}</span>
            </div>
          </div>

          <div className="space-y-4">
            {yearlyData.map((yearData, yearIndex) => (
              <div key={yearIndex} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400">{yearData.year}</span>
                  <span className="text-sm font-medium text-white">{yearData.value.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: animatedBars ? `${yearData.percentage}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-800/50 flex items-center justify-between">
            <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
              <span className="text-sm font-medium">See full breakdown</span>
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-4">
            <button className="flex items-center text-gray-400 hover:text-gray-300 transition-colors group">
              <span className="text-sm font-medium">Download data</span>
              <Download className="h-4 w-4 ml-1 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </RippleEffect>
    </div>
  )
}
