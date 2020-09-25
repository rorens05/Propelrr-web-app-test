import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigation } from "../../components/navigation";
import { TASK_TRACKER } from "../../utils/contants";
import Options from "./components/Options";
import Tasks from "./components/Tasks";

class TaskTracker extends Component {
  render() {
    return (
      <Navigation active={TASK_TRACKER}>
        <Options />
        <Tasks />
      </Navigation>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskTracker);
