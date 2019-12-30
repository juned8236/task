import "./Input1.css";
import React from "react";


function template() {
  const { placeholder, type, id, val } = this.props;

  return (
    <div className="input-1">
          <input id={id} value={val} type={type} placeholder={placeholder} style={{ marginLeft:'20px',width:'20%'}}className="form-control" onChange={this.fnChange.bind(this)} />

    </div>
  );
};
export default template;
