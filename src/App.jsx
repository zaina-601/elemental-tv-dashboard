import React from 'react';
import { User, Monitor, ArrowUpRight } from 'lucide-react';

// --- DESIGN SYSTEM COMPONENTS ---

// 1. Stat Card
const StatCard = ({ label, value, subtext }) => (
  <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100 flex flex-col justify-between h-full relative z-20 hover:-translate-y-1 transition-transform duration-300">
    <div className="flex flex-col gap-2">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
        {value}
      </h3>
    </div>
    <div className="mt-6 pt-4 border-t border-slate-50">
      <p className="text-sm font-semibold text-emerald-600 flex items-center gap-1">
        <ArrowUpRight size={16} />
        {subtext}
      </p>
    </div>
  </div>
);

// 2. Metric Row
const MetricRow = ({ label, value, highlight = false }) => (
  <div className="flex justify-between items-center py-4 border-b border-slate-50 last:border-0 group hover:bg-slate-50/50 transition-colors px-2 -mx-2 rounded-lg">
    <span className={`text-sm ${highlight ? 'font-bold text-slate-800' : 'font-medium text-slate-500'}`}>
      {label}
    </span>
    <span className={`font-bold ${highlight ? 'text-indigo-900 text-lg' : 'text-slate-800'}`}>
      {value}
    </span>
  </div>
);

// 3. Platform Bar
const PlatformBar = ({ name, percentage, colorClass }) => (
  <div className="mb-6 last:mb-0">
    <div className="flex justify-between items-end mb-2">
      <span className="text-sm font-bold text-slate-700">{name}</span>
      <span className="text-sm font-bold text-slate-900">{percentage}%</span>
    </div>
    {/* The Bar Track */}
    <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
      {/* The Filled Bar */}
      <div 
        className={`h-full rounded-full ${colorClass}`} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

// --- MAIN LAYOUT ---

const SalesDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      
      {/* 
        HEADER SECTION 
        - Increased padding-bottom (pb-48) to prevent overlap issues
        - Added a subtle gradient to the background for a premium look
      */}
      <div className="bg-[#1e1b4b] bg-gradient-to-br from-[#1e1b4b] to-[#312e81] pb-48 pt-12 px-4 sm:px-8 relative shadow-xl">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Tag */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-8 border border-white/20 shadow-sm">
            <span className="text-[10px] font-bold text-white tracking-[0.15em] uppercase">Insights Report • Last 30 Days</span>
          </div>
          
          {/* Title Group */}
          <div className="mb-2">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              ElementalTV Sales Research
            </h1>
            <p className="text-indigo-200/80 text-lg max-w-2xl font-light leading-relaxed">
              Analysis of audience reach, viewing behavior, and commercial potential estimates.
            </p>
          </div>
        </div>
      </div>

      {/* 
        CONTENT CONTAINER
        - Negative margin (-mt-24) pulls content up
        - z-20 ensures it floats above the header background
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 -mt-24 pb-20 relative z-20">
        
        {/* TOP STATS GRID - 3 Equal Columns */}
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

        {/* DETAILS GRID - Asymmetric Layout (7 columns / 5 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT PANEL: Audience Snapshot */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col h-full">
            
            {/* Panel Header */}
            <div className="flex items-center gap-3 mb-8 border-b border-slate-50 pb-6">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shadow-sm">
                <User size={24} strokeWidth={2} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Audience Snapshot</h2>
            </div>

            {/* Metrics */}
            <div className="flex-1 flex flex-col justify-center space-y-1">
              
              {/* Highlighted Status Row */}
              <div className="flex justify-between items-start py-5 border-b border-slate-50">
                <div>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Status</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-xl font-extrabold text-slate-900">HHI $100k+</p>
                  </div>
                  <p className="text-sm text-slate-500 font-medium mt-0.5">(High Purchasing Power)</p>
                </div>
                <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest border border-slate-200">
                  Affluent
                </span>
              </div>

              <MetricRow label="Married Households" value="72%" />
              <MetricRow label="Core Age Group" value="25-54" />
              
              {/* Featured Channel Box */}
              <div className="py-6 border-b border-slate-50">
                 <div className="flex justify-between items-center mb-3">
                    <span className="text-slate-500 font-medium text-sm">Flagship Channel</span>
                    <span className="font-bold text-slate-400 text-xs uppercase tracking-[0.2em]">FAWESOME</span>
                 </div>
                 <div className="bg-gradient-to-r from-indigo-50 to-white rounded-xl p-4 border border-indigo-100 shadow-sm">
                    <h4 className="font-bold text-indigo-900 text-center text-lg">Drives 43% of total viewership</h4>
                 </div>
              </div>

              <MetricRow label="Peak Viewing Time" value="7PM - 10PM" />
            </div>
          </div>

          {/* RIGHT PANEL: Platform Breakdown */}
          <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-slate-100 p-8 h-full">
            
            {/* Panel Header */}
            <div className="flex items-center gap-3 mb-10 border-b border-slate-50 pb-6">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 shadow-sm">
                <Monitor size={24} strokeWidth={2} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Platform Breakdown</h2>
            </div>

            {/* Bars */}
            <div className="space-y-8 mt-2">
              <PlatformBar 
                name="Samsung TV Plus" 
                percentage={56} 
                colorClass="bg-[#1e1b4b]" // Matches Header Dark Navy
              />
              <PlatformBar 
                name="Roku" 
                percentage={27} 
                colorClass="bg-[#6366f1]" // Primary Indigo
              />
              <PlatformBar 
                name="Fire TV" 
                percentage={17} 
                colorClass="bg-[#94a3b8]" // Slate Gray
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;
