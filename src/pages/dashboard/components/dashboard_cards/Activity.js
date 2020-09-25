import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import React from "react";
import ChatContent from "./ChatContent";

export default function Activity() {
  return (
    <div className="bg-white py-2 px-3 shadow rounded mt-4 dashboard-card">
      <div className="d-flex justify-content-between align-items-center">
        <span className="float-left font-weight-bold ">
          <span className="blue-grey-text">Activity Feed</span>
        </span>
        <small className="float-right text-black-50">Today</small>
      </div>

      <div className="content">
        <ChatContent
          image={require("./../../../../assets/images/user.png")}
          user="Vhon"
          value={"has updated the meeting"}
        />
        <ChatContent
          image={require("./../../../../assets/images/juan.png")}
          user="Juan"
          value={"has completed the testing"}
        />
        <ChatContent own user="Laurence" value={"has fixed display error"} />
        <ChatContent
          image={require("./../../../../assets/images/grid.png")}
          user="Grid"
          value={"passed the exam"}
        />
      </div>
    </div>
  );
}
