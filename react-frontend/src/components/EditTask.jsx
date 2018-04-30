import React, { Component } from "react";
import { connect } from "react-redux";
import { getHousemates } from "../actions/housemateActions";
import { updateTask } from "../actions/taskActions";

class EditTask extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.onGetHousemates();
  }

  componentDidUpdate() {
    console.log("CALLED");
    if (this.props.editing) {
      this.getTaskName.value = this.props.task.taskName;
    }
  }

  onGetHousemates() {
    this.props.onGetHousemates();
  }

  handleSubmit(e) {
    e.preventDefault();
    //prepare JSON
    Date.prototype.addDays = function(days) {
      var dat = new Date(this.valueOf());
      dat.setDate(dat.getDate() + days);
      return dat;
    };
    var startDate = new Date();
    var endDate = startDate.addDays(7);

    const task = {
      id: this.props.task.id,
      taskName: this.getTaskName.value,
      startDate: startDate,
      endDate: endDate,
      housemate: this.getHousemate.value
    };
    console.log(task);
    this.props.handleSubmit(task);
    this.getTaskName.value = "";
    this.getHousemate.selectedIndex = 0;
  }

  render() {
    return (
      <div className="col-lg-6">
        {this.props.editing ? (
          <form onSubmit={this.handleSubmit}>
            <legend>Edit Task</legend>
            <fieldset className="form-group">
              <label htmlFor="Name">Task Name</label>
              <input
                type="text"
                placeholder="Enter Task Name"
                ref={input => (this.getTaskName = input)}
                className="form-control"
              />

              <label htmlFor="Name">Performed By</label>
              <select
                ref={select => (this.getHousemate = select)}
                className="form-control"
              >
                <option />
                {this.props.housemates.map(housemate => (
                  <option key={housemate.id} value={housemate.id}>
                    {housemate.name}
                  </option>
                ))}
              </select>
            </fieldset>
            <input type="submit" value="Edit" className="btn btn-primary" />
          </form>
        ) : (
          <legend>No Task to Edit </legend>
        )}
      </div>
    );
  }
}

const mapStatetoProps = (state, props) => {
  return {
    housemates: state.housemates.housemates,
    task: state.tasks.taskToEdit,
    editing : state.tasks.editing
  };
};

const mapActionsToProps = {
  onGetHousemates: getHousemates,
  handleSubmit: updateTask
};

export default connect(mapStatetoProps, mapActionsToProps)(EditTask);
