import "./Input.css";
import React from "react";
import {Input } from 'reactstrap';


function template() {
  const { placeholder, type, id, val } = this.props;
  return (

  <div>
          <Input id={id} value={val} type={type} placeholder={placeholder} onChange={this.fnChange.bind(this)} />
          </div>
  );
};

export default template;
