import { TrendingUp, Shield, Users, CheckCircle } from "lucide-react";

export default function InvestmentValue() {
  return (
    <div className="bg-blue-600 text-white rounded-lg shadow-md p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6">
        Why This Investment Makes Sense
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/10 p-5 rounded-lg">
          <TrendingUp className="w-8 h-8 mb-3" />
          <h3 className="font-bold text-lg mb-2">Massive Market Opportunity</h3>
          <p className="text-blue-100">
            {`Nigeria's digital health market is projected to reach $1.5B by 2027.
            First-movers have significant advantages.`}
          </p>
        </div>
        <div className="bg-white/10 p-5 rounded-lg">
          <Shield className="w-8 h-8 mb-3" />
          <h3 className="font-bold text-lg mb-2">Enterprise-Grade Quality</h3>
          <p className="text-blue-100">
            Built to scale, secure, and compliant. Not a basic app - this is a
            complete business ecosystem.
          </p>
        </div>
        <div className="bg-white/10 p-5 rounded-lg">
          <Users className="w-8 h-8 mb-3" />
          <h3 className="font-bold text-lg mb-2">Multiple Revenue Streams</h3>
          <p className="text-blue-100">
            Subscription fees, commission on sales, delivery fees, and premium
            features create sustainable income.
          </p>
        </div>
        <div className="bg-white/10 p-5 rounded-lg">
          <CheckCircle className="w-8 h-8 mb-3" />
          <h3 className="font-bold text-lg mb-2">Full Ownership</h3>
          <p className="text-blue-100">
            Complete source code, no recurring license fees, full control over
            your platform.
          </p>
        </div>
      </div>
    </div>
  );
}
