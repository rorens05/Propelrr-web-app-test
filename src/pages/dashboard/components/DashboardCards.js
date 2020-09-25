import { MDBCol, MDBRow } from "mdbreact";
import React, { Component } from "react";
import { connect } from "react-redux";
import Activity from "./dashboard_cards/Activity";
import Goal from "./dashboard_cards/Goal";
import MonthlyGoal from "./dashboard_cards/MonthlyGoal";
import Tasks from "./dashboard_cards/Tasks";

export const DashboardCards = () => {
  return (
    <MDBRow className="">
      <MDBCol md="3">
        <Goal
          textStyle="blue-text"
          icon="fas fa-chart-line"
          title="Sales"
          subtitle="Monthly"
          value="PHP 122,500"
        />
      </MDBCol>
      <MDBCol md="3">
        <MonthlyGoal
          textStyle="green-text"
          icon="fas fa-dollar-sign"
          title="Revenue"
          subtitle="Monthly"
          value="PHP 122,500"
        />
      </MDBCol>
      <MDBCol md="3">
        <Tasks
          textStyle="red-text"
          icon="fas fa-exclamation-circle"
          title="Lost Sales"
          subtitle="Monthly"
          value="PHP 122,500"
        />
      </MDBCol>
      <MDBCol md="3">
        <Activity
          textStyle="text-info"
          icon="fas fa-bell"
          title="Active users"
          subtitle="Today"
          value="248"
        />
      </MDBCol>
    </MDBRow>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCards);
