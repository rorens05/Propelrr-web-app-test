import { MDBCol, MDBRow } from "mdbreact";
import React from "react";
import Chart from "./Chart";
import PieChart from "./PieChart";

export default function MainChart() {
  return (
    <MDBRow className="">
      <MDBCol md="8">
        <Chart />
      </MDBCol>
      <MDBCol md="4">
        <PieChart />
      </MDBCol>
    </MDBRow>
  );
}
