
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ChartData {
  name: string;
  steps: number;
  calories: number;
}

interface WeeklyChartProps {
  data: ChartData[];
  activeDataKey: "steps" | "calories";
  onChangeDataKey: (dataKey: "steps" | "calories") => void;
}

const WeeklyChart: React.FC<WeeklyChartProps> = ({ 
  data, 
  activeDataKey,
  onChangeDataKey 
}) => {
  return (
    <div className="chart-container animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Weekly Progress</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => onChangeDataKey("steps")}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              activeDataKey === "steps"
                ? "bg-teal-100 dark:bg-teal-800/30 text-teal-700 dark:text-teal-300"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            }`}
          >
            Steps
          </button>
          <button
            onClick={() => onChangeDataKey("calories")}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              activeDataKey === "calories"
                ? "bg-coral-100 dark:bg-coral-800/30 text-coral-700 dark:text-coral-300"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            }`}
          >
            Calories
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            hide={true}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "10px 14px"
            }}
            cursor={{ fill: 'rgba(230, 230, 230, 0.2)' }}
          />
          {activeDataKey === "steps" ? (
            <Bar 
              dataKey="steps" 
              fill="#3DBBB4" 
              radius={[4, 4, 0, 0]} 
              animationDuration={1000}
            />
          ) : (
            <Bar 
              dataKey="calories" 
              fill="#FF7F73" 
              radius={[4, 4, 0, 0]} 
              animationDuration={1000}
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyChart;
