import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import React from "react";

export default function Tasks() {
  return (
    <div className="bg-white py-2 px-3 shadow rounded mt-4 dashboard-card">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="float-left font-weight-bold ">
          <span className="blue-grey-text">Tasks</span>
        </span>
        <small className="float-right text-black-50">Today</small>
      </div>
      <div className="content">
        <MDBTable borderless>
          <MDBTableHead></MDBTableHead>
          <MDBTableBody>
            <tr>
              <td className="py-1 green-text">
                <i className="far fa-circle"></i>
              </td>
              <td className="py-1 green-text">Fix Design Bug</td>
            </tr>
            <tr>
              <td className="py-1 green-text">
                <i className="far fa-circle"></i>
              </td>
              <td className="py-1 green-text">Create login page</td>
            </tr>
            <tr>
              <td className="py-1 green-text">
                <i className="far fa-circle"></i>
              </td>
              <td className="py-1 green-text">Mobile responsiveness</td>
            </tr>
            <tr>
              <td className="py-1 green-text">
                <i className="fas fa-check-circle"></i>
              </td>
              <td className="py-1 grey-text  line-through">Add Dashboard</td>
            </tr>
            <tr>
              <td className="py-1 green-text">
                <i className="fas fa-check-circle"></i>
              </td>
              <td className="py-1 grey-text  line-through">Add report</td>
            </tr>
            <tr>
              <td className="py-1 green-text">
                <i className="fas fa-check-circle"></i>
              </td>
              <td className="py-1 grey-text  line-through">
                Update Task Tracker
              </td>
            </tr>
            <tr>
              <td className="py-1 green-text">
                <i className="fas fa-check-circle"></i>
              </td>
              <td className="py-1 grey-text  line-through">
                Client x project proposal
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
}
