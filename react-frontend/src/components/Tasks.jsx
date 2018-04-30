import React, { Component } from "react";
import { connect } from "react-redux";
import { getTasks, editTask, deleteTask } from "../actions/taskActions";

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
                <form onSubmit={this.onEditTask}>
                    <input type="hidden" ref={(input) => this.getId = input} value={task.id} />
                    <input
                      type="button"
                      value="Edit"
                      className="btn btn-primary"
                      onClick={() => this.props.onEditTask(task.id)}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="button"
                      value="Delete"
                      className="btn btn-danger"
                      onClick={() => this.props.onDeleteTask(task.id)}
                    />
                  </form>
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
  onGetTasks: getTasks,
  onEditTask: editTask,
  onDeleteTask: deleteTask
};

export default connect(mapStatetoProps, mapActionsToProps)(Housemates);
