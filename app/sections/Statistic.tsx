import StatisticComponent from "@/components/StatisticComponent";
import data from "@/app/files/data.json";

const Statistic = () => {
  return (
    <div>
      <StatisticComponent title="Upload stats" stats={data} />
    </div>
  );
};

export default Statistic;
