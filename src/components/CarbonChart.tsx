"use client"

import { Download } from "lucide-react"
import { useState, useEffect } from "react"

interface ChartData {
  value: number
  label: string
}

interface CarbonChartProps {
  data: ChartData[]
  title?: string
  subtitle?: string
  target2025?: number
  target2030?: number
}

export default function CarbonChart({
  data,
  title = "Embodied Carbon Emissions",
  subtitle = "Intensity measured by kgCO₂e/m²",
  target2025 = 600,
  target2030 = 500,
}: CarbonChartProps) {
  const [animatedBars, setAnimatedBars] = useState(false)
  const [activeFilters, setActiveFilters] = useState({
    type: "All",
    status: "Complete",
  })

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedBars(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const maxValue = Math.max(...data.map((d) => d.value), target2025, target2030)

  const typeFilters = ["Refurbishment", "New build", "All"]
  const statusFilters = ["Complete", "Estimate"]

  return (
    <div className="carbon-chart bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
            {title.split(" ").map((word, index) => (
              <span key={index} className="block">
                {word}
              </span>
            ))}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group">
          <span className="text-sm text-gray-700 dark:text-gray-300">Download the data</span>
          <Download className="h-4 w-4 text-gray-500 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-col space-y-4">
          <div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Filter by</span>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-4">Type</span>
              {typeFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilters((prev) => ({ ...prev, type: filter }))}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilters.type === filter
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {filter !== "All" && <span className="w-2 h-2 bg-red-500 rounded-full inline-block mr-2"></span>}
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-4">Status</span>
              {statusFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilters((prev) => ({ ...prev, status: filter }))}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilters.status === filter
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Key</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-0.5 border-t-2 border-dashed border-gray-400"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {target2030} kgCO₂e/m² - Embodied Carbon Target 2030
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {target2025} kgCO₂e/m² - Embodied Carbon Target 2025
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-gray-500 dark:text-gray-400 -ml-12">
          <span>1200</span>
          <span>1000</span>
          <span>800</span>
          <span>600</span>
          <span>400</span>
          <span>200</span>
          <span>0</span>
        </div>

        {/* Target lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-full border-t-2 border-dashed border-gray-400"
            style={{ bottom: `${(target2030 / 1200) * 100}%` }}
          ></div>
          <div
            className="absolute w-full border-t border-gray-600"
            style={{ bottom: `${(target2025 / 1200) * 100}%` }}
          ></div>
        </div>

        {/* Chart bars */}
        <div className="flex items-end justify-center space-x-2 h-96 bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div
                className={`w-8 bg-gradient-to-t from-red-400 to-red-600 rounded-t relative transition-all duration-1000 ease-out ${
                  animatedBars ? "" : "h-0"
                }`}
                style={{
                  height: animatedBars ? `${(item.value / maxValue) * 300}px` : "0px",
                  transitionDelay: `${index * 0.05}s`,
                }}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.value} kgCO₂e/m²
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Y-axis label */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 -ml-16">
          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
            Embodied carbon intensity (kgCO₂e/m²)
          </span>
        </div>
      </div>
    </div>
  )
}
