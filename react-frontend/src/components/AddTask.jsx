import React, { Component } from "react";
import { connect } from "react-redux";
import { LocalForm, Control } from "react-redux-form";
import { getHousemates } from "../actions/housemateActions";
import { createTask } from '../actions/taskActions';

class AddTask extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.onGetHousemates();
  }

  onGetHousemates() {
    this.props.onGetHousemates();
  }

  handleSubmit(val) {
    //prepare JSON
    Date.prototype.addDays = function(days) {
      var dat = new Date(this.valueOf());
      dat.setDate(dat.getDate() + days);
      return dat;
    }
    var startDate = new Date();
    var endDate = startDate.addDays(7);

    const task = {
      taskName: val.taskName,
      startDate: startDate,
      endDate: endDate,
      housemate: val.housemate
    };
    console.log(task);
    this.props.handleSubmit(task);
  }

  render() {
    return (
      <div className="col-lg-6">
        <LocalForm onSubmit={values => this.handleSubmit(values)}>
          <legend>Add Task</legend>
          <fieldset className="form-group">
            <label htmlFor="Name">Task Name</label>
            <Control.text
              model=".taskName"
              className="form-control"
              placeholder="Enter Name of House Task"
            />

            <label htmlFor="Name">Performed By</label>
            <Control.select
              model=".housemate"
              className="form-control"
            >
              <option></option>
              {this.props.housemates.map(housemate => (
                <option key={housemate.id} value={housemate.id}>{housemate.name}</option>
              ))}
            </Control.select>
          </fieldset>
          <input type="submit" value="Add" className="btn btn-primary" />
        </LocalForm>
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
