"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Users,
  Target,
  Smartphone,
  Building2,
  Truck,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  DollarSign,
  Search,
  ShoppingCart,
  MapPin,
  CreditCard,
  Bell,
  Camera,
  MessageSquare,
  BarChart3,
  Package,
  Activity,
  Lock,
  Database,
  Heart,
  Calendar,
  AlertTriangle,
  Award,
  Briefcase,
  GraduationCap,
  Home,
  Navigation,
  PhoneCall,
  Settings,
  UserCheck,
  Wallet,
  Headphones,
  Monitor,
  Layers,
  Cloud,
  Code,
  Gauge,
  Calculator,
} from "lucide-react";

export default function ProductRequirementsDocument() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    {
      id: "overview",
      title: "Overview",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      id: "objectives",
      title: "Objectives",
      icon: <Target className="w-4 h-4" />,
    },
    {
      id: "user-personas",
      title: "User Personas",
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: "user-app",
      title: "User App Features",
      icon: <Smartphone className="w-4 h-4" />,
    },
    {
      id: "pharmacy-app",
      title: "Pharmacy App Features",
      icon: <Building2 className="w-4 h-4" />,
    },
    {
      id: "rider-app",
      title: "Rider App Features",
      icon: <Truck className="w-4 h-4" />,
    },
    {
      id: "technical",
      title: "Technical Requirements",
      icon: <Database className="w-4 h-4" />,
    },
    {
      id: "success-metrics",
      title: "Success Metrics",
      icon: <TrendingUp className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Proposal</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-2xl font-bold text-gray-900">
                Product Requirements Document
              </h1>
            </div>
            <div className="text-sm text-gray-500">
              QuickMed Healthcare Platform
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 shrink-0">
            <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-8">
              <h3 className="font-semibold text-gray-900 mb-4">Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {section.icon}
                    <span className="text-sm font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border">
              {activeSection === "overview" && <OverviewSection />}
              {activeSection === "objectives" && <ObjectivesSection />}
              {activeSection === "user-personas" && <UserPersonasSection />}
              {activeSection === "user-app" && <UserAppSection />}
              {activeSection === "pharmacy-app" && <PharmacyAppSection />}
              {activeSection === "rider-app" && <RiderAppSection />}
              {activeSection === "technical" && <TechnicalSection />}
              {activeSection === "success-metrics" && <SuccessMetricsSection />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          QuickMed Healthcare Platform
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          A comprehensive digital healthcare ecosystem connecting patients,
          pharmacies, and delivery partners through intelligent technology
          solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-3">Project Vision</h3>
          <p className="text-blue-800">
            To revolutionize healthcare accessibility in Nigeria by creating a
            seamless, intelligent platform that connects patients with verified
            pharmacies and ensures reliable medication delivery.
          </p>
        </div>
        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-3">
            Market Opportunity
          </h3>
          <p className="text-green-800">
            Nigeria&apos;s $4.7B pharmaceutical market with 200M+ population
            presents massive opportunity for digital transformation in
            healthcare delivery and medication access.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Platform Components
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Smartphone className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900">User Mobile App</h4>
            </div>
            <p className="text-sm text-gray-600">
              Patient-facing application for medication search, ordering,
              prescription management, and delivery tracking.
            </p>
          </div>
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Building2 className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="font-medium text-gray-900">Pharmacy Portal</h4>
            </div>
            <p className="text-sm text-gray-600">
              Comprehensive management system for inventory, orders, compliance,
              and business analytics.
            </p>
          </div>
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Truck className="w-5 h-5 text-orange-600" />
              </div>
              <h4 className="font-medium text-gray-900">Rider App</h4>
            </div>
            <p className="text-sm text-gray-600">
              Delivery partner application for order management, navigation, and
              earnings tracking.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Key Differentiators
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900">
                AI-Powered Intelligence
              </h4>
              <p className="text-sm text-gray-600">
                Smart drug recommendations, inventory forecasting, and
                prescription validation
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900">
                Regulatory Compliance
              </h4>
              <p className="text-sm text-gray-600">
                Built-in NAFDAC compliance, prescription verification, and audit
                trails
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900">
                Multi-Stakeholder Ecosystem
              </h4>
              <p className="text-sm text-gray-600">
                Seamless integration between patients, pharmacies, and delivery
                partners
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-900">
                Scalable Infrastructure
              </h4>
              <p className="text-sm text-gray-600">
                Cloud-native architecture designed for nationwide expansion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ObjectivesSection() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Project Objectives
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Target className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-blue-900">
              Primary Goals
            </h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
              <span className="text-blue-800">
                Improve medication accessibility across Nigeria
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
              <span className="text-blue-800">
                Reduce prescription fulfillment time by 70%
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
              <span className="text-blue-800">
                Connect 1000+ verified pharmacies nationwide
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
              <span className="text-blue-800">
                Achieve 95% customer satisfaction rating
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-semibold text-green-900">
              Business Impact
            </h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <DollarSign className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-green-800">
                Generate ₦2B+ in GMV within 18 months
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Users className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-green-800">Onboard 500K+ active users</span>
            </li>
            <li className="flex items-start space-x-3">
              <Globe className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-green-800">
                Expand to 20+ major Nigerian cities
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Award className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-green-800">
                Become Nigeria&apos;s #1 healthcare platform
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Success Criteria
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="font-medium text-gray-900">Delivery Speed</h4>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Average delivery time under 45 minutes in urban areas
            </p>
            <div className="text-xs text-purple-600 font-medium">
              Target: &lt;45 min
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Star className="w-5 h-5 text-orange-600" />
              </div>
              <h4 className="font-medium text-gray-900">User Rating</h4>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Maintain high user satisfaction across all touchpoints
            </p>
            <div className="text-xs text-orange-600 font-medium">
              Target: 4.8+ stars
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <h4 className="font-medium text-gray-900">Compliance</h4>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              100% regulatory compliance with NAFDAC standards
            </p>
            <div className="text-xs text-red-600 font-medium">Target: 100%</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Key Performance Indicators
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">User Metrics</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Monthly Active Users (MAU): 100K+ by month 6</li>
              <li>• User Retention Rate: 80%+ after 30 days</li>
              <li>• Average Order Value: ₦15,000+</li>
              <li>• Order Frequency: 2.5+ orders per user/month</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">
              Operational Metrics
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Order Fulfillment Rate: 98%+</li>
              <li>• Pharmacy Response Time: &lt;5 minutes</li>
              <li>• Delivery Success Rate: 95%+</li>
              <li>• Platform Uptime: 99.9%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserPersonasSection() {
  const personas = [
    {
      name: "Sarah Adebayo",
      role: "Working Mother",
      age: "32",
      location: "Lagos",
      icon: <Heart className="w-6 h-6 text-pink-600" />,
      color: "pink",
      description: "Busy professional managing family healthcare needs",
      goals: [
        "Quick medication access for family",
        "Reliable prescription refills",
        "Affordable healthcare solutions",
        "Time-saving convenience",
      ],
      painPoints: [
        "Long pharmacy queues",
        "Stock unavailability",
        "Traffic delays",
        "Prescription management",
      ],
      techComfort: "Medium",
      usage: "2-3 orders per month",
    },
    {
      name: "Dr. Emeka Okafor",
      role: "Elderly Patient",
      age: "68",
      location: "Abuja",
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      color: "blue",
      description: "Retired professional with chronic conditions",
      goals: [
        "Regular medication supply",
        "Medication reminders",
        "Easy reordering process",
        "Trusted pharmacy network",
      ],
      painPoints: [
        "Mobility challenges",
        "Complex medication schedules",
        "Technology barriers",
        "Cost concerns",
      ],
      techComfort: "Low",
      usage: "Weekly orders",
    },
    {
      name: "Kemi Johnson",
      role: "Young Professional",
      age: "26",
      location: "Port Harcourt",
      icon: <Briefcase className="w-6 h-6 text-green-600" />,
      color: "green",
      description: "Tech-savvy millennial prioritizing health",
      goals: [
        "Instant medication access",
        "Health tracking integration",
        "Competitive pricing",
        "Seamless user experience",
      ],
      painPoints: [
        "Busy work schedule",
        "Limited pharmacy hours",
        "Price comparison difficulty",
        "Prescription authenticity",
      ],
      techComfort: "High",
      usage: "As-needed basis",
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">User Personas</h2>
      <p className="text-lg text-gray-600 mb-8">
        Understanding our diverse user base to create tailored experiences for
        each segment.
      </p>

      <div className="space-y-8">
        {personas.map((persona, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start space-x-6">
              <div
                className={`p-4 bg-${persona.color}-100 rounded-xl shrink-0`}
              >
                {persona.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {persona.name}
                    </h3>
                    <p className="text-gray-600">
                      {persona.role} • Age {persona.age} • {persona.location}
                    </p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div>Tech Comfort: {persona.techComfort}</div>
                    <div>Usage: {persona.usage}</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{persona.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
                      <Target className="w-4 h-4 text-green-500" />
                      <span>Goals</span>
                    </h4>
                    <ul className="space-y-2">
                      {persona.goals.map((goal, goalIndex) => (
                        <li
                          key={goalIndex}
                          className="flex items-start space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-600">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span>Pain Points</span>
                    </h4>
                    <ul className="space-y-2">
                      {persona.painPoints.map((pain, painIndex) => (
                        <li
                          key={painIndex}
                          className="flex items-start space-x-2"
                        >
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-600">{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function UserAppSection() {
  const features = [
    {
      category: "Core Features",
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      color: "blue",
      items: [
        {
          name: "Medication Search & Discovery",
          description:
            "AI-powered search with drug alternatives and generic options",
          icon: <Search className="w-5 h-5" />,
        },
        {
          name: "Prescription Management",
          description:
            "Digital prescription upload, storage, and auto-refill reminders",
          icon: <Camera className="w-5 h-5" />,
        },
        {
          name: "Smart Shopping Cart",
          description:
            "Intelligent cart with drug interaction warnings and dosage verification",
          icon: <ShoppingCart className="w-5 h-5" />,
        },
        {
          name: "Real-time Order Tracking",
          description:
            "Live delivery tracking with ETA updates and rider communication",
          icon: <MapPin className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "Payment & Security",
      icon: <Shield className="w-6 h-6 text-green-600" />,
      color: "green",
      items: [
        {
          name: "Multiple Payment Options",
          description:
            "Card payments, bank transfers, USSD, and wallet integration",
          icon: <CreditCard className="w-5 h-5" />,
        },
        {
          name: "Secure Health Records",
          description:
            "Encrypted storage of medical history and prescription data",
          icon: <Lock className="w-5 h-5" />,
        },
        {
          name: "Insurance Integration",
          description:
            "HMO and insurance claim processing with real-time verification",
          icon: <Shield className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "Health Management",
      icon: <Heart className="w-6 h-6 text-red-600" />,
      color: "red",
      items: [
        {
          name: "Medication Reminders",
          description: "Smart notifications for dosage times and refill alerts",
          icon: <Bell className="w-5 h-5" />,
        },
        {
          name: "Health Tracking",
          description:
            "Symptom logging, medication adherence tracking, and health insights",
          icon: <Activity className="w-5 h-5" />,
        },
        {
          name: "Telemedicine Integration",
          description:
            "Connect with licensed pharmacists and healthcare providers",
          icon: <PhoneCall className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "User Experience",
      icon: <Star className="w-6 h-6 text-purple-600" />,
      color: "purple",
      items: [
        {
          name: "Personalized Dashboard",
          description:
            "Customized home screen with relevant health information and quick actions",
          icon: <Home className="w-5 h-5" />,
        },
        {
          name: "Multi-language Support",
          description: "English, Hausa, Yoruba, and Igbo language options",
          icon: <Globe className="w-5 h-5" />,
        },
        {
          name: "Offline Functionality",
          description:
            "Access prescription history and basic features without internet",
          icon: <Smartphone className="w-5 h-5" />,
        },
        {
          name: "24/7 Customer Support",
          description:
            "In-app chat support with multilingual customer service team",
          icon: <Headphones className="w-5 h-5" />,
        },
      ],
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        User Mobile App Features
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Comprehensive patient-facing application designed for seamless
        medication access and health management.
      </p>

      <div className="space-y-8">
        {features.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white border rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className={`p-3 bg-${category.color}-100 rounded-lg`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {category.category}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {category.items.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`p-2 bg-${category.color}-50 rounded-lg shrink-0`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        {feature.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          User Journey Highlights
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Search</h4>
            <p className="text-xs text-gray-600">
              Find medications with AI assistance
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <ShoppingCart className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Order</h4>
            <p className="text-xs text-gray-600">
              Add to cart with safety checks
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Pay</h4>
            <p className="text-xs text-gray-600">Secure payment processing</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Truck className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Receive</h4>
            <p className="text-xs text-gray-600">Track delivery in real-time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PharmacyAppSection() {
  const features = [
    {
      category: "Inventory Management",
      icon: <Package className="w-6 h-6 text-blue-600" />,
      color: "blue",
      items: [
        {
          name: "Real-time Stock Tracking",
          description:
            "Live inventory updates with low-stock alerts and automated reordering",
          icon: <BarChart3 className="w-5 h-5" />,
        },
        {
          name: "Batch & Expiry Management",
          description:
            "Track medication batches, expiry dates, and FIFO inventory rotation",
          icon: <Calendar className="w-5 h-5" />,
        },
        {
          name: "Supplier Integration",
          description:
            "Direct ordering from pharmaceutical distributors and manufacturers",
          icon: <Truck className="w-5 h-5" />,
        },
        {
          name: "Price Management",
          description:
            "Dynamic pricing with competitor analysis and profit margin optimization",
          icon: <DollarSign className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "Order Processing",
      icon: <ShoppingCart className="w-6 h-6 text-green-600" />,
      color: "green",
      items: [
        {
          name: "Order Queue Management",
          description:
            "Prioritized order processing with SLA tracking and fulfillment optimization",
          icon: <Clock className="w-5 h-5" />,
        },
        {
          name: "Prescription Verification",
          description:
            "AI-powered prescription validation with pharmacist review workflow",
          icon: <UserCheck className="w-5 h-5" />,
        },
        {
          name: "Customer Communication",
          description:
            "Automated notifications and direct messaging with customers",
          icon: <MessageSquare className="w-5 h-5" />,
        },
        {
          name: "Delivery Coordination",
          description:
            "Seamless handoff to delivery partners with tracking integration",
          icon: <Navigation className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "Compliance & Reporting",
      icon: <Shield className="w-6 h-6 text-red-600" />,
      color: "red",
      items: [
        {
          name: "NAFDAC Compliance",
          description:
            "Automated regulatory reporting and compliance monitoring",
          icon: <FileText className="w-5 h-5" />,
        },
        {
          name: "Audit Trail",
          description: "Complete transaction history with tamper-proof logging",
          icon: <Lock className="w-5 h-5" />,
        },
        {
          name: "Sales Analytics",
          description:
            "Comprehensive business intelligence and performance metrics",
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          name: "Tax Management",
          description:
            "Automated VAT calculation and tax reporting integration",
          icon: <Calculator className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "Business Operations",
      icon: <Building2 className="w-6 h-6 text-purple-600" />,
      color: "purple",
      items: [
        {
          name: "Staff Management",
          description:
            "Role-based access control and staff performance tracking",
          icon: <Users className="w-5 h-5" />,
        },
        {
          name: "Financial Dashboard",
          description:
            "Revenue tracking, profit analysis, and financial forecasting",
          icon: <Wallet className="w-5 h-5" />,
        },
        {
          name: "Customer Insights",
          description:
            "Patient profiles, purchase history, and loyalty program management",
          icon: <Star className="w-5 h-5" />,
        },
        {
          name: "Multi-location Support",
          description:
            "Centralized management for pharmacy chains and multiple outlets",
          icon: <Globe className="w-5 h-5" />,
        },
      ],
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Pharmacy Management Portal
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Comprehensive pharmacy management system designed to streamline
        operations, ensure compliance, and maximize profitability.
      </p>

      <div className="space-y-8">
        {features.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white border rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className={`p-3 bg-${category.color}-100 rounded-lg`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {category.category}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {category.items.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`p-2 bg-${category.color}-50 rounded-lg shrink-0`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        {feature.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Pharmacy Workflow
        </h3>
        <div className="grid md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Bell className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Receive</h4>
            <p className="text-xs text-gray-600">Order notification</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <UserCheck className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Verify</h4>
            <p className="text-xs text-gray-600">Prescription validation</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Package className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Prepare</h4>
            <p className="text-xs text-gray-600">Medication packaging</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Confirm</h4>
            <p className="text-xs text-gray-600">Quality check</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Truck className="w-6 h-6 text-red-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Dispatch</h4>
            <p className="text-xs text-gray-600">Rider handoff</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RiderAppSection() {
  const features = [
    {
      category: "Delivery Management",
      icon: <Truck className="w-6 h-6 text-blue-600" />,
      color: "blue",
      items: [
        {
          name: "Smart Route Optimization",
          description:
            "AI-powered routing for efficient multi-stop deliveries with traffic consideration",
          icon: <Navigation className="w-5 h-5" />,
        },
        {
          name: "Real-time Order Tracking",
          description:
            "Live GPS tracking with customer and pharmacy visibility",
          icon: <MapPin className="w-5 h-5" />,
        },
        {
          name: "Batch Delivery Support",
          description:
            "Handle multiple orders in single trip with optimized sequencing",
          icon: <Package className="w-5 h-5" />,
        },
        {
          name: "Delivery Proof Collection",
          description:
            "Photo capture, digital signatures, and delivery confirmation",
          icon: <Camera className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "Communication & Support",
      icon: <MessageSquare className="w-6 h-6 text-green-600" />,
      color: "green",
      items: [
        {
          name: "In-app Messaging",
          description: "Direct communication with customers and pharmacy staff",
          icon: <PhoneCall className="w-5 h-5" />,
        },
        {
          name: "Emergency Support",
          description:
            "24/7 rider support with emergency contact and assistance",
          icon: <AlertTriangle className="w-5 h-5" />,
        },
        {
          name: "Delivery Instructions",
          description: "Special handling notes and customer preferences",
          icon: <FileText className="w-5 h-5" />,
        },
        {
          name: "Issue Reporting",
          description:
            "Quick incident reporting with photo and description capture",
          icon: <Settings className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "Earnings & Performance",
      icon: <DollarSign className="w-6 h-6 text-purple-600" />,
      color: "purple",
      items: [
        {
          name: "Real-time Earnings",
          description:
            "Live earnings tracking with delivery completion bonuses",
          icon: <Wallet className="w-5 h-5" />,
        },
        {
          name: "Performance Analytics",
          description:
            "Delivery metrics, customer ratings, and improvement insights",
          icon: <BarChart3 className="w-5 h-5" />,
        },
        {
          name: "Incentive Programs",
          description:
            "Peak hour bonuses, completion streaks, and performance rewards",
          icon: <Star className="w-5 h-5" />,
        },
        {
          name: "Flexible Scheduling",
          description:
            "Choose working hours and availability with shift planning",
          icon: <Calendar className="w-5 h-5" />,
        },
      ],
    },
    {
      category: "Safety & Compliance",
      icon: <Shield className="w-6 h-6 text-red-600" />,
      color: "red",
      items: [
        {
          name: "Identity Verification",
          description:
            "Comprehensive background checks and document verification",
          icon: <UserCheck className="w-5 h-5" />,
        },
        {
          name: "Safety Training",
          description:
            "Medication handling protocols and safety procedure training",
          icon: <GraduationCap className="w-5 h-5" />,
        },
        {
          name: "Insurance Coverage",
          description:
            "Comprehensive insurance for riders and medication cargo",
          icon: <Shield className="w-5 h-5" />,
        },
        {
          name: "Health Monitoring",
          description: "Regular health checks and fitness-for-duty assessments",
          icon: <Heart className="w-5 h-5" />,
        },
      ],
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Rider Delivery App
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Comprehensive delivery partner application designed for efficient, safe,
        and profitable medication delivery operations.
      </p>

      <div className="space-y-8">
        {features.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white border rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className={`p-3 bg-${category.color}-100 rounded-lg`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {category.category}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {category.items.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`p-2 bg-${category.color}-50 rounded-lg shrink-0`}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        {feature.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Delivery Process
        </h3>
        <div className="grid md:grid-cols-6 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Bell className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Accept</h4>
            <p className="text-xs text-gray-600">Order assignment</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Navigation className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Navigate</h4>
            <p className="text-xs text-gray-600">To pharmacy</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Package className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Collect</h4>
            <p className="text-xs text-gray-600">Medication pickup</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Deliver</h4>
            <p className="text-xs text-gray-600">To customer</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Camera className="w-6 h-6 text-red-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Confirm</h4>
            <p className="text-xs text-gray-600">Delivery proof</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-6 h-6 text-gray-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Earn</h4>
            <p className="text-xs text-gray-600">Payment received</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechnicalSection() {
  const techStack = [
    {
      category: "Frontend Technologies",
      icon: <Monitor className="w-6 h-6 text-blue-600" />,
      color: "blue",
      items: [
        {
          name: "React Native",
          description: "Cross-platform mobile development",
        },
        { name: "Next.js", description: "Web application framework" },
        { name: "TypeScript", description: "Type-safe development" },
        { name: "Tailwind CSS", description: "Utility-first styling" },
      ],
    },
    {
      category: "Backend Infrastructure",
      icon: <Database className="w-6 h-6 text-green-600" />,
      color: "green",
      items: [
        { name: "Node.js", description: "Server-side runtime" },
        { name: "PostgreSQL", description: "Primary database" },
        { name: "Redis", description: "Caching and sessions" },
        { name: "GraphQL", description: "API query language" },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6 text-purple-600" />,
      color: "purple",
      items: [
        { name: "AWS", description: "Cloud infrastructure" },
        { name: "Docker", description: "Containerization" },
        { name: "Kubernetes", description: "Container orchestration" },
        { name: "GitHub Actions", description: "CI/CD pipeline" },
      ],
    },
    {
      category: "AI & Analytics",
      icon: <Zap className="w-6 h-6 text-orange-600" />,
      color: "orange",
      items: [
        { name: "TensorFlow", description: "Machine learning models" },
        { name: "OpenAI API", description: "Natural language processing" },
        { name: "Apache Kafka", description: "Event streaming" },
        { name: "Elasticsearch", description: "Search and analytics" },
      ],
    },
  ];

  const architecture = [
    {
      layer: "Presentation Layer",
      components: [
        "Mobile Apps (iOS/Android)",
        "Web Portal",
        "Admin Dashboard",
      ],
      technologies: ["React Native", "Next.js", "PWA"],
    },
    {
      layer: "API Gateway",
      components: ["Authentication", "Rate Limiting", "Request Routing"],
      technologies: ["Kong", "JWT", "OAuth 2.0"],
    },
    {
      layer: "Microservices",
      components: [
        "User Service",
        "Pharmacy Service",
        "Order Service",
        "Payment Service",
        "Notification Service",
      ],
      technologies: ["Node.js", "GraphQL", "REST APIs"],
    },
    {
      layer: "Data Layer",
      components: ["PostgreSQL", "Redis Cache", "File Storage", "Analytics DB"],
      technologies: ["AWS RDS", "ElastiCache", "S3", "BigQuery"],
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Technical Requirements
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Scalable, secure, and maintainable technology stack designed for
        high-performance healthcare operations.
      </p>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Technology Stack
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {techStack.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white border rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 bg-${category.color}-100 rounded-lg`}>
                  {category.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {category.category}
                </h4>
              </div>
              <div className="space-y-3">
                {category.items.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex justify-between items-center"
                  >
                    <span className="font-medium text-gray-900">
                      {tech.name}
                    </span>
                    <span className="text-sm text-gray-600">
                      {tech.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          System Architecture
        </h3>
        <div className="space-y-4">
          {architecture.map((layer, layerIndex) => (
            <div key={layerIndex} className="bg-white border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {layer.layer}
                </h4>
                <div className="flex space-x-2">
                  {layer.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {layer.components.map((component, componentIndex) => (
                  <div
                    key={componentIndex}
                    className="bg-gray-50 rounded-lg p-3 text-center"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {component}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Shield className="w-5 h-5 text-red-500" />
            <span>Security Requirements</span>
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• End-to-end encryption for all sensitive data</li>
            <li>• HIPAA-compliant data handling and storage</li>
            <li>• Multi-factor authentication for all users</li>
            <li>• Regular security audits and penetration testing</li>
            <li>• PCI DSS compliance for payment processing</li>
            <li>• Role-based access control (RBAC)</li>
            <li>• Audit logging for all system activities</li>
          </ul>
        </div>

        <div className="bg-white border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Gauge className="w-5 h-5 text-green-500" />
            <span>Performance Requirements</span>
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• 99.9% uptime availability</li>
            <li>• &lt;200ms API response time</li>
            <li>• Support for 100K+ concurrent users</li>
            <li>• Auto-scaling based on demand</li>
            <li>• CDN for global content delivery</li>
            <li>• Database query optimization</li>
            <li>• Real-time data synchronization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function SuccessMetricsSection() {
  const metrics = [
    {
      category: "User Engagement",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      color: "blue",
      kpis: [
        {
          metric: "Monthly Active Users",
          target: "100K+",
          timeframe: "Month 6",
        },
        { metric: "User Retention Rate", target: "80%+", timeframe: "30 days" },
        { metric: "Session Duration", target: "8+ min", timeframe: "Average" },
        { metric: "App Store Rating", target: "4.8+", timeframe: "Ongoing" },
      ],
    },
    {
      category: "Business Performance",
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      color: "green",
      kpis: [
        {
          metric: "Gross Merchandise Value",
          target: "₦2B+",
          timeframe: "Month 18",
        },
        {
          metric: "Average Order Value",
          target: "₦15K+",
          timeframe: "Ongoing",
        },
        { metric: "Revenue Growth", target: "25%", timeframe: "Monthly" },
        {
          metric: "Customer Lifetime Value",
          target: "₦50K+",
          timeframe: "12 months",
        },
      ],
    },
    {
      category: "Operational Excellence",
      icon: <Gauge className="w-6 h-6 text-purple-600" />,
      color: "purple",
      kpis: [
        {
          metric: "Order Fulfillment Rate",
          target: "98%+",
          timeframe: "Daily",
        },
        {
          metric: "Average Delivery Time",
          target: "&lt;45 min",
          timeframe: "Urban areas",
        },
        {
          metric: "Customer Support Response",
          target: "&lt;2 min",
          timeframe: "Average",
        },
        { metric: "System Uptime", target: "99.9%", timeframe: "Monthly" },
      ],
    },
    {
      category: "Market Impact",
      icon: <Globe className="w-6 h-6 text-orange-600" />,
      color: "orange",
      kpis: [
        { metric: "Market Share", target: "15%+", timeframe: "Year 2" },
        { metric: "Pharmacy Partners", target: "1000+", timeframe: "Month 12" },
        { metric: "Cities Covered", target: "20+", timeframe: "Month 18" },
        { metric: "Delivery Partners", target: "5000+", timeframe: "Month 12" },
      ],
    },
  ];

  const milestones = [
    {
      phase: "Phase 1: Foundation",
      duration: "Months 1-3",
      goals: [
        "Launch MVP in Lagos and Abuja",
        "Onboard 50+ pharmacies",
        "Achieve 1K+ registered users",
        "Establish core delivery network",
      ],
    },
    {
      phase: "Phase 2: Growth",
      duration: "Months 4-9",
      goals: [
        "Expand to 5 major cities",
        "Scale to 200+ pharmacy partners",
        "Reach 25K+ active users",
        "Launch AI-powered features",
      ],
    },
    {
      phase: "Phase 3: Scale",
      duration: "Months 10-18",
      goals: [
        "Nationwide coverage (20+ cities)",
        "1000+ pharmacy network",
        "100K+ user base",
        "₦2B+ GMV milestone",
      ],
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Success Metrics & KPIs
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Comprehensive measurement framework to track progress, optimize
        performance, and ensure sustainable growth.
      </p>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Key Performance Indicators
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {metrics.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white border rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 bg-${category.color}-100 rounded-lg`}>
                  {category.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {category.category}
                </h4>
              </div>
              <div className="space-y-3">
                {category.kpis.map((kpi, kpiIndex) => (
                  <div
                    key={kpiIndex}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <span className="font-medium text-gray-900">
                        {kpi.metric}
                      </span>
                      <div className="text-xs text-gray-500">
                        {kpi.timeframe}
                      </div>
                    </div>
                    <span className={`font-bold text-${category.color}-600`}>
                      {kpi.target}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Growth Milestones
        </h3>
        <div className="space-y-6">
          {milestones.map((milestone, milestoneIndex) => (
            <div
              key={milestoneIndex}
              className="bg-white border rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {milestone.phase}
                </h4>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  {milestone.duration}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {milestone.goals.map((goal, goalIndex) => (
                  <div key={goalIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-gray-700">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Success Dashboard
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900">100K+</h4>
            <p className="text-sm text-gray-600">Active Users</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Building2 className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900">1000+</h4>
            <p className="text-sm text-gray-600">Pharmacy Partners</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900">₦2B+</h4>
            <p className="text-sm text-gray-600">GMV Target</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Globe className="w-8 h-8 text-orange-600" />
            </div>
            <h4 className="font-semibold text-gray-900">20+</h4>
            <p className="text-sm text-gray-600">Cities Covered</p>
          </div>
        </div>
      </div>
    </div>
  );
}
