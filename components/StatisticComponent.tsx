import React, { FC } from "react";

interface statisticStats {
  id: number;
  label: string;
  percentage: number;
}
interface statisticProps {
  stats: statisticStats[];
  title: string;
  className?: string;
}

const colors = ["bg-blue-500", "bg-violet-400", "bg-pink-500", "bg-teal-300"];

const StatisticComponent: FC<statisticProps> = ({
  stats,
  title,
  className,
}) => {
  return (
    <section className="bg-white w-350 h-180 m-auto my-12 rounded-lg flex flex-col items-center">
      {title && <h2 className="font-bold m-10">{title}</h2>}

      <ul className="flex">
        {stats.map((stat) => (
          <li
            className={`flex flex-col space-x-6 p-0.5 ${
              colors[stat.id % colors.length]
            }`}
          >
            <span className="m-4 text-white">{stat.label}</span>
            <span className="text-white">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StatisticComponent;
