import React, { Component } from "react";
import { connect } from "react-redux";
import { actSubmitForm, actUnSelectItem } from "./../actions/index";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task_id: "",
      task_name: "",
      task_all: 0,
      task_completed: 0,
      task_active: 0,
    };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.updateItem(this.props.itemSelected);
  }

  componentWillReceiveProps(nextProps) {
    this.updateItem(nextProps.itemSelected);
  }

  updateItem(item) {
    if (item !== null) {
      this.setState({
        task_id: item.id,
        task_name: item.name,
        task_all: item.all,
        task_completed: item.completed,
        task_active: item.active,
      });
    }
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    let item = {
      name: this.state.task_name,
      id: this.state.task_id,
      all: this.state.task_all,
      completed: this.state.task_completed,
      active: this.state.task_active,
    };

    this.props.formSubmit(item);
  }

  handleCancel() {
    this.props.formCancel();
  }

  render() {
    return (
      <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="form-group">
            <input
              value={this.state.task_name}
              onChange={this.handleChange}
              name="task_name"
              type="text"
              className="form-control"
              placeholder="Task Name"
            />
          </div>

          <div className="form-group">
            <input
              value={this.state.all}
              onChange={this.handleChange}
              name="task_all"
              type="number"
              className="form-control"
              placeholder="Task all"
            />
            <input
              value={this.state.completed}
              onChange={this.handleChange}
              name="task_completed"
              type="number"
              className="form-control"
              placeholder="Task completed"
            />
            <input
              value={this.state.active}
              onChange={this.handleChange}
              name="task_active"
              type="number"
              className="form-control"
              placeholder="Task active"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            onClick={this.handleCancel}
            type="button"
            className="btn btn-default"
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemSelected: state.itemSelected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    formCancel: () => {
      dispatch(actUnSelectItem());
    },
    formSubmit: (item) => {
      dispatch(actSubmitForm(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
