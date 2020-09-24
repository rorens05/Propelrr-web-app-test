import React from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

const Search = () => {
  return (
    <MDBFormInline className="md-form my-0 ml-5 pl-3 nav-search">
      <MDBIcon icon="search" />
      <input
        className="form-control form-control-sm ml-3 w-75"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    </MDBFormInline>
  );
};

export default Search;
