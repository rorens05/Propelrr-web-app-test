import React from "react";
import { Line } from "react-chartjs-2";
import { LINE_CHART_THEME } from "../../../../utils/themes";

const DATA = {
  labels: ["", "", "", "", ""],
  datasets: [
    {
      label: "Month Progress",
      data: [40, 44, 60, 80, 100],
      borderColor: ["#0000ff"],
      ...LINE_CHART_THEME,
    },
  ],
};

export default function MonthlyGoal() {
  return (
    <div className="bg-white py-2 px-3 shadow rounded mt-4 dashboard-card">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="float-left font-weight-bold ">
          <span className="blue-grey-text">Month Progress</span>
        </span>
        <small className="float-right text-black-50">Daily</small>
      </div>
      <Line data={DATA} options={{ responsive: true }} height="200" />
      <h3 className={`text-center mt-1 blue-text`}>6,056</h3>
      <span className={`text-center d-block mt-1 blue-gray-text`}>
        PHP 861,056
      </span>
    </div>
  );
}
