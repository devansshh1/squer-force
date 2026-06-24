import {
  Phone,
  Check,
  TrendingUp,
  Clock,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type StatsData = {
  totalCalls: number;
  completedCalls: number;
  successRate: number;
  avgDuration: number;
};

type MonthlyTrend = {
  month: string;
  calls: number;
};

type Props = {
  data: StatsData;
  monthlyTrend: MonthlyTrend[];
};
export default function StatsCards({
  data,
  monthlyTrend,
}: Props) {
  const stats = [
    {
      title: "Total Calls",
      value: data.totalCalls,
      subtitle: "In selected period",
      icon: <Phone size={18} />,
    },
    {
      title: "Completed Calls",
      value: data.completedCalls,
      subtitle: "Successfully completed",
      icon: <Check size={18} />,
    },
    {
      title: "Success Rate",
      value: `${data.successRate}%`,
      subtitle: "Call completion rate",
      icon: <TrendingUp size={18} />,
    },
    {
      title: "Avg Duration",
      value: `${data.avgDuration} min`,
      subtitle: "Average call length",
      icon: <Clock size={18} />,
    },
  ];

  return (
    <section className="w-full py-8">
      {/* Cards */}
      <div className="flex gap-10 ml-[40%] mt-[10%]">
        {stats.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-green-900/40 bg-[#08120A] p-6 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-300">
                {card.title}
              </h3>

              <div className="rounded-full border border-green-700/40 p-2 text-green-400">
                {card.icon}
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-4xl font-bold text-white">
                {card.value}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Graph */}
      <div className="mt-16 mx-auto w-[90%] rounded-2xl border border-green-900/40 bg-[#08120A] p-6">
        <h2 className="text-xl font-semibold text-white mb-2">
          Monthly Call Trends
        </h2>

        <p className="text-gray-400 text-sm mb-6">
          Call volume trends by month
        </p>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="calls"
                stroke="#22c55e"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}