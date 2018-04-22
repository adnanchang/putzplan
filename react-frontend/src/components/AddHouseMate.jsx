import React, { Component } from "react";
import { connect } from "react-redux";
import { LocalForm, Control } from "react-redux-form";
import {createHousemate} from "../actions/housemateActions";

class AddHouseMate extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(val) {
    const housemate = {
      name: val.name
    }
    this.props.handleSubmit(housemate);
  }

  render() {
    return (
      <div className="col-lg-6">
        <LocalForm onSubmit={values => this.handleSubmit(values)}>
          <legend>Add Housemate</legend>
          <fieldset className="form-group">
            <label htmlFor="Name">Name</label>
            <Control.text
              model=".name"
              className="form-control"
              placeholder="Enter Name of House Mate"
            />
          </fieldset>
          <input type="submit" value="Add" className="btn btn-primary" />
        </LocalForm>
      </div>
    );
  }
}

const mapStatetoProps = (state, props) => {
  return {}
};

const mapActionsToProps = {
  handleSubmit: createHousemate
};

export default connect(mapStatetoProps, mapActionsToProps)(AddHouseMate);
