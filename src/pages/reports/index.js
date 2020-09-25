import { MDBContainer } from "mdbreact";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigation } from "../../components/navigation";
import { REPORTS } from "../../utils/contants";
import Table from "./container/Table";
import Tabs from "./container/Tabs";

export class Reports extends Component {
  render() {
    return (
      <div>
        <Navigation active={REPORTS}>
          <MDBContainer>
            <Tabs>
              <Table />
            </Tabs>
          </MDBContainer>
        </Navigation>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
