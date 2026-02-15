'use client';

import React from 'react';
import { 
  Award, 
  ChevronRight, 
  X, 
  Download, 
  Quote, 
  Globe,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CaseSeqTile from './components/CaseSeqTile';

export default function App() {
  return (
    <div className="min-h-screen bg-[#101c22] font-display antialiased flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 opacity-[0.15] blur-3xl pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#13a4ec] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#a855f7] rounded-full translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* Main Modal Surface */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-6xl bg-[#111c22]/80 backdrop-blur-2xl border border-[#325567]/30 rounded-2xl overflow-hidden shadow-[0_32px_128px_-16px_rgba(0,0,0,0.8)] flex flex-col max-h-[92vh]"
      >
        
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#325567]/20 px-8 py-5 shrink-0 bg-[#111c22]/40">
          <div className="flex items-center gap-4">
            <div className="bg-[#13a4ec]/10 p-2.5 rounded-xl border border-[#13a4ec]/20 shadow-[0_0_20px_rgba(19,164,236,0.1)]">
              <Award className="w-6 h-6 text-[#13a4ec]" />
            </div>
            <div>
              <h2 className="text-white text-lg font-extrabold leading-tight tracking-tight">Case Optimization</h2>
              <div className="flex items-center gap-2 text-[10px] font-bold text-[#92b7c9] uppercase tracking-widest opacity-70">
                <span>Lifecycle</span>
                <ChevronRight className="w-3 h-3" />
                <span>Advocacy Loop</span>
              </div>
            </div>
          </div>
          <button className="p-2 rounded-full hover:bg-white/5 text-[#92b7c9] hover:text-white transition-all">
            <X className="w-6 h-6" />
          </button>
        </header>

        {/* Content Wrapper */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
          
          {/* Headline Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-3 py-1 rounded-full bg-[#13a4ec]/10 text-[#13a4ec] text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-[#13a4ec]/20"
              >
                Growth Marketing Case Study
              </motion.span>
              <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6">
                Turning Passive Users into <br/>
                <span className="bg-gradient-to-r from-[#13a4ec] via-[#a855f7] to-[#d946ef] bg-clip-text text-transparent">Brand Champions</span>
              </h1>
              <p className="text-[#92b7c9] text-xl leading-relaxed max-w-2xl font-medium">
                We engineered a high-velocity referral engine that incentivized every touchpoint, reducing customer acquisition costs by nearly 20%.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-auto shrink-0">
              <button className="group flex items-center justify-center gap-3 rounded-2xl h-14 px-8 bg-white text-[#101c22] text-sm font-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_8px_32px_rgba(255,255,255,0.1)]">
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Full Strategy PDF</span>
              </button>
              <button className="flex items-center justify-center gap-3 rounded-2xl h-14 px-8 bg-[#233c48] text-white text-sm font-bold border border-[#325567]/50 hover:bg-[#325567]/80 transition-all">
                <span>View Raw Data</span>
              </button>
            </div>
          </div>

          {/* Core Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { label: "Viral Growth", value: "+35%", desc: "MoM Referral Leads", color: "#13a4ec" },
              { label: "CAC Reduction", value: "-18%", desc: "Cost per Activation", color: "#fa5f38" },
              { label: "Avg. NPS", value: "78.2", desc: "User Satisfaction Score", color: "#0bda57" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col gap-2 rounded-2xl p-8 border border-[#325567]/30 bg-[#111c22]/50 hover:border-[#13a4ec]/30 transition-all"
              >
                <div className="absolute top-4 right-6 text-[10px] font-black uppercase opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: stat.color }}>
                  Verified
                </div>
                <p className="text-[#92b7c9] text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                <p className="text-white tracking-tighter text-5xl font-black">{stat.value}</p>
                <p className="text-[#92b7c9] text-sm font-medium mt-1">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Interactive Visualization Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Visualizer */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-2xl font-black tracking-tight flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#13a4ec] rounded-full" />
                  Referral Cycle Strategy
                </h3>
              </div>
              <div className="flex-1 w-full flex items-center justify-center bg-[#101c22]/80 rounded-3xl border border-[#325567]/30 shadow-inner group overflow-hidden">
                <CaseSeqTile />
              </div>
            </div>

            {/* Testimonial & Narrative */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <h3 className="text-white text-2xl font-black tracking-tight flex items-center gap-3">
                <div className="w-2 h-8 bg-[#a855f7] rounded-full" />
                Strategic Impact
              </h3>
              
              <div className="flex-1 bg-gradient-to-br from-[#1a2c38] to-[#111c22] border border-[#325567]/40 rounded-3xl p-10 flex flex-col gap-10 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 opacity-[0.03]">
                  <Quote className="w-64 h-64 text-white transform rotate-12" />
                </div>
                
                <p className="text-white text-2xl font-medium italic leading-relaxed relative z-10">
                  &quot;This loop didn&apos;t just grow our leads; it transformed how we view our customers. They are now our most effective marketing department.&quot;
                </p>
                
                <div className="flex items-center gap-5 pt-8 border-t border-[#325567]/30 mt-auto">
                  <div className="relative">
                    <img 
                      alt="CMO" 
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-[#13a4ec]/30 shadow-xl" 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#0bda57] rounded-full border-2 border-[#111c22]" />
                  </div>
                  <div>
                    <p className="text-white font-black text-lg">Sarah Jenkins</p>
                    <p className="text-[#92b7c9] text-sm font-bold uppercase tracking-wider opacity-80">CMO @ SaaSify Global</p>
                  </div>
                </div>
              </div>

              {/* Call to Action Card */}
              <div className="bg-[#13a4ec] rounded-3xl p-10 text-[#101c22] flex flex-col gap-6 shadow-[0_20px_40px_rgba(19,164,236,0.3)] group cursor-pointer hover:scale-[1.01] transition-transform">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-black tracking-tight">Scale Your Growth?</h4>
                  <div className="bg-white/20 p-3 rounded-2xl">
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <p className="font-bold opacity-80 leading-snug">
                  Our advocacy strategies are custom-built for high-ticket SaaS products. Book your strategy session today.
                </p>
                <div className="flex -space-x-3 mt-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#13a4ec] bg-[#1a2c38] overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#13a4ec] bg-white flex items-center justify-center text-[10px] font-black">
                    +12k
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Footer */}
        <footer className="bg-[#111c22]/80 backdrop-blur-xl border-t border-[#325567]/20 px-12 py-6 flex flex-col md:flex-row justify-between items-center shrink-0 gap-4">
          <div className="flex items-center gap-6">
            <p className="text-[#92b7c9] text-[10px] font-bold uppercase tracking-[0.2em]">Lifecycle Agency © 2024</p>
            <div className="h-4 w-px bg-[#325567]/40 hidden md:block" />
            <div className="flex gap-4">
               <Globe className="w-4 h-4 text-[#92b7c9]" />
               <span className="text-[#92b7c9] text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors cursor-pointer">Global Operations</span>
            </div>
          </div>
          <div className="flex gap-8">
            <span className="text-[#92b7c9] text-[10px] font-black uppercase tracking-widest hover:text-[#13a4ec] cursor-pointer transition-colors">Privacy</span>
            <span className="text-[#92b7c9] text-[10px] font-black uppercase tracking-widest hover:text-[#13a4ec] cursor-pointer transition-colors">Compliance</span>
            <span className="text-[#92b7c9] text-[10px] font-black uppercase tracking-widest hover:text-[#13a4ec] cursor-pointer transition-colors">Support</span>
          </div>
        </footer>

      </motion.div>
    </div>
  );
}
