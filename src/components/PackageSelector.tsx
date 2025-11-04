"use client";

import { Clock } from "lucide-react";

interface SubscriptionPlan {
  name: string;
  price: string;
  duration: string;
  description: string;
  bestFor: string;
  features: string;
  recommended?: boolean;
}

interface SubscriptionSelectorProps {
  subscriptionPlans: Record<string, SubscriptionPlan>;
  selectedPlan: string;
  onPlanSelect: (planKey: string) => void;
}

export default function SubscriptionSelector({
  subscriptionPlans,
  selectedPlan,
  onPlanSelect,
}: SubscriptionSelectorProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Pharmacy App Subscription Plans
      </h2>
      <p className="text-gray-600 mb-6">
        Choose the subscription plan that best fits your pharmacy&apos;s needs
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(subscriptionPlans).map(([key, plan]) => {
          // Define colors for each plan type
          const colors = {
            mvp: {
              border: "border-blue-600",
              bg: "bg-blue-50",
              text: "text-blue-600",
              hover: "hover:border-blue-300",
            },
            standard: {
              border: "border-green-600",
              bg: "bg-green-50",
              text: "text-green-600",
              hover: "hover:border-green-300",
            },
            enterprise: {
              border: "border-purple-600",
              bg: "bg-purple-50",
              text: "text-purple-600",
              hover: "hover:border-purple-300",
            },
          };

          const colorScheme = colors[key as keyof typeof colors];

          return (
            <div
              key={key}
              onClick={() => onPlanSelect(key)}
              className={`relative cursor-pointer rounded-lg p-6 border-2 transition-all ${
                selectedPlan === key
                  ? `${colorScheme.border} ${colorScheme.bg} shadow-lg`
                  : `border-gray-200 ${colorScheme.hover} hover:shadow-md bg-white`
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    RECOMMENDED
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {plan.name}
              </h3>
              <div className={`text-3xl font-bold ${colorScheme.text} mb-3`}>
                {plan.price}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <Clock className="w-4 h-4" />
                {plan.duration}
              </div>
              <p className="text-sm text-gray-700">{plan.description}</p>
              <p className="text-xs text-gray-500 mt-2 italic">
                {plan.bestFor}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
