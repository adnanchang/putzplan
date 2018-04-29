import React, { Component } from "react";
import { connect } from "react-redux";
import { editHousemate, getHousemates, deleteHousemate } from "../actions/housemateActions";

class Housemates extends Component {
  constructor(props) {
    super(props);

    // this.onEditHousemate = this.onEditHousemate.bind(this);
  }

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.housemates.map(housemate => (
              <tr className="table-primary" key={housemate.id}>
                <td>{housemate.id}</td>
                <td>{housemate.name}</td>
                <td>{housemate.createdAt}</td>
                <td>
                  <form onSubmit={this.onEditHousemate}>
                    <input type="hidden" ref={(input) => this.getId = input} value={housemate.id} />
                    <input
                      type="button"
                      value="Edit"
                      className="btn btn-primary"
                      onClick={() => this.props.onEditHousemate(housemate.id)}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="button"
                      value="Delete"
                      className="btn btn-danger"
                      onClick={() => this.props.onDeleteHouseMate(housemate.id)}
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
    housemates: state.housemates.housemates
  };
};

const mapActionsToProps = {
  onGetHousemates: getHousemates,
  onEditHousemate: editHousemate,
  onDeleteHouseMate: deleteHousemate
};

export default connect(mapStatetoProps, mapActionsToProps)(Housemates);
