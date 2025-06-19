"use client"

import { ArrowRight, Download, TrendingUp, TrendingDown } from "lucide-react"
import { useState, useEffect } from "react"

interface StatsHomepageProps {
  onNavigate: (page: string) => void
}

export default function StatsHomepage({ onNavigate }: StatsHomepageProps) {
  const [animatedStats, setAnimatedStats] = useState({
    carbonFootprint: 0,
    energyIntensity: 0,
    energyConsumption: 0,
  })

  const [progressBars, setProgressBars] = useState(false)

  useEffect(() => {
    // Animate main stats
    const timer1 = setTimeout(() => {
      setAnimatedStats({
        carbonFootprint: 45048,
        energyIntensity: 123,
        energyConsumption: 47790662,
      })
    }, 1000)

    // Animate progress bars
    const timer2 = setTimeout(() => {
      setProgressBars(true)
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
      gradient: "from-red-500 via-pink-500 to-purple-500",
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
      gradient: "from-green-500 via-emerald-500 to-teal-500",
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
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="floating-element-delayed absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-lg animate-bounce-slow"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-40 h-40 bg-green-200/20 rounded-full blur-2xl animate-pulse-slow"></div>
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
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium animate-slide-in-left shadow-lg"
          style={{ animationDelay: "0.1s" }}
        >
          Stats
        </button>
        <button
          onClick={() => onNavigate("carbon")}
          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-gray-700 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-slide-in-left"
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
              Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Real-time insights into your sustainability metrics
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient Border */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-none animate-pulse-slow`}
                ></div>

                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
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
                    <div className="flex items-center animate-slide-in-right" style={{ animationDelay: "0.7s" }}>
                      <div
                        className={`flex items-center space-x-1 ${
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
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">{stat.fromYear}</span>
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
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-1000 ease-out hover:scale-105 transform-gpu`}
                            style={{
                              width: progressBars ? `${yearData.percentage}%` : "0%",
                              transitionDelay: `${1.2 + yearIndex * 0.1}s`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between animate-fade-in"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <button className="flex items-center text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-105 group">
                      <span className="text-sm font-medium">See full breakdown</span>
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="mt-4 animate-fade-in" style={{ animationDelay: "1.6s" }}>
                    <button className="flex items-center text-gray-600 hover:text-gray-700 transition-all duration-300 hover:scale-105 group">
                      <span className="text-sm font-medium">Download data</span>
                      <Download className="h-4 w-4 ml-1 group-hover:translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Stats Section */}
          <div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up"
            style={{ animationDelay: "1.8s" }}
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 animate-bounce-subtle">
              <div className="text-3xl font-bold text-blue-600 mb-2 counter">
                {(animatedStats.carbonFootprint / 1000).toFixed(1)}K
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Carbon Tracked</div>
            </div>
            <div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 animate-bounce-subtle"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2 counter">{animatedStats.energyIntensity}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Energy Efficiency</div>
            </div>
            <div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 animate-bounce-subtle"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-3xl font-bold text-purple-600 mb-2 counter">
                {(animatedStats.energyConsumption / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Energy Consumed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
