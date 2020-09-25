import { MDBBtn } from "mdbreact";
import React from "react";

export default function Tabs({ children }) {
  return (
    <div className="bg-white py-2 px-3 shadow rounded pt-3 mt-5 position-relative">
      <div className="custom-tabs rounded">
        <MDBBtn size="sm" color="default" className="shadow-none selected">
          Users
        </MDBBtn>
        <MDBBtn size="sm" color="default" className="shadow-none">
          Sales
        </MDBBtn>
        <MDBBtn size="sm" color="default" className="shadow-none">
          Network
        </MDBBtn>
        <MDBBtn size="sm" color="default" className="shadow-none">
          Customers
        </MDBBtn>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
