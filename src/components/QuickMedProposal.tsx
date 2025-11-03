"use client";

import { useState } from "react";
import Header from "./Header";
import ExecutiveSummary from "./ExecutiveSummary";
import PackageSelector from "./PackageSelector";
import FeatureBreakdown from "./FeatureBreakdown";
import CostBreakdown from "./CostBreakdown";
import PaymentStructure from "./PaymentStructure";
import TechnicalDeliverables from "./TechnicalDeliverables";
import DevelopmentTimeline from "./DevelopmentTimeline";
import AdditionalServices from "./AdditionalServices";
import InvestmentValue from "./InvestmentValue";
import EnterpriseFeatures from "./EnterpriseFeatures";
import TermsConditions from "./TermsConditions";
import InvestmentComparison from "./InvestmentComparison";
import ROICalculator from "./ROICalculator";
import CallToAction from "./CallToAction";
import { packages, appFeatures, costBreakdown, paymentStructure } from "./data";

export default function QuickMedProposal() {
  const [selectedPackage, setSelectedPackage] = useState("standard");
  const [activeFeatureTab, setActiveFeatureTab] = useState("user");

  const currentPackage = packages[selectedPackage as keyof typeof packages];
  const currentBreakdown =
    costBreakdown[selectedPackage as keyof typeof costBreakdown];
  const currentPayment =
    paymentStructure[selectedPackage as keyof typeof paymentStructure];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <ExecutiveSummary />

        <PackageSelector
          packages={packages}
          selectedPackage={selectedPackage}
          onPackageSelect={setSelectedPackage}
        />

        <FeatureBreakdown
          appFeatures={appFeatures}
          activeFeatureTab={activeFeatureTab}
          onTabChange={setActiveFeatureTab}
          selectedPackage={selectedPackage}
        />

        <CostBreakdown
          currentPackage={currentPackage}
          currentBreakdown={currentBreakdown}
        />

        <PaymentStructure paymentPhases={currentPayment} />

        <TechnicalDeliverables />

        <DevelopmentTimeline currentPackage={currentPackage} />

        <AdditionalServices />

        <InvestmentValue />

        <EnterpriseFeatures />

        <TermsConditions currentPackage={currentPackage} />

        <InvestmentComparison />

        <ROICalculator currentPackage={currentPackage} />

        <CallToAction
          currentPackage={currentPackage}
          currentBreakdown={currentBreakdown}
          currentPayment={currentPayment}
        />
      </div>
    </div>
  );
}
