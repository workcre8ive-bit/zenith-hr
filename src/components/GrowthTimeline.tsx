import React from 'react';
import { motion } from 'motion/react';
import { Target, Flag, Briefcase, Award } from 'lucide-react';

const milestones = [
  { date: 'SEP 2025', title: 'Onboarded', description: 'Joined the Zenith family as a Senior Product Designer.', icon: Briefcase },
  { date: 'DEC 2025', title: 'First Major Release', description: 'Led the redesign of the internal ops layer.', icon: Target },
  { date: 'MAR 2026', title: 'Senior Associate', description: 'Promoted for exceptional leadership in design systems.', icon: Award },
  { date: 'JUN 2026', title: 'Vision Quest', description: 'Heading the upcoming employee portal expansion.', icon: Flag },
];

export const GrowthTimeline: React.FC = () => {
  return (
    <div className="glass p-8 rounded-3xl w-full">
      <h3 className="text-xl font-light mb-8 opacity-80 uppercase tracking-widest">Personal Growth</h3>
      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-white/10">
        {milestones.map((milestone, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="flex items-start gap-6"
          >
            <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-deep-indigo border border-white/20 text-sunset-orange shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <milestone.icon size={18} />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                {milestone.date}
              </span>
              <h4 className="text-lg font-medium mt-1">{milestone.title}</h4>
              <p className="text-sm text-white/50 font-light leading-relaxed mt-2">
                {milestone.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
