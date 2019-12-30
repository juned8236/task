import "./Accordion.css";
import React from "react";
import Input1 from '../Input1/index';
import Acc2 from '../Acc2/index';

function template() {
  const {  no,n1} = this.state;

  return (
    <div className="accordion">
<label style={{marginLeft:'20px'}}>Enter number of section</label>
<Input1 type="text" id="no"  val={no} fnPrepareData={this.fnPrepareData} />
{
        no == '' ? '' : <Acc2 n1={n1}/>
      }
  </div>
  );
};

export default template;
