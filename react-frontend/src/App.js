import React, { Component } from "react";
import AddHouseMate from "./components/AddHouseMate";
import AddTask from "./components/AddTask";
import Housemates from "./components/Housemates";
import Tasks from "./components/Tasks";
import EditHouseMate from "./components/EditHouseMate";
import EditTask from "./components/EditTask";

import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 id="forms">Some Forms</h1>
            </div>
            <AddHouseMate />
            <AddTask />
          </div>
          <br />
          <hr />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <h1 id="users">All Users</h1>
            </div>
            <Housemates />
          </div>
          <br />
          <hr />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <h1 id="tasks">All Tasks</h1>
            </div>
            <Tasks />
          </div>
          <br />
          <hr />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <h1 id="forms-edit">Some More Forms</h1>
            </div>
            <EditHouseMate />
            <EditTask />
          </div>
          <br />
          <hr />
          <br />
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state, props) => {
  return {
    editing: state.housemates.editing
  };
};

const mapActionsToProps = {};

export default connect(mapStatetoProps, mapActionsToProps)(App);
