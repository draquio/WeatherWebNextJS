"use client";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
const ChartStats = ({ data }) => {
  const filteredData = data.filter((_, index) => index % 2 === 0);
  const info = {
    labels: filteredData.map((entry) => entry.time),
    datasets: [
      {
        data: filteredData.map((entry) => entry.temp),
        fill: true,
        backgroundColor: "rgba(253, 184, 39, 0.3)",
        borderColor: "rgba(253, 184, 39)",
        pointBackgroundColor: "rgba(253, 184, 39)",
        pointBorderColor: "#fff",
        pointRadius: 4,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        display: false,
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#ffffff",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: "#ffffff",
        display: true,
        formatter: (value) => `${value}°C`,
        align: "bottom",
        anchor: "start",
        clamp: true,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="h-[200px] mt-5 mb-10">
      <h2 className="text-2xl my-7 font-sans leading-[0]">Hoy</h2>
      <Line
        data={info}
        options={options}
        // height={30}
        plugins={[ChartDataLabels]}
      />
    </div>
  );
};

export default ChartStats;
