import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks } from "../actions/taskActions";

class Housemates extends Component {
  componentDidMount() {
    this.onGetTasks();
  }

  onGetTasks() {
    this.props.onGetTasks();
  }

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Performed By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tasks.map(task => (
              <tr className="table-primary" key={task.id}>
                <td>{task.id}</td>
                <td>{task.taskName}</td>
                <td>{task.startDate}</td>
                <td>{task.endDate}</td>
                <td>{task.housemate.name}</td>
                <td>
                  <input
                    type="submit"
                    value="Edit"
                    className="btn btn-primary"
                  />&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="submit"
                    value="Delete"
                    className="btn btn-danger"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStatetoProps = (state, props) => {
  return {
    tasks: state.tasks.tasks
  };
};

const mapActionsToProps = {
  onGetTasks: getTasks
};

export default connect(mapStatetoProps, mapActionsToProps)(Housemates);
