import React, { useEffect, useState } from "react";

interface chartData {
  month: string;
  dataset1: number;
  dataset2: number;
  dataset3: number;
}

const MainGraph = () => {
  const [chartUrl, setChartUrl] = useState<string>("");

  const generateChartUrl = () => {
    const data: chartData[] = [
      { month: "January", dataset1: -33, dataset2: -42, dataset3: 93 },
      { month: "February", dataset1: 26, dataset2: 73, dataset3: 60 },
      { month: "March", dataset1: 29, dataset2: -69, dataset3: -15 },
      { month: "April", dataset1: 89, dataset2: -94, dataset3: 77 },
      { month: "May", dataset1: -41, dataset2: -81, dataset3: -59 },
      { month: "June", dataset1: 70, dataset2: 18, dataset3: 82 },
      { month: "July", dataset1: -84, dataset2: 87, dataset3: -44 },
    ];

    const chartConfig = {
      type: "line",
      data: {
        labels: data.map((item) => item.month),
        datasets: [
          {
            label: "Monthly Performance",
            data: data.map((item) => item.dataset1),
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
          {
            label: "Dataset 2",
            data: data.map((item) => item.dataset2),
            fill: false,
            borderDash: [5, 5],
            pointRadius: [2, 4, 6, 18, 0, 12, 20],
            borderColor: "rgb(255, 99, 132)",
            tension: 0.1,
          },
          {
            type: "bar",
            label: "Dataset 3",
            data: data.map((item) => item.dataset3),
            fill: false,
            borderColor: "rbg(54, 162, 235)",
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
    <div className="w-full aspect-[2/1] bg-white rounded-lg p-4">
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
