import React, { Component } from "react";
import { connect } from "react-redux";
import { getHousemates } from "../actions/housemateActions";

class Housemates extends Component {
  componentDidMount() {
    this.onGetHousemates();
  }

  onGetHousemates() {
    this.props.onGetHousemates();
  }

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {this.props.housemates.map(housemate => (
              <tr className="table-primary" key={housemate.id}>
                <td>{housemate.id}</td>
                <td>{housemate.name}</td>
                <td>{housemate.createdAt}</td>
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
    housemates: state.housemates.housemates
  };
};

const mapActionsToProps = {
  onGetHousemates: getHousemates
};

export default connect(mapStatetoProps, mapActionsToProps)(Housemates);
