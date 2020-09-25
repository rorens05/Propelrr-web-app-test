import { MDBBtn, MDBContainer } from "mdbreact";
import React from "react";
import { Line } from "react-chartjs-2";
import { LINE_CHART_THEME } from "../../../utils/themes";

const DATA = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      data: [10, 16, 18, 5, 10, 17, 1],
      label: "Lost",
      borderColor: "rgb(255, 0, 0)",
      ...LINE_CHART_THEME,
    },
    {
      data: [30, 35, 38, 46, 41, 50, 61],
      label: "Sales",
      borderColor: "rgb(0, 255, 0)",
      ...LINE_CHART_THEME,
    },
  ],
};

export default function Chart() {
  return (
    <MDBContainer className="bg-white py-2 px-3 shadow rounded pt-3 chart-container mt-4">
      <h4 className="font-weight-bold blue-grey-text">
        Sales for the last 6 months
      </h4>
      <hr className="mb-2" />
      <MDBBtn
        size="sm"
        className="rounded-pill shadow-none border"
        color="info"
      >
        Last 30 Days
      </MDBBtn>
      <MDBBtn
        size="sm"
        className="rounded-pill shadow-none border"
        color="none"
      >
        Last 3 Months
      </MDBBtn>
      <MDBBtn
        size="sm"
        className="rounded-pill shadow-none border"
        color="none"
      >
        Last 6 Months
      </MDBBtn>
      <Line
        className="mt-1"
        data={DATA}
        options={{ responsive: true }}
        height="200"
        maintainAspectRatio={false}
      />
    </MDBContainer>
  );
}
