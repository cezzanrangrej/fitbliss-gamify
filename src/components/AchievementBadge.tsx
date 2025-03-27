
import React from "react";

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  isUnlocked?: boolean;
  className?: string;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  title,
  description,
  icon,
  color,
  isUnlocked = true,
  className = "",
}) => {
  return (
    <div className={`achievement animate-scale-in ${className} ${!isUnlocked ? 'opacity-50' : ''}`}>
      <div className={`achievement-icon ${color.includes('text-teal') ? 'bg-teal-100/50 dark:bg-teal-800/20' : color.includes('text-coral') ? 'bg-coral-100/50 dark:bg-coral-800/20' : 'bg-purple-100/50 dark:bg-purple-800/20'}`}>
        {icon}
      </div>
      <div>
        <h3 className={`text-sm font-semibold ${isUnlocked ? color : 'text-gray-500'}`}>{title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
      </div>
      {!isUnlocked && (
        <div className="ml-auto">
          <span className="badge bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">Locked</span>
        </div>
      )}
    </div>
  );
};

export default AchievementBadge;
