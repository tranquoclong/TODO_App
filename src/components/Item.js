import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeteleItem, actSelectedItem } from "./../actions/index";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(item) {
    this.props.editItem(item);
  }

  handleDelete(id) {
    this.props.deleteItem(id);
  }

  render() {
    const { item } = this.props;
    const { index } = this.props;

    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.all}</td>
        <td>{item.completed}</td>
        <td>{item.active}</td>
        <td>
          <button
            onClick={() => this.handleEdit(item)}
            type="button"
            className="btn btn-warning"
          >
            Edit
          </button>
          <button
            onClick={() => this.handleDelete(item.id)}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editItem: (item) => {
      dispatch(actSelectedItem(item));
    },
    deleteItem: (id) => {
      dispatch(actDeteleItem(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Item);
