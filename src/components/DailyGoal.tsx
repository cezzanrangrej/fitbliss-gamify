
import React from "react";
import ProgressRing from "./ProgressRing";

interface DailyGoalProps {
  title: string;
  current: number;
  target: number;
  color: string;
  unit: string;
  icon: React.ReactNode;
}

const DailyGoal: React.FC<DailyGoalProps> = ({
  title,
  current,
  target,
  color,
  unit,
  icon,
}) => {
  const progress = Math.min(Math.round((current / target) * 100), 100);
  const isCompleted = progress >= 100;
  
  return (
    <div className="glass-card rounded-2xl p-5 animate-scale-in">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        <div className={`p-1.5 rounded-full ${color.includes('text-teal') ? 'bg-teal-100/50 dark:bg-teal-800/20' : color.includes('text-coral') ? 'bg-coral-100/50 dark:bg-coral-800/20' : 'bg-purple-100/50 dark:bg-purple-800/20'}`}>
          {icon}
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="w-20 h-20 mr-4">
          <ProgressRing
            progress={progress}
            size={80}
            strokeWidth={8}
            color={color.replace('text-', 'text-')}
            label={
              <div className="text-center">
                <span className="block text-sm font-bold">{progress}%</span>
              </div>
            }
          />
        </div>
        <div>
          <div className="text-2xl font-bold">{current.toLocaleString()}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">of {target.toLocaleString()} {unit}</div>
          
          {isCompleted && (
            <div className="mt-1 badge bg-green-100 dark:bg-green-800/20 text-green-700 dark:text-green-300 animate-celebration">
              Complete
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        {isCompleted 
          ? "Great job! You've hit your daily goal!" 
          : `${target - current} more ${unit} to reach your goal`}
      </div>
    </div>
  );
};

export default DailyGoal;
