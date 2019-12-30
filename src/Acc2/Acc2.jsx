import "./Acc2.css";
import React from "react";

function template() {
  return (
    <div className="acc-2" style={{ marginLeft: '20px', width: '20%', marginTop: '20px' }}>
      <table border='1px' className="table table-bordered table-hover table-striped">
        <tr  >
          {this.props.n1.map(index =>
            <button type="button" className="collapsible" onClick={this.fnEdit.bind(this)}>Open Section {index}</button>
          )
          }
        </tr >
      </table>
    </div>
  );
};

export default template;

