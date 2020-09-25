import React from "react";
import { Doughnut } from "react-chartjs-2";

const DATA = {
  labels: ["Progress", "Remaining"],
  datasets: [
    {
      data: [75, 25],
      backgroundColor: ["#00ff00"],
      hoverBackgroundColor: ["#00ff00"],
    },
  ],
};

export default function Goal() {
  return (
    <div className="bg-white py-2 px-3 shadow rounded mt-4 dashboard-card">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="float-left font-weight-bold ">
          <span className="blue-grey-text">Sales Goal</span>
        </span>
        <small className="float-right text-black-50">Daily</small>
      </div>
      <Doughnut height="200" data={DATA} options={{ responsive: true }} />
      <h3 className={`text-center mt-1 green-text`}>75%</h3>
      <span className={`text-center d-block mt-1 blue-gray-text`}>
        256 Sales
      </span>
    </div>
  );
}
