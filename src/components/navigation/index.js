import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export class Navigation extends Component {
  render() {
    return (
      <Sidebar active={this.props.active}>
        <Navbar />
        {this.props.children}
      </Sidebar>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
