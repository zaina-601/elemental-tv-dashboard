import React from 'react';
import { User, Monitor, BarChart3, Tv, Zap } from 'lucide-react';

// 1. Stat Card Component
const StatCard = ({ label, value, subtext, valueColor = "text-gray-900", labelColor = "text-gray-500" }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-full hover:shadow-md transition-shadow">
    <div>
      <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${labelColor}`}>{label}</p>
      <h3 className={`text-4xl font-extrabold mb-2 ${valueColor}`}>{value}</h3>
    </div>
    <p className="text-sm font-medium text-emerald-600">{subtext}</p>
  </div>
);

// 2. Metric Row Component
const MetricRow = ({ label, value, highlight = false }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
    <span className={`text-gray-600 ${highlight ? 'font-bold text-gray-800' : ''}`}>{label}</span>
    <span className={`font-semibold ${highlight ? 'text-indigo-900' : 'text-gray-500'}`}>{value}</span>
  </div>
);

// 3. Progress Bar Component
const PlatformBar = ({ name, percentage, colorClass }) => (
  <div className="mb-6 last:mb-0">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-bold text-gray-800">{name}</span>
      <span className="text-sm font-bold text-gray-800">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-3">
      <div 
        className={`h-3 rounded-full ${colorClass}`} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

// --- MAIN DASHBOARD ---

const SalesDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* HEADER SECTION (Deep Purple Background) */}
      <div className="bg-[#2e2b5e] pb-24 pt-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tag */}
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-4">
            <span className="text-xs font-bold text-white tracking-wide uppercase">Insights Report • Last 30 Days</span>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">ElementalTV Sales Research</h1>
          <p className="text-gray-300 text-lg">Analysis of audience reach, viewing behavior, and commercial potential estimates.</p>
        </div>
      </div>

      {/* CONTENT SECTION (Overlapping the header) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 -mt-16 pb-12">
        
        {/* TOP STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard 
            label="Total Reach" 
            value="48.2M" 
            subtext="Unique Devices" 
          />
          <StatCard 
            label="Total Avails" 
            value="213.4M" 
            subtext="Number of Requests" 
          />
          <StatCard 
            label="Total Revenue Potential" 
            value="$1.8B" 
            subtext="Across Digital Ad Spend" 
          />
        </div>

        {/* BOTTOM PANELS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT PANEL: Audience Snapshot */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <User size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Audience Snapshot</h2>
            </div>

            <div className="space-y-1">
              {/* Custom Highlighting for the first item as per design */}
              <div className="flex justify-between items-start py-3">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Status</p>
                  <p className="text-lg font-bold text-gray-900">HHI $100k+ (High Purchasing Power)</p>
                </div>
                <span className="text-gray-400 text-sm">Affluent</span>
              </div>

              <div className="h-px bg-gray-100 my-2"></div>

              <MetricRow label="Married Households" value="72%" />
              <MetricRow label="Core Age Group" value="25-54" />
              
              {/* Flagship Channel Highlight */}
              <div className="py-4">
                 <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-600">Flagship Channel</span>
                    <span className="font-bold text-gray-400 uppercase tracking-widest">FAWESOME</span>
                 </div>
                 <h4 className="font-bold text-gray-900 text-lg">Drives 43% of total viewership</h4>
              </div>

              <MetricRow label="Peak Viewing Time" value="7PM - 10PM" />
            </div>
          </div>

          {/* RIGHT PANEL: Platform Breakdown */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
              <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                <Monitor size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Platform Breakdown</h2>
            </div>

            <div className="mt-8 space-y-8">
              <PlatformBar 
                name="Samsung TV Plus" 
                percentage={56} 
                colorClass="bg-[#2e2b5e]" // Dark Navy
              />
              <PlatformBar 
                name="Roku" 
                percentage={27} 
                colorClass="bg-[#5651e5]" // Bright Purple/Blue
              />
              <PlatformBar 
                name="Fire TV" 
                percentage={17} 
                colorClass="bg-[#94a3b8]" // Grey
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;
