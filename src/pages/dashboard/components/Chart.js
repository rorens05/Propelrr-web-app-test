import { MDBContainer } from "mdbreact";
import React from "react";
import { Line } from "react-chartjs-2";
import { LINE_CHART_THEME } from "../../../utils/themes";

const DATA = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: "My First dataset",
      borderColor: "rgb(205, 130, 158)",
      ...LINE_CHART_THEME,
    },
  ],
};

export default function Chart() {
  return (
    <MDBContainer className="bg-white py-2 px-3 shadow rounded">
      <Line data={DATA} options={{ responsive: true }} />
    </MDBContainer>
  );
}
