/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Background } from './components/Background';
import { MoodTracker } from './components/MoodTracker';
import { TeamHarmony } from './components/TeamHarmony';
import { GrowthTimeline } from './components/GrowthTimeline';
import { FeedbackForm } from './components/FeedbackForm';
import { RecognitionWall } from './components/RecognitionWall';
import { Bell, Search, User, LogOut } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-sunset-orange/30">
      <Background />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 px-8 flex items-center justify-between backdrop-blur-md border-bottom border-white/5 bg-black/10">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sunset-orange to-sunset-purple shadow-lg shadow-sunset-orange/20" />
            <span className="text-xl font-semibold tracking-tight">ZENITH<span className="text-white/40">HR</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            <a href="#" className="text-white hover:text-white transition-colors">Dashboard</a>
            <a href="#" className="hover:text-white transition-colors">People</a>
            <a href="#" className="hover:text-white transition-colors">Insights</a>
            <a href="#" className="hover:text-white transition-colors">Benefits</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/60 hover:text-white">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors relative text-white/60 hover:text-white">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-sunset-orange rounded-full" />
          </button>
          <div className="h-8 w-px bg-white/10 mx-2" />
          <div className="flex items-center gap-3 pl-2 group cursor-pointer">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-medium">Alex Chen</p>
              <p className="text-[10px] text-white/40 uppercase tracking-tighter">Product Designer</p>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden bg-white/5 flex items-center justify-center group-hover:border-sunset-orange transition-colors">
              <User size={20} className="text-white/40" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-28 pb-12 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        
        {/* Left Column (Main) */}
        <div className="md:col-span-8 flex flex-col gap-6 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2"
          >
            <h1 className="text-4xl lg:text-5xl font-light tracking-tight">
              Good Morning, <span className="font-semibold italic text-glow">Alex.</span>
            </h1>
            <p className="text-white/40 font-light">It's Saturday, May 19th. Your team is currently in high harmony.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <MoodTracker />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="h-full"
            >
              <TeamHarmony />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="h-full"
            >
              <RecognitionWall />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <FeedbackForm />
          </motion.div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="md:col-span-4 flex flex-col gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GrowthTimeline />
          </motion.div>

          {/* Activity Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="glass p-8 rounded-3xl"
          >
            <h3 className="text-xl font-light mb-6 opacity-80 uppercase tracking-widest">Office Pulse</h3>
            <div className="space-y-6">
              {[
                { title: 'New Peer Review', time: '2m ago', desc: 'Sarah left you a review', type: 'Review' },
                { title: 'Goal Achieved', time: '1h ago', desc: 'SaaS metrics +14%', type: 'Goal' },
                { title: 'HR Update', time: '3h ago', desc: 'Zenith-HR 2.0 is live', type: 'System' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="w-1 h-10 rounded-full bg-white/5 group-hover:bg-sunset-orange transition-colors" />
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] tracking-widest uppercase opacity-40">{item.type}</span>
                      <span className="text-[10px] opacity-20">{item.time}</span>
                    </div>
                    <h5 className="text-sm font-medium">{item.title}</h5>
                    <p className="text-xs text-white/30 font-light mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            <button className="flex-1 glass py-4 rounded-2xl text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all">Support</button>
            <button className="flex-1 bg-white/5 hover:bg-red-500/10 border border-white/5 hover:border-red-500/20 py-4 rounded-2xl text-[10px] uppercase tracking-[0.2em] font-bold text-red-500/60 hover:text-red-500 transition-all flex items-center justify-center gap-2">
              <LogOut size={12} />
              Logout
            </button>
          </motion.div>
        </div>
      </main>

      {/* Mobile Nav Overlay (Simulated) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 h-16 glass rounded-full flex items-center justify-around px-6 z-50">
        <User size={20} className="text-sunset-orange" />
        <Bell size={20} className="opacity-40" />
        <Search size={20} className="opacity-40" />
        <LogOut size={20} className="opacity-40" />
      </div>
    </div>
  );
}
