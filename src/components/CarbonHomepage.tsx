"use client"

import { Download, ArrowRight, Filter, BarChart3, TrendingDown, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

interface CarbonHomepageProps {
  onNavigate: (page: string) => void
}

export default function CarbonHomepage({ onNavigate }: CarbonHomepageProps) {
  const [animatedBars, setAnimatedBars] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({
    carbonFootprint: 0,
    energyIntensity: 0,
    energyConsumption: 0,
  })

  useEffect(() => {
    // Animate stats
    const timer1 = setTimeout(() => {
      setAnimatedStats({
        carbonFootprint: 45048,
        energyIntensity: 123,
        energyConsumption: 47790662,
      })
    }, 1000)

    // Animate chart bars
    const timer2 = setTimeout(() => {
      setAnimatedBars(true)
    }, 1500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const statsData = [
    {
      title: "Managed portfolio carbon footprint",
      unit: "tCO₂e",
      current: "45,048",
      change: "16%",
      changeType: "increase",
      fromYear: "from 2019",
      yearlyData: [
        { year: "2022", value: 45048, percentage: 100 },
        { year: "2021", value: 14111, percentage: 31 },
        { year: "2020", value: 32813, percentage: 73 },
        { year: "2019", value: 38673, percentage: 86 },
      ],
    },
    {
      title: "Managed portfolio energy intensity",
      unit: "kWh/m²",
      current: "123",
      change: "22%",
      changeType: "decrease",
      fromYear: "from 2019",
      yearlyData: [
        { year: "2022", value: 123, percentage: 78 },
        { year: "2021", value: 128, percentage: 82 },
        { year: "2020", value: 135, percentage: 86 },
        { year: "2019", value: 157, percentage: 100 },
      ],
    },
    {
      title: "Managed portfolio energy consumption",
      unit: "kWh",
      current: "47,790,662",
      change: "27%",
      changeType: "decrease",
      fromYear: "from 2019",
      yearlyData: [
        { year: "2022", value: 47790662, percentage: 73 },
        { year: "2021", value: 49324077, percentage: 76 },
        { year: "2020", value: 48784205, percentage: 75 },
        { year: "2019", value: 65198706, percentage: 100 },
      ],
    },
  ]

  const chartData = [
    { value: 549, label: "A" },
    { value: 278, label: "B" },
    { value: 875, label: "C" },
    { value: 617, label: "D" },
    { value: 506, label: "E" },
    { value: 36, label: "F" },
    { value: 185, label: "G" },
    { value: 191, label: "H" },
    { value: 122, label: "I" },
    { value: 550, label: "J" },
    { value: 881, label: "K" },
    { value: 539, label: "L" },
    { value: 269, label: "M" },
    { value: 29, label: "N" },
    { value: 82, label: "O" },
    { value: 44, label: "P" },
    { value: 109, label: "Q" },
    { value: 106, label: "R" },
    { value: 607, label: "S" },
    { value: 528, label: "T" },
  ]

  const maxValue = Math.max(...chartData.map((d) => d.value))

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-red-900/20 dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-red-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="floating-element-delayed absolute top-40 right-20 w-24 h-24 bg-orange-200/20 rounded-full blur-lg animate-bounce-slow"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-40 h-40 bg-yellow-200/20 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="floating-element-delayed absolute bottom-20 right-1/3 w-28 h-28 bg-pink-200/20 rounded-full blur-xl animate-spin-slow"></div>
      </div>

      {/* Page Navigation */}
      <div className="absolute top-4 left-4 z-50 flex space-x-2">
        <button
          onClick={() => onNavigate("financial")}
          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-gray-700 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-slide-in-left"
        >
          Financial
        </button>
        <button
          onClick={() => onNavigate("stats")}
          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-gray-700 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-slide-in-left"
          style={{ animationDelay: "0.1s" }}
        >
          Stats
        </button>
        <button
          onClick={() => onNavigate("carbon")}
          className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium animate-slide-in-left shadow-lg"
          style={{ animationDelay: "0.2s" }}
        >
          Carbon
        </button>
        <button
          onClick={() => onNavigate("original")}
          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-gray-700 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-slide-in-left"
          style={{ animationDelay: "0.3s" }}
        >
          Original
        </button>
      </div>

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
              Carbon Tracking
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Monitor and reduce your environmental impact
            </p>
          </div>

          {/* Stats Cards Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-none animate-pulse-slow"></div>

                <div className="relative bg-gray-200 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4 animate-fade-in">
                      {stat.title}
                    </h3>
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white counter animate-counter">
                        {stat.current}
                      </span>
                      <span
                        className="text-sm text-gray-500 dark:text-gray-400 animate-fade-in"
                        style={{ animationDelay: "0.5s" }}
                      >
                        {stat.unit}
                      </span>
                    </div>
                    <div className="flex items-center mb-4 animate-slide-in-right" style={{ animationDelay: "0.7s" }}>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{stat.fromYear}</span>
                      <div
                        className={`flex items-center space-x-1 ml-2 ${
                          stat.changeType === "increase" ? "text-red-600" : "text-green-600"
                        }`}
                      >
                        {stat.changeType === "increase" ? (
                          <TrendingUp className="h-4 w-4 animate-bounce" />
                        ) : (
                          <TrendingDown className="h-4 w-4 animate-bounce" />
                        )}
                        <span className="text-sm font-medium">{stat.change}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {stat.yearlyData.map((yearData, yearIndex) => (
                      <div
                        key={yearIndex}
                        className="space-y-2 animate-slide-in-left"
                        style={{ animationDelay: `${0.8 + yearIndex * 0.1}s` }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{yearData.year}</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white counter">
                            {yearData.value.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-full transition-all duration-1000 ease-out hover:scale-105 transform-gpu"
                            style={{
                              width: animatedBars ? `${yearData.percentage}%` : "0%",
                              transitionDelay: `${1.2 + yearIndex * 0.1}s`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-700 animate-fade-in"
                    style={{ animationDelay: "1.5s" }}
                  >
                    {index === 0 ? (
                      <button className="flex items-center text-gray-600 hover:text-gray-700 transition-all duration-300 hover:scale-105 group">
                        <span className="text-sm font-medium">See full breakdown of carbon footprint</span>
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <button className="flex items-center text-gray-600 hover:text-gray-700 transition-all duration-300 hover:scale-105 group">
                        <span className="text-sm font-medium">Download the data</span>
                        <Download className="h-4 w-4 ml-1 group-hover:translate-y-0.5 transition-transform" />
                      </button>
                    )}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Carbon Chart Section */}
          <div className="relative group animate-fade-in-up" style={{ animationDelay: "1.8s" }}>
            {/* Gradient Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-none"></div>

            <div className="relative bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 leading-tight animate-slide-up">
                    <span className="block">EMBODIED</span>
                    <span className="block" style={{ animationDelay: "0.1s" }}>
                      CARBON
                    </span>
                    <span className="block" style={{ animationDelay: "0.2s" }}>
                      EMISSIONS
                    </span>
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                    Intensity measured by kgCO₂e/m²
                  </p>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 group animate-slide-in-right">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Download the data</span>
                  <Download className="h-4 w-4 text-gray-500 group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* Filters */}
              <div className="mb-8 animate-slide-in-left" style={{ animationDelay: "0.5s" }}>
                <div className="flex flex-col space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Filter className="h-4 w-4 text-gray-600 dark:text-gray-400 animate-pulse" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by</span>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-4">Type</span>
                      <button
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 flex items-center animate-fade-in"
                        style={{ animationDelay: "0.6s" }}
                      >
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                        Refurbishment
                      </button>
                      <button
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 flex items-center animate-fade-in"
                        style={{ animationDelay: "0.7s" }}
                      >
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                        New build
                      </button>
                      <button
                        className="px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform animate-fade-in"
                        style={{ animationDelay: "0.8s" }}
                      >
                        All
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-4">Status</span>
                      <button
                        className="px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform animate-fade-in"
                        style={{ animationDelay: "0.9s" }}
                      >
                        Complete
                      </button>
                      <button
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 animate-fade-in"
                        style={{ animationDelay: "1s" }}
                      >
                        Estimate
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="mb-8 animate-slide-in-right" style={{ animationDelay: "1.1s" }}>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 flex items-center">
                  <BarChart3 className="h-4 w-4 mr-2 animate-pulse" />
                  Key
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: "1.2s" }}>
                    <div className="w-8 h-0.5 border-t-2 border-dashed border-gray-500 animate-pulse"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      500 kgCO₂e/m² - Embodied Carbon Target 2030
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: "1.3s" }}>
                    <div className="w-8 h-0.5 bg-gray-600"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      600 kgCO₂e/m² - Embodied Carbon Target 2025
                    </span>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="relative animate-fade-in" style={{ animationDelay: "1.4s" }}>
                {/* Y-axis labels */}
                <div
                  className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-gray-500 dark:text-gray-400 -ml-12 animate-slide-in-left"
                  style={{ animationDelay: "1.5s" }}
                >
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
                    className="absolute w-full border-t-2 border-dashed border-gray-500 animate-pulse"
                    style={{ bottom: `${(500 / 1200) * 100}%` }}
                  ></div>
                  <div
                    className="absolute w-full border-t border-gray-600 animate-pulse"
                    style={{ bottom: `${(600 / 1200) * 100}%` }}
                  ></div>
                </div>

                {/* Chart bars */}
                <div className="flex items-end justify-center space-x-2 h-96 bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                  {chartData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center group">
                      <div
                        className="w-8 bg-gradient-to-t from-red-400 via-orange-400 to-yellow-400 rounded-t relative transition-all duration-1000 ease-out hover:scale-110 cursor-pointer animate-bar-grow"
                        style={{
                          height: animatedBars ? `${(item.value / maxValue) * 300}px` : "0px",
                          transitionDelay: `${index * 0.05 + 1.6}s`,
                        }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap animate-fade-in">
                          {item.value} kgCO₂e/m²
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Y-axis label */}
                <div
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 -ml-16 animate-slide-in-left"
                  style={{ animationDelay: "2s" }}
                >
                  <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    Embodied carbon intensity (kgCO₂e/m²)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up"
            style={{ animationDelay: "2.2s" }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 animate-bounce-subtle">
              <div className="text-3xl font-bold text-red-600 mb-2 counter">
                {(animatedStats.carbonFootprint / 1000).toFixed(1)}K
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Emissions</div>
            </div>
            <div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 animate-bounce-subtle"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-3xl font-bold text-orange-600 mb-2 counter">{animatedStats.energyIntensity}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg Intensity</div>
            </div>
            <div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 animate-bounce-subtle"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-3xl font-bold text-yellow-600 mb-2 counter">
                {(animatedStats.energyConsumption / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Energy Used</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
