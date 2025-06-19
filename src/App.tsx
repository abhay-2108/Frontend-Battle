"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  Leaf,
  ArrowRight,
  Star,
  Play,
  Users,
  Shield,
  Zap,
  Globe,
  Award,
  PieChart,
  LineChart,
  Activity,
  Sparkles,
  Target,
  Database,
  Brain,
  Recycle,
  Cloud,
  Building,
  Factory,
} from "lucide-react"
import FinancialHomepage from "./components/FinancialHomepage"
import StatsHomepage from "./components/StatsHomepage"
import CarbonHomepage from "./components/CarbonHomepage"
import StatsCard from "./components/StatsCard"
import CarbonChart from "./components/CarbonChart"
import DashboardPreview from "./components/DashboardPreview"
import FeatureCard from "./components/FeatureCard"
import ModernCard from "./components/ModernCard"
import "./App.css"
import CarouselSwitch from "./components/CarouselSwitch"
import EnhancedParallax from "./components/EnhancedParallax"
import EnhancedRipple from "./components/EnhancedRipple"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDashboardOpen, setIsDashboardOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [currentHomepage, setCurrentHomepage] = useState("original")
  const [isLoading, setIsLoading] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    emissions: 0,
    savings: 0,
    projects: 0,
  })

  // All useEffect hooks must be called before any early returns
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setDarkMode(savedTheme === "dark")
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches)
    }

    // Animate stats on load
    const timer = setTimeout(() => {
      setAnimatedStats({
        users: 15000,
        emissions: 45048,
        savings: 3200000,
        projects: 850,
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [currentHomepage])

  // Define all constants and functions after hooks
  const dashboardOptions = [
    {
      id: "financial",
      name: "Financial Dashboard",
      icon: <PieChart className="h-4 w-4" />,
      description: "Revenue & expense tracking",
      color: "blue",
    },
    {
      id: "stats",
      name: "Analytics Dashboard",
      icon: <LineChart className="h-4 w-4" />,
      description: "Performance metrics",
      color: "purple",
    },
    {
      id: "carbon",
      name: "Carbon Dashboard",
      icon: <Activity className="h-4 w-4" />,
      description: "Emissions monitoring",
      color: "green",
    },
  ]

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Insights",
      description:
        "Advanced machine learning algorithms provide predictive analytics and automated recommendations for carbon reduction.",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description:
        "Bank-level encryption, SOC 2 compliance, and advanced security protocols protect your sensitive environmental data.",
      gradient: "from-green-500 via-teal-500 to-blue-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-Time Processing",
      description:
        "Process millions of data points in seconds with our high-performance analytics engine and live dashboards.",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Goal Tracking",
      description:
        "Set and monitor sustainability targets with automated progress tracking and milestone notifications.",
      gradient: "from-purple-500 via-pink-500 to-red-500",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Integration",
      description:
        "Seamlessly connect with 100+ data sources including IoT sensors, ERP systems, and third-party APIs.",
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Circular Economy",
      description:
        "Track material flows, waste reduction, and circular economy metrics to optimize resource utilization.",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Chief Sustainability Officer",
      company: "GreenTech Industries",
      content:
        "EcoMetrics transformed our carbon tracking completely. We achieved a 40% reduction in emissions within 6 months and saved over $2M in operational costs.",
      rating: 5,
      avatar: "SJ",
      gradient: "from-green-400 via-emerald-500 to-teal-600",
    },
    {
      name: "Michael Chen",
      role: "CFO",
      company: "Sustainable Solutions Inc.",
      content:
        "The financial insights are incredible. The platform pays for itself through the cost savings it identifies. ROI was achieved in just 3 months.",
      rating: 5,
      avatar: "MC",
      gradient: "from-blue-400 via-purple-500 to-pink-600",
    },
    {
      name: "Emma Rodriguez",
      role: "Operations Director",
      company: "EcoBuilders Ltd.",
      content:
        "User-friendly interface with enterprise-grade capabilities. Our entire team was productive within days, not weeks.",
      rating: 5,
      avatar: "ER",
      gradient: "from-purple-400 via-pink-500 to-red-600",
    },
    {
      name: "David Thompson",
      role: "Head of Sustainability",
      company: "EcoTech Solutions",
      content:
        "EcoMetrics has revolutionized how we approach sustainability reporting. The AI-powered insights helped us identify cost-saving opportunities we never knew existed.",
      rating: 5,
      avatar: "DT",
      gradient: "from-orange-400 via-red-500 to-pink-600",
    },
    {
      name: "Lisa Park",
      role: "Environmental Manager",
      company: "CleanEnergy Corp",
      content:
        "The real-time monitoring capabilities are outstanding. We can now track our carbon footprint across all facilities and make immediate adjustments when needed.",
      rating: 5,
      avatar: "LP",
      gradient: "from-teal-400 via-cyan-500 to-blue-600",
    },
    {
      name: "Robert Kim",
      role: "VP of Operations",
      company: "Sustainable Manufacturing",
      content:
        "Implementation was seamless and the support team is exceptional. We're now ahead of our sustainability goals by 18 months thanks to EcoMetrics.",
      rating: 5,
      avatar: "RK",
      gradient: "from-indigo-400 via-purple-500 to-pink-600",
    },
  ]

  const statsData = [
    {
      title: "Managed portfolio carbon footprint",
      unit: "tCO₂e",
      current: "45,048",
      change: "16%",
      changeType: "increase" as const,
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
      changeType: "decrease" as const,
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
      changeType: "decrease" as const,
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

  const brandKits = [
    {
      name: "EcoCorp",
      icon: <Cloud className="h-6 w-6 text-green-400" />,
      description: "Sustainable energy solutions",
      selected: false,
    },
    {
      name: "GreenTech",
      icon: <Building className="h-6 w-6 text-blue-400" />,
      description: "Smart building management",
      selected: true,
    },
    {
      name: "CleanFactory",
      icon: <Factory className="h-6 w-6 text-purple-400" />,
      description: "Industrial carbon tracking",
      selected: false,
    },
  ]

  const carouselItems = [
    {
      id: "sustainability",
      title: "Sustainability First",
      description: "Leading the future of environmental intelligence with cutting-edge analytics",
      gradient: "from-green-500 via-emerald-600 to-teal-700",
      content: (
        <div className="flex space-x-4">
          <button className="btn-primary">Explore Solutions</button>
          <button className="btn-secondary">Watch Demo</button>
        </div>
      ),
    },
    {
      id: "analytics",
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with machine learning algorithms",
      gradient: "from-blue-500 via-purple-600 to-indigo-700",
      content: (
        <div className="flex space-x-4">
          <button className="btn-primary">Start Free Trial</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      ),
    },
    {
      id: "impact",
      title: "Measurable Impact",
      description: "Track, measure, and optimize your environmental footprint in real-time",
      gradient: "from-orange-500 via-red-600 to-pink-700",
      content: (
        <div className="flex space-x-4">
          <button className="btn-primary">See Results</button>
          <button className="btn-secondary">Case Studies</button>
        </div>
      ),
    },
  ]

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 2000)
  }

  const scrollToSection = (sectionId: string) => {
    setIsLoading(true)
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setActiveSection(sectionId)
        setIsMenuOpen(false)
        setIsDashboardOpen(false)
      }
      setIsLoading(false)
    }, 300)
  }

  const handleNavigate = (page: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setCurrentHomepage(page)
      setIsDashboardOpen(false)
      setIsLoading(false)
    }, 500)
  }

  const handleStartTrial = () => {
    setIsLoading(true)
    setTimeout(() => {
      alert("🎉 Welcome to your 14-day free trial! Check your email for setup instructions.")
      setIsLoading(false)
    }, 1500)
  }

  const handleWatchDemo = () => {
    setIsLoading(true)
    setTimeout(() => {
      alert("🎬 Demo video would open here. This showcases our platform capabilities.")
      setIsLoading(false)
    }, 1000)
  }

  // Now handle different homepage types after all hooks are called
  if (currentHomepage === "financial") {
    return <FinancialHomepage onNavigate={handleNavigate} />
  }

  if (currentHomepage === "stats") {
    return <StatsHomepage onNavigate={handleNavigate} />
  }

  if (currentHomepage === "carbon") {
    return <CarbonHomepage onNavigate={handleNavigate} />
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-all duration-500">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="loading-spinner"></div>
        </div>
      )}

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in-right">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-4 w-4" />
            <span>Theme switched successfully!</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-40 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <EnhancedRipple>
              <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection("home")}>
                <div className="relative">
                  <Leaf className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-green-600/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent group-hover:from-green-500 group-hover:to-blue-500 transition-all">
                  EcoMetrics
                </span>
              </div>
            </EnhancedRipple>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <EnhancedRipple>
                <button
                  onClick={() => scrollToSection("home")}
                  className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                >
                  Home
                </button>
              </EnhancedRipple>

              {/* Dashboard Dropdown */}
              <div className="relative">
                <EnhancedRipple>
                  <button
                    onClick={() => setIsDashboardOpen(!isDashboardOpen)}
                    className="nav-link flex items-center space-x-1"
                  >
                    <span>Dashboards</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${isDashboardOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </EnhancedRipple>

                {isDashboardOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 animate-dropdown">
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Choose Dashboard</h3>
                      <div className="space-y-2">
                        {dashboardOptions.map((option) => (
                          <EnhancedRipple key={option.id}>
                            <button
                              onClick={() => handleNavigate(option.id)}
                              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                            >
                              <div className={`text-${option.color}-600 group-hover:scale-110 transition-transform`}>
                                {option.icon}
                              </div>
                              <div className="flex-1 text-left">
                                <div className="font-medium text-gray-900 dark:text-white">{option.name}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{option.description}</div>
                              </div>
                              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                            </button>
                          </EnhancedRipple>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <EnhancedRipple>
                <button
                  onClick={() => scrollToSection("features")}
                  className={`nav-link ${activeSection === "features" ? "active" : ""}`}
                >
                  Features
                </button>
              </EnhancedRipple>
              <EnhancedRipple>
                <button
                  onClick={() => scrollToSection("analytics")}
                  className={`nav-link ${activeSection === "analytics" ? "active" : ""}`}
                >
                  Analytics
                </button>
              </EnhancedRipple>
              <EnhancedRipple>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className={`nav-link ${activeSection === "testimonials" ? "active" : ""}`}
                >
                  Testimonials
                </button>
              </EnhancedRipple>
              <EnhancedRipple>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                >
                  Contact
                </button>
              </EnhancedRipple>

              <EnhancedRipple>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </EnhancedRipple>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-2">
              <EnhancedRipple>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </EnhancedRipple>
              <EnhancedRipple>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </EnhancedRipple>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-slide-down">
              <div className="space-y-2">
                <EnhancedRipple>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    Home
                  </button>
                </EnhancedRipple>
                <div className="px-4 py-2">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Dashboards</div>
                  {dashboardOptions.map((option) => (
                    <EnhancedRipple key={option.id}>
                      <button
                        onClick={() => handleNavigate(option.id)}
                        className="block w-full text-left py-2 pl-4 text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors"
                      >
                        {option.name}
                      </button>
                    </EnhancedRipple>
                  ))}
                </div>
                <EnhancedRipple>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    Features
                  </button>
                </EnhancedRipple>
                <EnhancedRipple>
                  <button
                    onClick={() => scrollToSection("analytics")}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    Analytics
                  </button>
                </EnhancedRipple>
                <EnhancedRipple>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    Testimonials
                  </button>
                </EnhancedRipple>
                <EnhancedRipple>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    Contact
                  </button>
                </EnhancedRipple>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <EnhancedParallax speed={0.5}>
        <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-green-200/30 rounded-full"></div>
            <div className="floating-element-delayed absolute top-40 right-20 w-16 h-16 bg-blue-200/30 rounded-full"></div>
            <div className="floating-element absolute bottom-32 left-1/4 w-24 h-24 bg-purple-200/30 rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8">
                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {[
                    { platform: "Capterra", rating: "4.8", icon: "⭐" },
                    { platform: "G2", rating: "4.8", icon: "⭐" },
                    { platform: "Xero", rating: "350+", type: "reviews", icon: "📊" },
                    { platform: "QuickBooks", rating: "550+", type: "reviews", icon: "📚" },
                  ].map((badge, index) => (
                    <EnhancedRipple key={index}>
                      <div
                        className="trust-badge flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-200 dark:border-gray-700 cursor-pointer"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <span className="text-sm">{badge.icon}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {badge.rating} {badge.type || "rating"} on {badge.platform}
                        </span>
                      </div>
                    </EnhancedRipple>
                  ))}
                </div>

                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    <span className="block animate-slide-up">Create reports,</span>
                    <span
                      className="block animate-slide-up bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      style={{ animationDelay: "0.2s" }}
                    >
                      forecasts,
                    </span>
                    <span className="block animate-slide-up" style={{ animationDelay: "0.4s" }}>
                      dashboards &
                    </span>
                    <span
                      className="block animate-slide-up bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"
                      style={{ animationDelay: "0.6s" }}
                    >
                      consolidations
                    </span>
                  </h1>

                  <div className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                    <div className="flex items-center space-x-2">
                      <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
                    </div>
                    <span className="text-xl text-gray-600 dark:text-gray-300 font-medium">Now with AI-insights</span>
                  </div>

                  <p
                    className="text-lg text-gray-600 dark:text-gray-300 max-w-lg animate-fade-in"
                    style={{ animationDelay: "1s" }}
                  >
                    Transform your sustainability journey with intelligent carbon tracking, predictive analytics, and
                    automated reporting. Make data-driven decisions that drive both profit and planet.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "1.2s" }}>
                  <EnhancedRipple>
                    <button onClick={handleStartTrial} className="btn-primary group">
                      <span>Start 14-day free trial</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </EnhancedRipple>
                  <EnhancedRipple>
                    <button onClick={handleWatchDemo} className="btn-secondary group">
                      <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                      <span>Watch demo</span>
                    </button>
                  </EnhancedRipple>
                </div>

                {/* Stats */}
                <div
                  className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 animate-fade-in"
                  style={{ animationDelay: "1.4s" }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white counter">
                      {animatedStats.users.toLocaleString()}+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white counter">
                      {animatedStats.emissions.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">tCO₂e Tracked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white counter">
                      ${(animatedStats.savings / 1000000).toFixed(1)}M+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white counter">
                      {animatedStats.projects.toLocaleString()}+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                </div>
              </div>

              {/* Dashboard Preview */}
              <div className="relative animate-fade-in" style={{ animationDelay: "1.6s" }}>
                <DashboardPreview type="analytics" />
              </div>
            </div>
          </div>
        </section>
      </EnhancedParallax>

      {/* Carousel Section - Remove top padding to eliminate gap */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-on-scroll">
              Experience the Future of Sustainability
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-on-scroll">
              Discover how our platform transforms environmental data into business value
            </p>
          </div>

          <CarouselSwitch items={carouselItems} autoPlay={true} interval={6000} className="animate-on-scroll" />
        </div>
      </section>

      {/* Features Section - Reduce padding */}
      <section id="features" className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features for Sustainable Business
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to track, analyze, and reduce your environmental impact with enterprise-grade tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Kits Section - Reduce padding */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-on-scroll">
              Connected Organizations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-on-scroll">
              Manage multiple organizations and track their sustainability metrics
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <ModernCard
              title="Brand Kits"
              icon={<Building className="h-6 w-6 text-white" />}
              gradient="from-purple-500 via-blue-500 to-cyan-500"
            >
              <div className="space-y-3">
                {brandKits.map((brand, index) => (
                  <ModernCard
                    key={index}
                    title={brand.name}
                    icon={brand.icon}
                    description={brand.description}
                    selected={brand.selected}
                    gradient="from-gray-600 to-gray-800"
                  />
                ))}
              </div>
            </ModernCard>
          </div>
        </div>
      </section>

      {/* Analytics Section - Reduce padding */}
      <EnhancedParallax speed={0.3}>
        <section id="analytics" className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-on-scroll">
                Real-Time Analytics & Insights
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 animate-on-scroll">
                Monitor your sustainability metrics with comprehensive dashboards and reports
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {statsData.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            {/* Carbon Chart */}
            <div className="animate-on-scroll">
              <CarbonChart data={chartData} />
            </div>
          </div>
        </section>
      </EnhancedParallax>

      {/* Testimonials Section - Reduce padding */}
      <section id="testimonials" className="py-12 relative overflow-hidden">
        {/* Background with subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-on-scroll">
              Trusted by Sustainability Leaders
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-on-scroll">
              See how companies are transforming their environmental impact with EcoMetrics
            </p>
          </div>

          {/* Animated Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card relative group animate-on-scroll"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationDuration: "0.8s",
                  animationFillMode: "both",
                }}
              >
                {/* Gradient Border with Pulse Animation */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.gradient} rounded-2xl opacity-75 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-none animate-pulse-slow`}
                ></div>

                {/* Card Content with Hover Animations */}
                <EnhancedRipple className="relative">
                  <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 h-full group-hover:transform group-hover:scale-105 group-hover:shadow-2xl">
                    {/* Avatar and Info with Slide Animation */}
                    <div className="flex items-center mb-6 transform transition-transform duration-300 group-hover:translate-x-2">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold shadow-lg transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}
                      >
                        {testimonial.avatar}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 transition-colors duration-300">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Quote with Fade Animation */}
                    <div className="relative mb-6">
                      <div className="absolute -top-2 -left-2 text-4xl text-gray-300 dark:text-gray-600 opacity-50 transition-opacity duration-300 group-hover:opacity-100">
                        "
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic pl-6 transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                        {testimonial.content}
                      </p>
                    </div>

                    {/* Stars with Stagger Animation */}
                    <div className="flex space-x-1">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-current text-yellow-400 transition-all duration-300 group-hover:scale-125"
                          style={{
                            transitionDelay: `${i * 0.1}s`,
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                          }}
                        />
                      ))}
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${testimonial.gradient} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </EnhancedRipple>
              </div>
            ))}
          </div>

          {/* Floating Elements for Extra Animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="floating-element absolute top-20 left-10 w-16 h-16 bg-blue-200/20 rounded-full"></div>
            <div className="floating-element-delayed absolute bottom-20 right-10 w-20 h-20 bg-purple-200/20 rounded-full"></div>
            <div className="floating-element absolute top-1/2 left-1/4 w-12 h-12 bg-pink-200/20 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Contact Section - Reduce padding */}
      <EnhancedParallax speed={0.2}>
        <section id="contact" className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-on-scroll">
                Ready to Transform Your Sustainability Journey?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 animate-on-scroll">
                Join thousands of companies already making a positive environmental impact
              </p>
            </div>

            <div className="relative group animate-on-scroll">
              {/* Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur-none"></div>

              {/* Form Content */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setIsLoading(true)
                    setTimeout(() => {
                      alert(
                        "🌱 Thank you for your interest! Our sustainability experts will be in touch within 24 hours.",
                      )
                      setIsLoading(false)
                    }, 1500)
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input type="text" required className="input-field" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input type="text" required className="input-field" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                    <input type="email" required className="input-field" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company</label>
                    <input type="text" className="input-field" placeholder="Your Company" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      How can we help you achieve your sustainability goals?
                    </label>
                    <textarea
                      rows={4}
                      className="input-field"
                      placeholder="Tell us about your sustainability challenges and goals..."
                    ></textarea>
                  </div>
                  <EnhancedRipple>
                    <button type="submit" className="w-full btn-primary">
                      <span>Get Started Today</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </EnhancedRipple>
                </form>
              </div>
            </div>
          </div>
        </section>
      </EnhancedParallax>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  EcoMetrics
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Leading the way in sustainable business intelligence and environmental impact analytics.
              </p>
              <div className="flex space-x-4">
                <EnhancedRipple>
                  <button className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                    <Users className="h-5 w-5" />
                  </button>
                </EnhancedRipple>
                <EnhancedRipple>
                  <button className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                    <Globe className="h-5 w-5" />
                  </button>
                </EnhancedRipple>
                <EnhancedRipple>
                  <button className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                    <Award className="h-5 w-5" />
                  </button>
                </EnhancedRipple>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-green-400">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <EnhancedRipple>
                    <button className="hover:text-white transition-colors">Analytics</button>
                  </EnhancedRipple>
                </li>
                <li>
                  <EnhancedRipple>
                    <button className="hover:text-white transition-colors">Reporting</button>
                  </EnhancedRipple>
                </li>
                <li>
                  <EnhancedRipple>
                    <button className="hover:text-white transition-colors">Dashboards</button>
                  </EnhancedRipple>
                </li>
                <li>
                  <EnhancedRipple>
                    <button className="hover:text-white transition-colors">API</button>
                  </EnhancedRipple>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-blue-400">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <EnhancedRipple>
                    <button className="hover:text-white transition-colors">About</button>
                  </EnhancedRipple>
                </li>
                <li>
                  <EnhancedRipple>
                    <button className="hover:text-white transition-colors">Careers</button>
                  </EnhancedRipple>
                </li>
                <li>
                  <EnhancedRipple>
                    <button className="hover:text-white transition-colors">Press</button>
                  </EnhancedRipple>
                </li>
                <li>
                  <EnhancedRipple>
                    <button className="hover:text-white transition-colors">Contact</button>
                  </EnhancedRipple>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-purple-400">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <EnhancedRipple>
                    <button className="hover:text-white transition-colors">Documentation</button>
                  </EnhancedRipple>
                </li>
                <li>
                  <EnhancedRipple>
                    <button className="hover:text-white transition-colors">Support</button>
                  </EnhancedRipple>
                </li>
                <li>
                  <EnhancedRipple>
                    <button className="hover:text-white transition-colors">Blog</button>
                  </EnhancedRipple>
                </li>
                <li>
                  <EnhancedRipple>
                    <button className="hover:text-white transition-colors">Community</button>
                  </EnhancedRipple>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 EcoMetrics. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <EnhancedRipple>
                <button className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</button>
              </EnhancedRipple>
              <EnhancedRipple>
                <button className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</button>
              </EnhancedRipple>
              <EnhancedRipple>
                <button className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</button>
              </EnhancedRipple>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export { App as default }
