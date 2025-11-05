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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
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
          <div className="w-64 flex-shrink-0">
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
              {/* {activeSection === "objectives" && <ObjectivesSection />}
              {activeSection === "user-personas" && <UserPersonasSection />}
              {activeSection === "user-app" && <UserAppSection />}
              {activeSection === "pharmacy-app" && <PharmacyAppSection />}
              {activeSection === "rider-app" && <RiderAppSection />}
              {activeSection === "technical" && <TechnicalSection />}
              {activeSection === "success-metrics" && <SuccessMetricsSection />} */}
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
