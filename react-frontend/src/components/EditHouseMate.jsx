import React, { Component } from "react";
import { connect } from "react-redux";
import { updateHousemate } from "../actions/housemateActions";

class EditHouseMate extends Component {
  constructor(props) {
    super(props);

    this.name = "";
    this.message = null;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onTodoChange = this.onTodoChange.bind(this);
  }

  componentDidUpdate() {
    console.log("CALLED");
    if (this.props.editing) {
      this.getName.value = this.props.housemate.name;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const housemate = {
      id: this.props.housemate.id,
      name: this.getName.value
    };
    this.props.handleSubmit(housemate);
    this.getName.value = "";
  }

  onTodoChange(event) {
    this.getName.value = event.target.value;
  }

  render() {
    if (this.props.housemate.id == null) {
      this.message = "Select a housemate to edit";
    } else {
      this.message = "Editing " + this.props.housemate.name;
    }
    return (
      <div className="col-lg-6">
        {this.props.editing ? (
          <form onSubmit={this.handleSubmit}>
            <legend>Edit Housemate</legend>
            <p>{this.message}</p>
            <fieldset className="form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                placeholder="Enter Housemate Name"
                ref={input => (this.getName = input)}
                className="form-control"
                onChange={event => this.onTodoChange(event)}
              />
            </fieldset>
            <input type="submit" value="Edit" className="btn btn-primary" />
          </form>
        ) : (
          <legend> Nothing to Edit </legend>
        )}
      </div>
    );
  }
}

const mapStatetoProps = (state, props) => {
  return {
    housemate: state.housemates.housemateToEdit,
    editing: state.housemates.editing
  };
};

const mapActionsToProps = {
  handleSubmit: updateHousemate
};

export default connect(mapStatetoProps, mapActionsToProps)(EditHouseMate);
