import { useState } from "react";
import StatsCards from "./screencomponents/LandingPage/DashBoard/bento-cards/centre4";
import { analyticsData } from "./Data/CardData";

function App() {
  const [selectedYear, setSelectedYear] = useState<2023 | 2024 | 2025>(2025);

  return (
    <div className="min-h-screen bg-black">
      <select
        value={selectedYear}
        className="ml-[20%] bg-white mt-[2%] "
        onChange={(e) =>
          setSelectedYear(Number(e.target.value) as 2023 | 2024 | 2025)
        }
      >
        <option value={2023}>2023</option>
        <option value={2024}>2024</option>
        <option value={2025}>2025</option>
      </select>

      <StatsCards data={analyticsData[selectedYear].cards}
      monthlyTrend={analyticsData[selectedYear].monthlyTrend}
      />
      
    </div>
  );
}

export default App;