
import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  subtitle?: string;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  color,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`glass-card rounded-2xl overflow-hidden animate-fade-in ${className}`}>
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
            <p className={`mt-2 text-3xl font-bold ${color}`}>{value}</p>
            {subtitle && <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>}
          </div>
          <div className={`p-2 rounded-full ${color.includes('text-teal') ? 'bg-teal-100/50 dark:bg-teal-800/20' : color.includes('text-coral') ? 'bg-coral-100/50 dark:bg-coral-800/20' : 'bg-purple-100/50 dark:bg-purple-800/20'}`}>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
