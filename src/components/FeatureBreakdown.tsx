"use client";

import {
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
} from "lucide-react";
import { AppFeature, Feature } from "./types";
import { useState, useMemo } from "react";

interface FeatureBreakdownProps {
  appFeatures: Record<string, AppFeature>;
  activeFeatureTab: string;
  onTabChange: (tab: string) => void;
  selectedPackage: string;
}

interface ExtendedSection {
  title: string;
  icon: React.ReactNode;
  features: Feature[];
  hasVisibleFeatures: boolean;
}

export default function FeatureBreakdown({
  appFeatures,
  activeFeatureTab,
  onTabChange,
}: FeatureBreakdownProps) {
  const currentFeatures = appFeatures[activeFeatureTab];

  // State for progressive disclosure and filtering
  const [expandedSections, setExpandedSections] = useState<
    Record<number, boolean>
  >({});
  const [searchTerm, setSearchTerm] = useState("");
  const [packageFilter, setPackageFilter] = useState<string>("all");
  const [showAllSections, setShowAllSections] = useState(false);

  // Toggle section expansion
  const toggleSection = (sectionIndex: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

  // Toggle all sections
  const toggleAllSections = () => {
    const newState = !showAllSections;
    setShowAllSections(newState);
    const newExpandedState: Record<number, boolean> = {};
    currentFeatures.sections.forEach((_, index) => {
      newExpandedState[index] = newState;
    });
    setExpandedSections(newExpandedState);
  };

  // Filter features based on search and package
  const filteredSections = useMemo(() => {
    return currentFeatures.sections
      .map((section) => {
        const filteredFeatures = section.features.filter((feature) => {
          // Search filter
          const matchesSearch =
            searchTerm === "" ||
            feature.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            feature.desc.toLowerCase().includes(searchTerm.toLowerCase());

          // Package filter
          const matchesPackage =
            packageFilter === "all" ||
            (packageFilter === "mvp" && feature.mvp) ||
            (packageFilter === "standard" && feature.standard) ||
            (packageFilter === "enterprise" && feature.enterprise);

          return matchesSearch && matchesPackage;
        });

        return {
          ...section,
          features: filteredFeatures,
          hasVisibleFeatures: filteredFeatures.length > 0,
        } as ExtendedSection;
      })
      .filter((section) => section.hasVisibleFeatures);
  }, [currentFeatures.sections, searchTerm, packageFilter]);

  const renderFeatureTable = (sections: ExtendedSection[]) => {
    return (
      <div className="space-y-6">
        {sections.map((section, sectionIndex) => {
          const isExpanded = expandedSections[sectionIndex] || false;
          const featureCount = section.features.length;

          return (
            <div
              key={sectionIndex}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
            >
              {/* Collapsible Header */}
              <button
                onClick={() => toggleSection(sectionIndex)}
                className="w-full bg-gray-100 px-6 py-4 border-b border-gray-200 hover:bg-gray-150 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-gray-400">{section.icon}</div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {section.title}
                    </h4>
                    <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                      {featureCount} feature{featureCount !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Quick preview of package coverage */}
                    <div className="hidden sm:flex items-center gap-1">
                      {section.features.some((f: Feature) => f.mvp) && (
                        <div
                          className="w-2 h-2 bg-blue-600 rounded-full"
                          title="MVP features available"
                        ></div>
                      )}
                      {section.features.some((f: Feature) => f.standard) && (
                        <div
                          className="w-2 h-2 bg-green-600 rounded-full"
                          title="Standard features available"
                        ></div>
                      )}
                      {section.features.some((f: Feature) => f.enterprise) && (
                        <div
                          className="w-2 h-2 bg-purple-600 rounded-full"
                          title="Enterprise features available"
                        ></div>
                      )}
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </div>
              </button>

              {/* Expandable Content */}
              {isExpanded && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left py-3 px-6 font-semibold text-gray-700">
                          Feature
                        </th>
                        <th className="text-center py-3 px-4 font-semibold text-blue-700 min-w-[100px]">
                          MVP
                        </th>
                        <th className="text-center py-3 px-4 font-semibold text-green-700 min-w-[100px]">
                          Standard
                        </th>
                        <th className="text-center py-3 px-4 font-semibold text-purple-700 min-w-[100px]">
                          Enterprise
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.features.map(
                        (feature: Feature, featureIndex: number) => (
                          <tr
                            key={featureIndex}
                            className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                          >
                            <td className="py-4 px-6">
                              <div>
                                <div className="font-medium text-gray-800">
                                  {feature.name}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
                                  {feature.desc}
                                </div>
                              </div>
                            </td>
                            <td className="text-center py-4 px-4">
                              {feature.mvp ? (
                                <CheckCircle className="w-5 h-5 text-blue-600 mx-auto" />
                              ) : (
                                <AlertCircle className="w-5 h-5 text-gray-300 mx-auto" />
                              )}
                            </td>
                            <td className="text-center py-4 px-4">
                              {feature.standard ? (
                                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <AlertCircle className="w-5 h-5 text-gray-300 mx-auto" />
                              )}
                            </td>
                            <td className="text-center py-4 px-4">
                              {feature.enterprise ? (
                                <CheckCircle className="w-5 h-5 text-purple-600 mx-auto" />
                              ) : (
                                <AlertCircle className="w-5 h-5 text-gray-300 mx-auto" />
                              )}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Features Breakdown
      </h2>
      <p className="text-gray-600 mb-6">
        Every feature across all four applications - see exactly what you get in
        each package
      </p>

      {/* App Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 pb-4">
        {Object.entries(appFeatures).map(([key, app]) => (
          <button
            key={key}
            onClick={() => onTabChange(key)}
            className={`flex items-center gap-2 px-2 py-2 rounded-lg font-semibold transition-all ${
              activeFeatureTab === key
                ? `bg-${app.color}-100 text-${app.color}-700 border-2 border-${app.color}-600`
                : "bg-gray-100 text-gray-600 border-2 border-transparent hover:bg-gray-200"
            }`}
          >
            {app.icon}
            {app.title}
          </button>
        ))}
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search features..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 transition-all duration-200 text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Package Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
            <select
              value={packageFilter}
              onChange={(e) => setPackageFilter(e.target.value)}
              className="appearance-none pl-10 pr-8 py-2 bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-gray-300 transition-all duration-200 text-gray-700 font-medium min-w-[140px] cursor-pointer"
            >
              <option value="all">All Packages</option>
              <option value="mvp">MVP Only</option>
              <option value="standard">Standard Only</option>
              <option value="enterprise">Enterprise Only</option>
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Expand/Collapse All */}
          <button
            onClick={toggleAllSections}
            className="px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 font-medium whitespace-nowrap shadow-sm"
          >
            {showAllSections ? "Collapse All" : "Expand All"}
          </button>
        </div>

        {/* Results Summary */}
        {(searchTerm || packageFilter !== "all") && (
          <div className="text-sm text-gray-600">
            Showing{" "}
            {filteredSections.reduce(
              (acc, section) => acc + section.features.length,
              0
            )}{" "}
            features
            {searchTerm && ` matching "${searchTerm}"`}
            {packageFilter !== "all" &&
              ` in ${packageFilter.toUpperCase()} package`}
          </div>
        )}
      </div>

      {/* Features Display */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
          <h3 className="text-xl font-bold text-gray-800">
            {currentFeatures.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1 px-3 py-1 bg-blue-50 rounded-full border border-blue-200">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-medium text-blue-700">MVP</span>
            </div>
            <div className="flex items-center gap-1 px-3 py-1 bg-green-50 rounded-full border border-green-200">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <span className="text-xs font-medium text-green-700">
                Standard
              </span>
            </div>
            <div className="flex items-center gap-1 px-3 py-1 bg-purple-50 rounded-full border border-purple-200">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
              <span className="text-xs font-medium text-purple-700">
                Enterprise
              </span>
            </div>
          </div>
        </div>
      </div>

      {filteredSections.length > 0 ? (
        renderFeatureTable(filteredSections)
      ) : (
        <div className="text-center py-12 text-gray-500">
          <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p className="text-lg font-medium mb-2">No features found</p>
          <p>Try adjusting your search terms or filters</p>
        </div>
      )}
    </div>
  );
}
