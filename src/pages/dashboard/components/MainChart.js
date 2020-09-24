import { MDBCol, MDBRow } from "mdbreact";
import React from "react";
import Chart from "./Chart";
export default function MainChart() {
  return (
    <MDBRow className="mt-3">
      <MDBCol sm="8">
        <Chart />
      </MDBCol>
      <MDBCol sm="4">4</MDBCol>
    </MDBRow>
  );
}
