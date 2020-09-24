import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { DASHBOARD, REPORTS, TASK_TRACKER } from "../../../utils/contants";

const ACTIVE = "py-2 px-3 sidebar-link active";
const INACTIVE = "py-2 px-3 sidebar-link";

export class Sidebar extends Component {
  state = {
    toggled: false,
  };

  onToggled = () => {
    document.querySelector("#wrapper").classList.toggle("toggled");
  };

  render() {
    const { children, active } = this.props;
    return (
      <div className="d-flex" id="wrapper">
        <div className="border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">ANALYTICS WEB APP </div>
          <div className="list-group mt-3">
            <Link
              to="/dashboard"
              className={active == DASHBOARD ? ACTIVE : INACTIVE}
            >
              <i class="fas fa-tachometer-alt d-inline-block mx-2"></i>
              Dashboard
            </Link>
            <Link
              to="/reports"
              className={active == REPORTS ? ACTIVE : INACTIVE}
            >
              <i class="fas fa-chart-pie d-inline-block mx-2"></i>
              Reports
            </Link>
            <Link
              to="/task_tracker"
              className={active == TASK_TRACKER ? ACTIVE : INACTIVE}
            >
              <i class="fas fa-list-alt d-inline-block mx-2"></i>
              Task Tracker
            </Link>
            <Link to="/login" className={INACTIVE}>
              <i class="fas fa-sign-out-alt d-inline-block mx-2"></i>
              Signout
            </Link>
          </div>
        </div>

        <div id="page-content-wrapper" className="position-relative">
          <span className="" id="menu-toggle" onClick={this.onToggled}>
            <i className="fas fa-bars" />
          </span>
          <div className="sidebar-content">{children}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
