import React, { Component } from "react";
import { connect } from "react-redux";
import { getHousemates } from "../actions/housemateActions";
import { createTask } from "../actions/taskActions";

class AddTask extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.onGetHousemates();
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
    var startDate = new Date(this.getDate.value);
    var endDate = startDate.addDays(7);

    console.log(this.getDate.value);
    const task = {
      taskName: this.getTaskName.value,
      startDate: startDate,
      endDate: endDate,
      housemate: this.getHousemate.value
    };
    console.log(task);
    // this.props.handleSubmit(task);
    this.getTaskName.value = '';
    this.getHousemate.selectedIndex = 0;
  }

  render() {
    return (
      <div className="col-lg-6">
        <form onSubmit={this.handleSubmit}>
          <legend>Add Task</legend>
          <fieldset className="form-group">
            <label htmlFor="Name">Task Name</label>
            <input
              type="text"
              placeholder="Enter Task Name"
              ref={input => (this.getTaskName = input)}
              className="form-control"
            />

            <label htmlFor="Housemate">Performed By</label>
            <select
              ref={input => (this.getHousemate = input)}
              className="form-control"
            >
              <option />
              {this.props.housemates.map(housemate => (
                <option key={housemate.id} value={housemate.id}>
                  {housemate.name}
                </option>
              ))}
            </select>

            <label htmlFor="Date">Start Date</label>
            <input type="date" className="form-control" ref={input => (this.getDate = input)} />
          </fieldset>
          <input type="submit" value="Add" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

const mapStatetoProps = (state, props) => {
  return {
    housemates: state.housemates.housemates
  };
};

const mapActionsToProps = {
  onGetHousemates: getHousemates,
  handleSubmit: createTask
};

export default connect(mapStatetoProps, mapActionsToProps)(AddTask);
