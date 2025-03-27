
import React, { useEffect, useState } from "react";

interface ProgressRingProps {
  progress: number;
  size: number;
  strokeWidth: number;
  color: string;
  bgColor?: string;
  label?: string;
  animate?: boolean;
}

const ProgressRing: React.FC<ProgressRingProps> = ({
  progress,
  size,
  strokeWidth,
  color,
  bgColor = "text-gray-200 dark:text-gray-800",
  label,
  animate = true,
}) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  
  // Calculate circle properties
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (currentProgress / 100) * circumference;
  
  // Center position
  const center = size / 2;
  
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setCurrentProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setCurrentProgress(progress);
    }
  }, [progress, animate]);

  return (
    <div className="progress-ring-container" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute"
      >
        <circle
          className={`${bgColor}`}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="none"
        />
        <circle
          className={`progress-ring-progress ${color}`}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            "--initial-offset": `${circumference}`,
            "--target-offset": `${offset}`,
          } as React.CSSProperties}
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>
      {label && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {label}
        </div>
      )}
    </div>
  );
};

export default ProgressRing;
