"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Statistic {
  _id: string;
  value: number;
  label: string;
  suffix: string;
  order: number;
  isActive: boolean;
}

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

function StatItem({ value, label, suffix = "", duration = 2 }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = Math.round((duration * 1000) / 16); // 60fps
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(end * (1 - Math.pow(1 - progress, 3))); // easeOutCubic
        setCount(currentCount);

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, 16);

      return () => clearInterval(counter);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2 font-mono">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base font-medium text-slate-600 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export function AnimatedStats() {
  const [statistics, setStatistics] = useState<Statistic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {
    try {
      const response = await fetch('/api/statistics');
      const data = await response.json();
      setStatistics(data.statistics || []);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || statistics.length === 0) {
    return null; // Don't show anything if loading or no statistics
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {statistics.map((stat, index) => (
        <motion.div
          key={stat._id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <StatItem 
            value={stat.value}
            label={stat.label}
            suffix={stat.suffix}
          />
        </motion.div>
      ))}
    </div>
  );
}
