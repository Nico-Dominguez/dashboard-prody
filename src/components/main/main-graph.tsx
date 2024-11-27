import React, { useEffect, useState } from "react";

interface chartData {
  month: string;
  value: number;
}

const MainGraph = () => {
  const [chartUrl, setChartUrl] = useState<string>("");

  const generateChartUrl = () => {
    const data: chartData[] = [
      { month: "Jan", value: 65 },
      { month: "Feb", value: 59 },
      { month: "Mar", value: 80 },
      { month: "Apr", value: 81 },
      { month: "May", value: 56 },
      { month: "Jun", value: 85 },
    ];

    const chartConfig = {
      type: "line",
      data: {
        labels: data.map((item) => item.month),
        datasets: [
          {
            label: "Monthly Performance",
            data: data.map((item) => item.value),
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const url = `https://quickchart.io/chart?c=${encodeURIComponent(
      JSON.stringify(chartConfig)
    )}&width=800&height=400`;
    setChartUrl(url);
  };

  useEffect(() => {
    generateChartUrl();
  }, []);

  return (
    <div className="w-full aspect-[2/1] bg-white rounded-lg shadow-sm p-4">
      {chartUrl && (
        <img
          src={chartUrl}
          alt="Monthly Performance Chart"
          className="w-full h-full object-contain"
        />
      )}
    </div>
  );
};

export default MainGraph;
