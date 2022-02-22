import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = ({ chartData }) => {
  let MAX_VALUE = 0;
  //get max value
  const dataValues = chartData.map((data) => data.value);

  MAX_VALUE = Math.max(...dataValues);

  return (
    <div className="chart">
      {chartData.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={MAX_VALUE}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
