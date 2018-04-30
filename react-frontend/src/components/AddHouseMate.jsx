import React, { Component } from "react";
import { connect } from "react-redux";
import { createHousemate } from "../actions/housemateActions";

class AddHouseMate extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.getName.value;
    const data = {
      name: name
    };
    this.getName.value = "";
    this.props.handleSubmit(data);
  }

  render() {
    return (
      <div className="col-lg-6">
        <form onSubmit={this.handleSubmit}>
          <legend>Add Housemate</legend>
          <fieldset className="form-group">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              placeholder="Enter Housemate Name"
              ref={input => (this.getName = input)}
              className="form-control"
            />
          </fieldset>
          <input type="submit" value="Add" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

const mapStatetoProps = (state, props) => {
  return {};
};

const mapActionsToProps = {
  handleSubmit: createHousemate
};

export default connect(mapStatetoProps, mapActionsToProps)(AddHouseMate);
