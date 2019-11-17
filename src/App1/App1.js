import React from "react";
import template from "./App1.jsx";

class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      'no': [],
      'col': '',
      'gr': [],
      'gc': [],
      'a': [],
      'b': [],
      'n1': [],
      'a2': [],
      'a3': []
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

    
    if (id == "col") {
      this.setState({
        'col': value
      });
      let name = value.split(",").map(Number);
      var z = name[0]
      var y = name[1]
      var a = []
      var b = []
      for (let i = 1; i < z + 1; i++) {
        a.push(i)
      };
      for (let i = 1; i < y + 1; i++) {
        b.push(i)
      };
      this.setState({
        'a': a,
        'b': b
      })
    }


    if (id == "gr") {
      let name = value.split(",").map(Number);
      var z = name[0]
      var a = []
      for (let i = 1; i < z + 1; i++) {
        a.push(i)
      };
      this.setState({
        'gr': value,
        'a2': a
      })
    }


    if (id == "gc") {
      let name = value.split(",").map(Number);
      var z = name[0]
      var a = []
      for (let i = 1; i < z + 1; i++) {
        a.push(i)
      };

      this.setState({
        'gc': value,
        'a3': a

      })
    }
  }
}
export default App1;