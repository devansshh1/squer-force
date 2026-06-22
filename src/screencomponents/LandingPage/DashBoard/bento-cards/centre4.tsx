import {
  Phone,
  Check,
  TrendingUp,
  Clock,
} from "lucide-react";

type Card = {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
};

const stats: Card[] = [
  {
    title: "Total Calls",
    value: "15",
    subtitle: "In selected period",
    icon: <Phone size={18} />,
  },
  {
    title: "Completed Calls",
    value: "4",
    subtitle: "Successfully completed",
    icon: <Check size={18} />,
  },
  {
    title: "Success Rate",
    value: "0.0%",
    subtitle: "Call completion rate",
    icon: <TrendingUp size={18} />,
  },
  {
    title: "Avg Duration",
    value: "0.45 min",
    subtitle: "Average call length",
    icon: <Clock size={18} />,
  },
];

export default function StatsCards() {
  return (
    <section className="w-full py-8 ">
      <div className="flex gap-10 ml-[40%] mt-[10%] ">
        {stats.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-green-900/40 bg-[#08120A] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-green-500/50 hover:shadow-green-900/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-300">
                {card.title}
              </h3>

              <div className="rounded-full border border-green-700/40 p-2 text-green-400">
                {card.icon}
              </div>
            </div>

            {/* Main Value */}
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
    </section>
  );
}