"use client"

import { TrendingUp, TrendingDown, BarChart3, PieChart, Activity } from "lucide-react"
import { useState, useEffect } from "react"

interface DashboardPreviewProps {
  type?: "financial" | "analytics" | "carbon"
}

export default function DashboardPreview({ type = "analytics" }: DashboardPreviewProps) {
  const [animatedCharts, setAnimatedCharts] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedCharts(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const dashboardConfigs = {
    financial: {
      title: "Financial Overview",
      icon: <PieChart className="h-5 w-5 text-blue-600" />,
      metrics: [
        { label: "Revenue", value: "$2.4M", trend: "up", color: "blue" },
        { label: "Profit", value: "$480K", trend: "up", color: "green" },
      ],
      chartColor: "blue",
    },
    analytics: {
      title: "Analytics Dashboard",
      icon: <BarChart3 className="h-5 w-5 text-purple-600" />,
      metrics: [
        { label: "Users", value: "12.5K", trend: "up", color: "purple" },
        { label: "Growth", value: "+23%", trend: "up", color: "green" },
      ],
      chartColor: "purple",
    },
    carbon: {
      title: "Carbon Tracking",
      icon: <Activity className="h-5 w-5 text-green-600" />,
      metrics: [
        { label: "Emissions", value: "45K tCO₂e", trend: "down", color: "red" },
        { label: "Reduction", value: "-15%", trend: "down", color: "green" },
      ],
      chartColor: "green",
    },
  }

  const config = dashboardConfigs[type]

  return (
    <div className="dashboard-preview bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-3xl transition-all duration-500">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          {config.icon}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{config.title}</h3>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {config.metrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-${metric.color}-50 dark:bg-${metric.color}-900/20 rounded-lg p-4 transform transition-all duration-500`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-between mb-1">
                <div className={`text-2xl font-bold text-${metric.color}-600`}>{metric.value}</div>
                {metric.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-green-500" />
                )}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="h-32 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-end justify-center p-4">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className={`w-4 mx-1 rounded-t transition-all duration-1000 ease-out ${
                config.chartColor === "blue"
                  ? "bg-blue-400"
                  : config.chartColor === "purple"
                    ? "bg-purple-400"
                    : "bg-green-400"
              } ${animatedCharts ? "" : "h-0"}`}
              style={{
                height: animatedCharts ? `${Math.random() * 80 + 20}px` : "0px",
                transitionDelay: `${i * 0.1 + 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Last updated: 2 min ago</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-600 font-medium">Live</span>
          </div>
        </div>
      </div>
    </div>
  )
}
