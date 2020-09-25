import React, { Component } from "react";
import DropDown from "./DropDown";

export class Options extends Component {
  render() {
    return (
      <div className="container py-2 px-3 rounded pt-3 mt-4 d-flex flex-wrap justify-content-between align-items-center">
        <div>
          <i className="fas fa-th mr-2 cursor-pointer "></i>
          <i className="fas fa-list grey-text"></i>
        </div>
        <div className="d-flex flex-wrap cursor-pointer align-items-center">
          <DropDown
            label="Client"
            value="All Client"
            options={["Client X", "Client Y", "Client Z"]}
          />
          <DropDown
            label="Label"
            value="All Label"
            options={["Pending", "On Going", "Completed"]}
          />
          <DropDown
            label="Category"
            value="All Category"
            options={["Mobile", "Web", "DevOps"]}
          />
        </div>
      </div>
    );
  }
}

export default Options;
