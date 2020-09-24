import React from "react";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light shadow-none bg-white p-0">
      <Search />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link " href="#">
              <i class="fas fa-bell navbar-text-color"></i>{" "}
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i class="fas fa-envelope navbar-text-color"></i>{" "}
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i class="fas fa-user navbar-text-color"></i>
              <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
