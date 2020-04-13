import React, { Component } from "react";
import _ from "lodash";

export class TableBody extends Component {
  render() {
    const { data, columns } = this.props;
    return (
      <div>
        <tbody>
          {data.map(item => (
            <tr>
              {columns.map(column => (
                <td>{_.get(item, column.path)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </div>
    );
  }
}

export default TableBody;
