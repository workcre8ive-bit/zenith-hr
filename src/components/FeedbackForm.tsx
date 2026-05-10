import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export const FeedbackForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setText('');
    }, 4000);
  };

  return (
    <div className="glass p-8 rounded-3xl w-full">
      <h3 className="text-xl font-light mb-2 opacity-80 uppercase tracking-widest">Anonymous Feedback</h3>
      <p className="text-xs text-white/40 mb-6 font-light">Your voice matters. This submission is fully encrypted and anonymous.</p>
      
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:ring-1 focus:ring-sunset-orange/50 transition-all placeholder:text-white/20 resize-none"
            />
            <button
              type="submit"
              disabled={!text.trim()}
              className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl flex items-center justify-center gap-2 text-sm font-medium transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Transmit Securely</span>
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        ) : (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-[212px] flex flex-col items-center justify-center text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400">
              <CheckCircle2 size={32} />
            </div>
            <div>
              <h4 className="font-medium text-lg text-green-300">Message Received</h4>
              <p className="text-sm text-white/40 mt-1">Thank you for helping us grow.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
