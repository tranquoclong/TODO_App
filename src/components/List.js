import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./Item";
import { orderBy as funcOrderBy } from "lodash";

class List extends Component {
  render() {
    let { items, sort } = this.props;
    console.log(items);
    let { orderBy, orderDir } = sort;
    items = funcOrderBy(items, [orderBy], [orderDir]);
    let elmItem = (
      <tr>
        <th colSpan={4}>Không có công việc</th>
      </tr>
    );
    if (items.length > 0) {
      elmItem = items.map((item, index) => {
        return <Item key={index} item={item} index={index} />;
      });
    }

    return (
      <div className="panel panel-success">
        <div className="panel-heading">List Task</div>
        <table className="table table-hover ">
          <thead>
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                #
              </th>
              <th>Task</th>
              <th style={{ width: "20%" }}>all</th>
              <th style={{ width: "20%" }}>completed</th>
              <th style={{ width: "20%" }}>active</th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
          </thead>
          <tbody>{elmItem}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    sort: state.sort,
  };
};

export default connect(mapStateToProps, null)(List);
