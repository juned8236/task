import React    from "react";
import template from "./Input1.jsx";

class Input1 extends React.Component {
  render() {
    return template.call(this);
  }
  fnChange(e){
    debugger;
    const {id,value} =e.target;
    this.props.fnPrepareData(id,value);


  }
}

export default Input1;
