import React    from "react";
import template from "./Accordion.jsx";

class Accordion extends React.Component {
  constructor() {
    super();
    this.state = {
      'no': [],
      'n1': [],
    
    }
    ;
  this.fnPrepareData = this.fnPrepareData.bind(this);
}
  render() {
    return template.call(this);
  }
  fnPrepareData(id, value) {
    if (id == "no") {
      let name = value.split(",").map(Number);
      var z = name[0]
      var a = []
      for (let i = 1; i < z + 1; i++) {
        a.push(i)
      };
      this.setState({
        'no': value,
        'n1': a
      })
    }

  }
}

export default Accordion;
