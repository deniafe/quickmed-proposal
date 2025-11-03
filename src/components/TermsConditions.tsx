import { Package } from "./types";

interface TermsConditionsProps {
  currentPackage: Package;
}

export default function TermsConditions({
  currentPackage,
}: TermsConditionsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Terms & Conditions
      </h2>
      <div className="space-y-3 text-gray-700">
        <p>
          • <strong>Payment:</strong> 7-phase structure: 15% each for first 6
          phases, 10% final payment upon publication
        </p>
        <p>
          • <strong>Source Code:</strong> Full ownership transferred to client
          upon final payment
        </p>
        <p>
          • <strong>Timeline:</strong> {currentPackage.timeline} from contract
          signing (may vary based on feedback cycles)
        </p>
        <p>
          • <strong>Revisions:</strong> Up to 3 rounds of revisions included in
          each phase
        </p>
        <p>
          • <strong>Support:</strong> Post-launch support included (duration
          based on selected package)
        </p>
        <p>
          • <strong>Hosting:</strong> First 3 months included, client
          responsible for ongoing hosting costs
        </p>
        <p>
          • <strong>Third-party Costs:</strong> App Store fees (₦120,000/year
          iOS, ₦30,000 one-time Android), payment gateway fees (1.5-2%), and map
          API costs are additional
        </p>
        <p>
          • <strong>Training:</strong> Online training sessions included for
          admin and pharmacy staff
        </p>
        <p>
          • <strong>Warranty:</strong> 90-day bug fix warranty after final
          delivery
        </p>
        <p>
          • <strong>Changes:</strong> Scope changes require written approval and
          may affect timeline/cost
        </p>
      </div>
    </div>
  );
}
