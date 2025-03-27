
import React, { useState } from "react";
import Layout from "../components/Layout";
import StatsCard from "../components/StatsCard";
import ProgressRing from "../components/ProgressRing";
import AchievementBadge from "../components/AchievementBadge";
import WeeklyChart from "../components/WeeklyChart";
import DailyGoal from "../components/DailyGoal";

const Dashboard = () => {
  const [chartDataKey, setChartDataKey] = useState<"steps" | "calories">("steps");
  
  // Mock data
  const weeklyData = [
    { name: "Mon", steps: 7500, calories: 420 },
    { name: "Tue", steps: 9200, calories: 370 },
    { name: "Wed", steps: 10500, calories: 510 },
    { name: "Thu", steps: 8700, calories: 390 },
    { name: "Fri", steps: 11200, calories: 550 },
    { name: "Sat", steps: 8900, calories: 480 },
    { name: "Sun", steps: 8500, calories: 460 },
  ];
  
  // Today's date in a nice format
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight animate-fade-in">Hello, Runner</h1>
        <p className="text-gray-500 dark:text-gray-400 animate-fade-in">{today}</p>
      </div>

      <section className="mb-10 animate-slide-up delay-100">
        <h2 className="text-xl font-semibold mb-4">Today's Activity</h2>
        <div className="stats-container">
          <StatsCard
            title="Steps"
            value="9,248"
            subtitle="Goal: 10,000 steps"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-500">
                <path d="M19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3C17.8807 3 19 4.11929 19 5.5Z" fill="currentColor"/>
                <path d="M9 8.5C9 9.88071 7.88071 11 6.5 11C5.11929 11 4 9.88071 4 8.5C4 7.11929 5.11929 6 6.5 6C7.88071 6 9 7.11929 9 8.5Z" fill="currentColor"/>
                <path d="M19 17.5C19 18.8807 17.8807 20 16.5 20C15.1193 20 14 18.8807 14 17.5C14 16.1193 15.1193 15 16.5 15C17.8807 15 19 16.1193 19 17.5Z" fill="currentColor"/>
                <path d="M9 20.5C9 21.8807 7.88071 23 6.5 23C5.11929 23 4 21.8807 4 20.5C4 19.1193 5.11929 18 6.5 18C7.88071 18 9 19.1193 9 20.5Z" fill="currentColor"/>
                <path d="M12.7823 5.08988C11.9771 5.32048 11.3539 6.02985 11.3072 6.88797L11.0325 12.3235C11.0072 12.8109 11.364 13.2403 11.8488 13.3035L12.4484 13.3818C12.5691 13.3969 12.6913 13.3935 12.8104 13.372L17.3621 12.6562C18.2551 12.5146 18.8412 11.6456 18.5282 10.8086L16.4552 5.72574C16.1084 4.80009 15.0351 4.33736 14.1134 4.6837L12.7823 5.08988Z" fill="currentColor"/>
                <path d="M7.12933 11.7723C6.38371 12.041 5.90865 12.7841 5.97253 13.5683L6.27541 17.5271C6.35522 18.5124 7.25784 19.2366 8.24621 19.1617L9.56221 19.0625C9.70038 19.0517 9.83665 19.0226 9.96686 18.9759L13.0733 17.8426C13.9294 17.5628 14.3526 16.6179 14.0463 15.7704L12.4876 11.6086C12.1493 10.6744 11.0531 10.2142 10.1147 10.5447L7.12933 11.7723Z" fill="currentColor"/>
              </svg>
            }
            color="text-teal-600 dark:text-teal-400"
          />
          <StatsCard
            title="Calories Burned"
            value="482"
            subtitle="78% of daily goal"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-coral-500">
                <path d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            color="text-coral-600 dark:text-coral-400"
          />
          <StatsCard
            title="Activity Streak"
            value="8 days"
            subtitle="Keep it up!"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-500">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            color="text-purple-600 dark:text-purple-400"
          />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Daily Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DailyGoal
            title="Steps Goal"
            current={9248}
            target={10000}
            color="text-teal-600 dark:text-teal-400"
            unit="steps"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-500">
                <path d="M19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3C17.8807 3 19 4.11929 19 5.5Z" fill="currentColor"/>
                <path d="M9 8.5C9 9.88071 7.88071 11 6.5 11C5.11929 11 4 9.88071 4 8.5C4 7.11929 5.11929 6 6.5 6C7.88071 6 9 7.11929 9 8.5Z" fill="currentColor"/>
                <path d="M19 17.5C19 18.8807 17.8807 20 16.5 20C15.1193 20 14 18.8807 14 17.5C14 16.1193 15.1193 15 16.5 15C17.8807 15 19 16.1193 19 17.5Z" fill="currentColor"/>
                <path d="M9 20.5C9 21.8807 7.88071 23 6.5 23C5.11929 23 4 21.8807 4 20.5C4 19.1193 5.11929 18 6.5 18C7.88071 18 9 19.1193 9 20.5Z" fill="currentColor"/>
                <path d="M12.7823 5.08988C11.9771 5.32048 11.3539 6.02985 11.3072 6.88797L11.0325 12.3235C11.0072 12.8109 11.364 13.2403 11.8488 13.3035L12.4484 13.3818C12.5691 13.3969 12.6913 13.3935 12.8104 13.372L17.3621 12.6562C18.2551 12.5146 18.8412 11.6456 18.5282 10.8086L16.4552 5.72574C16.1084 4.80009 15.0351 4.33736 14.1134 4.6837L12.7823 5.08988Z" fill="currentColor"/>
                <path d="M7.12933 11.7723C6.38371 12.041 5.90865 12.7841 5.97253 13.5683L6.27541 17.5271C6.35522 18.5124 7.25784 19.2366 8.24621 19.1617L9.56221 19.0625C9.70038 19.0517 9.83665 19.0226 9.96686 18.9759L13.0733 17.8426C13.9294 17.5628 14.3526 16.6179 14.0463 15.7704L12.4876 11.6086C12.1493 10.6744 11.0531 10.2142 10.1147 10.5447L7.12933 11.7723Z" fill="currentColor"/>
              </svg>
            }
          />
          <DailyGoal
            title="Calories Goal"
            current={482}
            target={620}
            color="text-coral-600 dark:text-coral-400"
            unit="calories"
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-coral-500">
                <path d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="lg:col-span-2">
          <WeeklyChart 
            data={weeklyData}
            activeDataKey={chartDataKey}
            onChangeDataKey={setChartDataKey}
          />
        </div>
        <div className="glass-card rounded-2xl p-5 animate-slide-right">
          <h3 className="text-lg font-semibold mb-4">Achievements</h3>
          <div className="space-y-3">
            <AchievementBadge
              title="Early Bird"
              description="Complete a workout before 7am"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-500">
                  <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.05493 11.0908C3.27802 8.58244 4.51972 6.27896 6.50445 4.76344C8.48919 3.24791 11.0337 2.62507 13.5335 3.04922C16.0334 3.47337 18.2073 4.90683 19.4815 6.96311C20.7557 9.01939 21.0071 11.4839 20.1677 13.7501C19.3283 16.0162 17.4739 17.8436 15.1717 18.7801C12.8695 19.7166 10.2761 19.6746 8.00532 18.6631C5.73449 17.6516 3.94556 15.7604 3.18257 13.4487C2.41959 11.137 2.73939 8.62372 4.05938 6.55328" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              color="text-teal-600 dark:text-teal-400"
            />
            <AchievementBadge
              title="Step Master"
              description="Walk 10,000 steps in one day"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-coral-500">
                  <path d="M19.2 5.79999L20.5 4.49999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.8 5.79999H20.5V9.49999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.2 18.2L20.5 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.8 18.2H20.5V14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.8 5.79999L3.5 4.49999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.2 5.79999H3.5V9.49999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.8 18.2L3.5 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.2 18.2H3.5V14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              color="text-coral-600 dark:text-coral-400"
              isUnlocked={false}
            />
            <AchievementBadge
              title="Week Warrior"
              description="Exercise for 5 days straight"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-500">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              color="text-purple-600 dark:text-purple-400"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
