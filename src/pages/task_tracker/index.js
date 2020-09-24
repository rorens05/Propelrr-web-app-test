import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigation } from "../../components/navigation";
import { TASK_TRACKER } from "../../utils/contants";

class TaskTracker extends Component {
  render() {
    return <Navigation active={TASK_TRACKER}>Task tracker</Navigation>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskTracker);
