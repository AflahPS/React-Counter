import React, { Component } from "react";

const NavBar = ({ counters }) => {
  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Counter App
        </a>
        <span className="badge bg-success">
          Total Active Counters: {counters.filter((el) => el.value > 0).length}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
