"use client"

import { useState, useEffect } from "react"
import { Star, ArrowRight, MessageCircle, Download, Share2, MoreHorizontal } from "lucide-react"

interface FinancialHomepageProps {
  onNavigate: (page: string) => void
}

export default function FinancialHomepage({ onNavigate }: FinancialHomepageProps) {
  const [showShareModal, setShowShareModal] = useState(false)
  const [showChatModal, setShowChatModal] = useState(false)
  const [animatedValues, setAnimatedValues] = useState({
    insurance: 0,
    wages: 0,
    rent: 0,
    legal: 0,
    other: 0,
    totalIncome: 0,
  })

  // Animate values on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        insurance: 12500,
        wages: 28100,
        rent: 8300,
        legal: 4200,
        other: 3100,
        totalIncome: 4200,
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const ratings = [
    { platform: "Capterra", rating: "4.8", icon: "🚀" },
    { platform: "G2", rating: "4.8", icon: "⭐" },
    { platform: "Xero", rating: "350+", type: "reviews", icon: "📊" },
    { platform: "QuickBooks", rating: "550+", type: "reviews", icon: "📚" },
  ]

  const shareOptions = [
    { name: "PDF", icon: "📄", color: "bg-red-500" },
    { name: "WhatsApp", icon: "💬", color: "bg-green-500" },
    { name: "Word", icon: "📝", color: "bg-blue-500" },
    { name: "Slack", icon: "💼", color: "bg-purple-500" },
    { name: "Excel", icon: "📊", color: "bg-green-600" },
    { name: "Teams", icon: "👥", color: "bg-blue-600" },
    { name: "Email", icon: "✉️", color: "bg-gray-500" },
    { name: "Shared URL", icon: "🔗", color: "bg-orange-500" },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.2),transparent_50%)]"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="floating-element-delayed absolute top-40 right-20 w-24 h-24 bg-blue-300/10 rounded-full blur-lg animate-bounce-slow"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-40 h-40 bg-purple-400/5 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="floating-element-delayed absolute bottom-20 right-1/3 w-28 h-28 bg-pink-300/10 rounded-full blur-xl animate-spin-slow"></div>
      </div>

      {/* Page Navigation */}
      <div className="absolute top-4 left-4 z-50 flex space-x-2">
        <button
          onClick={() => onNavigate("financial")}
          className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium border-2 border-white/30 animate-slide-in-left"
        >
          Financial
        </button>
        <button
          onClick={() => onNavigate("stats")}
          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white/80 hover:bg-white/20 transition-colors animate-slide-in-left"
          style={{ animationDelay: "0.1s" }}
        >
          Stats
        </button>
        <button
          onClick={() => onNavigate("carbon")}
          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white/80 hover:bg-white/20 transition-colors animate-slide-in-left"
          style={{ animationDelay: "0.2s" }}
        >
          Carbon
        </button>
        <button
          onClick={() => onNavigate("original")}
          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white/80 hover:bg-white/20 transition-colors animate-slide-in-left"
          style={{ animationDelay: "0.3s" }}
        >
          Original
        </button>
      </div>

      {/* Rating Badges */}
      <div className="relative z-40 px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {ratings.map((rating, index) => (
              <div
                key={index}
                className="rating-badge flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white animate-fade-in-up hover:scale-105 transition-transform cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Star className="h-4 w-4 fill-current text-yellow-400 animate-pulse" />
                <span className="text-sm font-medium">
                  {rating.rating} {rating.type || "rating"} on
                </span>
                <span className="font-semibold">{rating.platform}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating UI Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Expenses Dashboard */}
        <div className="floating-card absolute top-32 left-8 md:left-16 w-80 bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 pointer-events-auto animate-slide-in-left hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold animate-fade-in">Expenses</h3>
            <span className="text-white/60 text-sm animate-counter">$56.2K</span>
          </div>
          <div className="space-y-3">
            <div
              className="flex items-center justify-between animate-slide-in-right"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-sm">Insurance</span>
              </div>
              <span className="text-white text-sm counter">${(animatedValues.insurance / 1000).toFixed(1)}K</span>
            </div>
            <div
              className="flex items-center justify-between animate-slide-in-right"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-sm">Wages</span>
              </div>
              <span className="text-white text-sm counter">${(animatedValues.wages / 1000).toFixed(1)}K</span>
            </div>
            <div
              className="flex items-center justify-between animate-slide-in-right"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-sm">Rent</span>
              </div>
              <span className="text-white text-sm counter">${(animatedValues.rent / 1000).toFixed(1)}K</span>
            </div>
            <div
              className="flex items-center justify-between animate-slide-in-right"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-sm">Legal Expenses</span>
              </div>
              <span className="text-white text-sm counter">${(animatedValues.legal / 1000).toFixed(1)}K</span>
            </div>
            <div
              className="flex items-center justify-between animate-slide-in-right"
              style={{ animationDelay: "0.9s" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-sm">Other</span>
              </div>
              <span className="text-white text-sm counter">${(animatedValues.other / 1000).toFixed(1)}K</span>
            </div>
          </div>
          <div
            className="mt-4 h-32 bg-gray-700/50 rounded-lg flex items-end justify-center p-4 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-16 h-16 bg-gradient-to-t from-gray-600 to-gray-500 rounded-full animate-bounce-slow"></div>
          </div>
        </div>

        {/* Total Income Dashboard */}
        <div className="floating-card absolute top-32 right-8 md:right-16 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 pointer-events-auto animate-slide-in-right hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900 animate-fade-in">Total income</h4>
            <span className="text-sm text-gray-500 animate-counter">${animatedValues.totalIncome / 1000}K</span>
          </div>
          <div className="h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-end justify-center p-4">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className={`w-2 mx-1 rounded-t ${
                  i % 3 === 0 ? "bg-blue-400 h-16" : i % 2 === 0 ? "bg-purple-400 h-12" : "bg-gray-300 h-8"
                } animate-bar-grow hover:scale-110 transition-transform cursor-pointer`}
                style={{ animationDelay: `${i * 0.1 + 1.2}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Chat Modal */}
        {showChatModal && (
          <div className="floating-card absolute top-64 right-8 md:right-32 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 pointer-events-auto animate-scale-in">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse">
                M
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 animate-fade-in">Mark Bosman</h4>
                <p className="text-xs text-gray-500 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  a few seconds ago
                </p>
              </div>
              <button className="ml-auto hover:scale-110 transition-transform">
                <MoreHorizontal className="h-4 w-4 text-gray-400" />
              </button>
            </div>
            <p className="text-gray-700 text-sm mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              @Megan let's talk about a strategy to improve these metrics.
            </p>
            <div className="flex items-center justify-between animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <button className="p-2 bg-gray-100 rounded-full hover:scale-110 transition-transform">
                <MessageCircle className="h-4 w-4 text-gray-600" />
              </button>
              <button className="text-blue-600 font-medium text-sm hover:scale-105 transition-transform">Reply</button>
            </div>
          </div>
        )}

        {/* Share Modal */}
        {showShareModal && (
          <div className="floating-card absolute bottom-32 right-8 md:right-24 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 pointer-events-auto animate-scale-in">
            <div className="flex items-center space-x-2 mb-4">
              <Download className="h-5 w-5 text-gray-600 animate-bounce" />
              <h3 className="font-semibold text-gray-900 animate-fade-in">Send to</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {shareOptions.map((option, index) => (
                <button
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-8 h-8 ${option.color} rounded-lg flex items-center justify-center text-white text-sm hover:rotate-12 transition-transform`}
                  >
                    {option.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{option.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Floating Red Circle */}
        <div className="floating-shape absolute bottom-16 right-16 w-24 h-24 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-80 animate-pulse-slow hover:scale-110 transition-transform cursor-pointer"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="block animate-slide-up">Create reports,</span>
            <span className="block animate-slide-up" style={{ animationDelay: "0.2s" }}>
              forecasts,
            </span>
            <span className="block animate-slide-up" style={{ animationDelay: "0.4s" }}>
              dashboards &
            </span>
            <span className="block animate-slide-up" style={{ animationDelay: "0.6s" }}>
              consolidations
            </span>
          </h1>

          <div
            className="flex items-center justify-center space-x-2 mb-8 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-spin-slow">
              <span className="text-white text-xs">✨</span>
            </div>
            <span className="text-xl md:text-2xl text-white font-medium">Now with AI-insights</span>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <button className="cta-button bg-white/90 hover:bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm animate-bounce-subtle">
              Start 14-day free trial
              <ArrowRight className="inline-block ml-2 h-5 w-5 animate-pulse" />
            </button>
            <button className="text-white hover:text-white/80 transition-colors underline underline-offset-4 hover:scale-105 transform duration-300">
              📅 See what we do
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 space-y-4">
        <button
          onClick={() => setShowShareModal(!showShareModal)}
          className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-300 hover:scale-110 animate-bounce-subtle"
        >
          <Share2 className="h-5 w-5" />
        </button>
        <button
          onClick={() => setShowChatModal(!showChatModal)}
          className="w-12 h-12 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <MessageCircle className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
