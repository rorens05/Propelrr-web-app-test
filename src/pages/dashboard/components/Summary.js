import { MDBCol, MDBRow } from "mdbreact";
import React, { Component } from "react";
import { connect } from "react-redux";
import SummaryCard from "./SummaryCard";

export const Summary = () => {
  return (
    <MDBRow className="mt-3">
      <MDBCol sm="3">
        <SummaryCard
          textStyle="blue-text"
          icon="fas fa-chart-line"
          title="Sales"
          subtitle="Monthly"
          value="PHP 122,500"
        />
      </MDBCol>
      <MDBCol sm="3">
        <SummaryCard
          textStyle="green-text"
          icon="fas fa-dollar-sign"
          title="Revenue"
          subtitle="Monthly"
          value="PHP 122,500"
        />
      </MDBCol>
      <MDBCol sm="3">
        <SummaryCard
          textStyle="red-text"
          icon="fas fa-exclamation-circle"
          title="Lost Sales"
          subtitle="Monthly"
          value="PHP 122,500"
        />
      </MDBCol>
      <MDBCol sm="3">
        <SummaryCard
          textStyle="blue-text"
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

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
