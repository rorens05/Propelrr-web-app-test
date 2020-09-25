import React from "react";
import { Line } from "react-chartjs-2";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { Navigation } from "../../components/navigation";
import { DASHBOARD } from "../../utils/contants";
import { Summary } from "./components/Summary";
import MainChart from "./components/MainChart";
import { DashboardCards } from "./components/DashboardCards";

class Dashboard extends React.Component {
  render() {
    return (
      <Navigation active={DASHBOARD}>
        <MDBContainer>
          <Summary />
          <MainChart />
          <DashboardCards />
        </MDBContainer>
      </Navigation>
    );
  }
}

export default Dashboard;
