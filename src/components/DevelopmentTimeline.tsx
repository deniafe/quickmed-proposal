import { Clock } from "lucide-react";
import { Package } from "./types";

interface DevelopmentTimelineProps {
  currentPackage: Package;
}

export default function DevelopmentTimeline({
  currentPackage,
}: DevelopmentTimelineProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Clock className="w-6 h-6 text-blue-600" />
        Development Timeline - {currentPackage.timeline}
      </h2>
      <div className="space-y-4">
        <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
          <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
          <h3 className="font-bold text-gray-800">
            Week 1-4: Planning & Design
          </h3>
          <p className="text-sm text-gray-600">
            Requirements gathering, UI/UX design, architecture planning
          </p>
        </div>
        <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
          <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
          <h3 className="font-bold text-gray-800">
            Week 5-12: Core Development
          </h3>
          <p className="text-sm text-gray-600">
            Backend API, database, user authentication, basic features
          </p>
        </div>
        <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
          <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
          <h3 className="font-bold text-gray-800">
            Week 13-20: Advanced Features
          </h3>
          <p className="text-sm text-gray-600">
            Payment integration, maps, real-time tracking, notifications
          </p>
        </div>
        <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
          <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
          <h3 className="font-bold text-gray-800">
            Week 21-22: Testing & Refinement
          </h3>
          <p className="text-sm text-gray-600">
            QA testing, bug fixes, performance optimization, security audit
          </p>
        </div>
        <div className="relative pl-8">
          <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full"></div>
          <h3 className="font-bold text-gray-800">Week 23-24: Launch</h3>
          <p className="text-sm text-gray-600">
            Store submissions, deployment, training, go-live support
          </p>
        </div>
      </div>
    </div>
  );
}
